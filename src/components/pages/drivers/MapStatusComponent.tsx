import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

const MapStatusComponent = ({
  currentLocation,
}: {
  currentLocation: google.maps.LatLngLiteral
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="h-[400px] w-full overflow-hidden rounded">
      <GoogleMap
        center={currentLocation}
        zoom={14}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={currentLocation} label="Driver Location" />
      </GoogleMap>
    </div>
  )
}

export default MapStatusComponent
