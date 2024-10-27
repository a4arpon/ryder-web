import { APIProvider, Map } from '@vis.gl/react-google-maps';
export const MapLocationComponent = () => {
  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        defaultZoom={3}
        gestureHandling={'greedy'}
        className='h-[500px] lg:h-[600px] w-full'
      />
    </APIProvider>
  )
}

