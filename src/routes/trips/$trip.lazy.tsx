import { DriverInfo } from "#components/pages/drivers/Info"
import { CurrentLocation } from "#components/pages/trips/CurrentLocation"
import { CurrentPassenger } from "#components/pages/trips/CurrentPassenger"
import { TripFees, TripInfo } from "#components/pages/trips/TripInfo"
import { SkeletonList } from "#components/shared/SkeletonList"
import { useTrip } from "#hooks/useTrips"
import { useIntentTitle } from "#providers/IntentProvider"
import { createLazyFileRoute } from "@tanstack/react-router"

export const TripPage = () => {
  const { trip: tripID } = Route.useParams()
  useIntentTitle(`Trip #${tripID} Details`)

  const { trip, isLoading } = useTrip(tripID)

  if (isLoading) {
    return <SkeletonList listNumber={3} lineHeight="h-[300px]" />
  }

  return (
    <>
      <div className="grid lg:grid-cols-5 gap-4">
        <TripInfo trip={trip} />
        <TripFees fee={trip?.tripFee} driverEarning={trip?.driversEarning} />
      </div>
      <div className="grid lg:grid-cols-6 gap-4">
        <DriverInfo driver={trip?.driver} />
        <CurrentPassenger passenger={trip?.passenger} />
      </div>
      <CurrentLocation
        tripID={tripID}
        startingLocation={{
          lat: Number.parseFloat(trip.startedFromLat),
          lng: Number.parseFloat(trip.startedFromLong),
        }}
        destinationLocation={{
          lat: Number.parseFloat(trip.destinationLat),
          lng: Number.parseFloat(trip.destinationLong),
        }}
      />
    </>
  )
}

export const Route = createLazyFileRoute("/trips/$trip")({
  component: () => <TripPage />,
})
