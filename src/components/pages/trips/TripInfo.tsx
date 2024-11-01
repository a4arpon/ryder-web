import { Badge } from "#components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "#components/ui/card"
import type { Trip } from "#hooks/useTrips"
import { Car, DollarSign } from "lucide-react"

export const TripInfo = ({ trip }: { trip: Trip }) => {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Trip</CardTitle>
          <Badge className="rounded-full py-1 px-1" variant="secondary">
            <Car />
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-2 col-span-4">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-5 gap-4">
            <p className="col-span-2">Trip ID</p>
            <p className="col-span-3">: {trip?.tripID}</p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <p className="col-span-2">Trip Started</p>
            <p className="col-span-3">
              : {new Date(trip?.createdAt).toLocaleTimeString()}
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <p className="col-span-2">Passenger Pickup</p>
            <p className="col-span-3">
              : {new Date(trip?.startingTime).toLocaleTimeString()}
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <p className="col-span-2">Trip Ended</p>
            <p className="col-span-3">
              : {new Date(trip?.updatedAt).toLocaleTimeString()}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-5 gap-4">
            <p className="col-span-2">Started From</p>
            <p className="col-span-3">: {trip?.startedFrom}</p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <p className="col-span-2">Destination</p>
            <p className="col-span-3">: {trip?.destination}</p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <p className="col-span-2">Trip Duration</p>
            <p className="col-span-3">
              :{" "}
              {new Date(trip?.startingTime).getTime() -
                new Date(trip?.updatedAt).getTime() <
              0
                ? "Ongoing"
                : `
                ${Math.floor(
                  (new Date(trip?.startingTime).getTime() -
                    new Date(trip?.updatedAt).getTime()) /
                    (1000 * 60 * 60),
                )}h ${Math.floor(
                  (new Date(trip?.startingTime).getTime() -
                    new Date(trip?.updatedAt).getTime()) /
                    (1000 * 60),
                )}m ${Math.floor(
                  (new Date(trip?.startingTime).getTime() -
                    new Date(trip?.updatedAt).getTime()) /
                    1000,
                )}s`}
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <p className="col-span-2">Trip Status</p>
            <p className="col-span-3">: {trip?.tripStatus.toUpperCase()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export const TripFees = ({
  fee,
  driverEarning,
}: {
  fee: number
  driverEarning: number
}) => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Fees</CardTitle>
          <Badge className="rounded-full py-1 px-1" variant="secondary">
            <DollarSign />
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-4 justify-between mb-3 items-center text-lg font-semibold">
          <p>Trip Fee</p>
          <p>${fee.toFixed(2)}</p>
        </div>
        <div className="flex flex-row gap-4 justify-between mb-3 items-center text-lg font-semibold">
          <p>Driver's Earning</p>
          <p>${driverEarning.toFixed(2)}</p>
        </div>
        <div className="flex flex-row gap-4 justify-between mb-3 items-center text-lg font-bold">
          <p>Profit</p>
          <p>${(fee - driverEarning).toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  )
}
