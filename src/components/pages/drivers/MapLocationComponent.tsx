import {
  APIProvider,
  AdvancedMarker,
  Pin,
  Map as VisMap,
} from "@vis.gl/react-google-maps"

type Driver = {
  id: string
  location: google.maps.LatLngLiteral
  status: string
}
const drivers: Driver[] = [
  {
    id: "driver1",
    location: { lat: -33.8567844, lng: 151.213108 },
    status: "Available",
  },
  {
    id: "driver2",
    location: { lat: -33.8472767, lng: 151.2188164 },
    status: "On Trip",
  },
  {
    id: "driver3",
    location: { lat: -33.8209738, lng: 151.2563253 },
    status: "Offline",
  },
  {
    id: "driver4",
    location: { lat: -33.8567844, lng: 151.213158 },
    status: "Available",
  },
  {
    id: "driver5",
    location: { lat: -33.8472767, lng: 151.2188269 },
    status: "On Trip",
  },
  {
    id: "driver6",
    location: { lat: -33.8209738, lng: 151.2563567 },
    status: "Offline",
  },
  {
    id: "driver7",
    location: { lat: -33.8567844, lng: 151.213138 },
    status: "Available",
  },
  {
    id: "driver8",
    location: { lat: -33.8472767, lng: 151.2138164 },
    status: "On Trip",
  },
  {
    id: "driver9",
    location: { lat: -33.8209738, lng: 151.2536253 },
    status: "Offline",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Available":
      return "#00FF00" // Green
    case "On Trip":
      return "#0000FF" // Blue
    case "Offline":
      return "#808080" // Gray
    default:
      return "#FBBC04" // Default color
  }
}

const DriverMarkers = (props: { drivers: Driver[] }) => (
  <>
    {props.drivers.map((driver: Driver) => (
      <AdvancedMarker key={driver.id} position={driver.location}>
        <Pin
          background={getStatusColor(driver.status)}
          glyphColor="#000"
          borderColor="#000"
        />
      </AdvancedMarker>
    ))}
  </>
)

export const MapLocationComponent = () => {
  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <VisMap
        mapId={"map"}
        defaultCenter={{ lat: -33.8567844, lng: 151.208138 }}
        defaultZoom={14}
        gestureHandling={"greedy"}
        className="h-[500px] lg:h-[600px] w-full"
      >
        <DriverMarkers drivers={drivers} />
      </VisMap>
    </APIProvider>
  )
}
