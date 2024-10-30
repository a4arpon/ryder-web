import {
  CurrentLocationStatus,
  CurrentTripStatus,
} from "#components/pages/drivers/CurrentStatus"
import {
  AccountBalance,
  DriverInfo,
  DriverStatus,
} from "#components/pages/drivers/Info"
import { createFileRoute } from "@tanstack/react-router"

const DriverPage = () => {
  const { driverID } = Route.useSearch() as { driverID: string }
  return (
    <>
      <div className="grid lg:grid-cols-5 gap-4">
        <DriverInfo driverID={driverID} />
        <div className="lg:col-span-2 flex flex-col gap-4">
          <DriverStatus />
          <AccountBalance />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <CurrentTripStatus tripID="dsdf34" />
        <CurrentLocationStatus />
      </div>
    </>
  )
}

export const Route = createFileRoute("/drivers/driver")({
  component: () => <DriverPage />,
})
