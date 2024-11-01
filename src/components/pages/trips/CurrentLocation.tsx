import { Badge } from "#components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "#components/ui/card"
import {
  GoogleMap,
  DirectionsRenderer,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api"
import { MapPinned } from "lucide-react"
import { useEffect, useState } from "react"

export const CurrentLocation = ({
  tripID,
  startingLocation,
  destinationLocation,
}: {
  tripID: string
  startingLocation: google.maps.LatLngLiteral
  destinationLocation: google.maps.LatLngLiteral
}) => {
  const [CurrentLocation, setCurrentLocation] = useState({
    lat: startingLocation.lat,
    lng: startingLocation.lng,
  })

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  })
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null)
  const calculateDirections = async () => {
    if (!startingLocation || !destinationLocation) return
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: CurrentLocation ?? startingLocation,
      destination: destinationLocation,
      travelMode: google.maps.TravelMode.DRIVING,
      optimizeWaypoints: true,
    })
    setDirectionsResponse(results)
  }
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    calculateDirections()
  }, [CurrentLocation, startingLocation])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws/trip_updates/")

    ws.onopen = () => {
      ws.send(JSON.stringify({ "trip-id": tripID })) // Send initial request with trip ID
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setCurrentLocation({
        lat:
          Number.parseFloat(data?.currentLocationLat) ?? startingLocation?.lat,
        lng:
          Number.parseFloat(data?.currentLocationLong) ?? startingLocation?.lng,
      })
    }

    ws.onerror = (error) => {
      console.error("WebSocket error:", error)
    }

    ws.onclose = () => {
      console.log("WebSocket connection closed")
    }

    // Set up an interval to send updates every 1 second
    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ "trip-id": tripID })) // Send regular updates
      }
    }, 2000)

    // Cleanup function to close WebSocket and clear interval on component unmount
    return () => {
      ws.close()
      clearInterval(interval)
    }
  }, [tripID])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Current Location</CardTitle>
          <Badge className="rounded-full py-1 px-1" variant="outline">
            <MapPinned />
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="h-[600px] w-full overflow-hidden rounded">
        <GoogleMap
          center={startingLocation}
          zoom={13}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {directionsResponse && (
            <DirectionsRenderer
              directions={directionsResponse}
              options={{
                polylineOptions: { strokeColor: "#FF4545", strokeWeight: 5 },
                markerOptions: {
                  animation: google.maps.Animation.BOUNCE,
                  optimized: true,
                },
              }}
            />
          )}
          <Marker position={startingLocation} label="Start" />
          <Marker position={startingLocation} label="Current" />
          <Marker position={destinationLocation} label="Destination" />
        </GoogleMap>
      </CardContent>
    </Card>
  )
}
