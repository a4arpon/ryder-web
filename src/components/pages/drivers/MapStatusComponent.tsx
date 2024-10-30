import { useEffect, useState } from "react"

import {
  GoogleMap,
  DirectionsRenderer,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api"

const MapStatusComponent = ({
  startingLocation,
  currentLocation,
  destinationLocation,
}: {
  startingLocation: google.maps.LatLngLiteral
  currentLocation: google.maps.LatLngLiteral
  destinationLocation: google.maps.LatLngLiteral
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  })

  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null)

  const calculateDirections = async () => {
    if (!startingLocation || !destinationLocation) return

    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: currentLocation,
      destination: destinationLocation,
      travelMode: google.maps.TravelMode.DRIVING,
      optimizeWaypoints: true,
    })
    setDirectionsResponse(results)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    calculateDirections()
  }, [currentLocation])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="h-[400px] w-full overflow-hidden rounded">
      <GoogleMap
        center={currentLocation}
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
        <Marker position={currentLocation} label="Current" />
        <Marker position={destinationLocation} label="Destination" />
      </GoogleMap>
    </div>
  )
}

export default MapStatusComponent
