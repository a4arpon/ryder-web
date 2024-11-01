import {
  CurrentLocationStatus,
  CurrentTripStatus,
} from "#components/pages/drivers/CurrentStatus"
import {
  AccountBalance,
  DriverInfo,
  DriverStatus,
} from "#components/pages/drivers/Info"
import { SkeletonList } from "#components/shared/SkeletonList"
import { useDriver } from "#hooks/useDrivers"
import { createFileRoute } from "@tanstack/react-router"

const DriverPage = () => {
  const { driverID } = Route.useSearch() as { driverID: string }
  const { driver, isLoading } = useDriver(driverID)

  if (isLoading) {
    return <SkeletonList listNumber={2} lineHeight="h-[300px]" />
  }

  return (
    <>
      <div className="grid lg:grid-cols-5 gap-4">
        <DriverInfo driver={driver} />
        <div className="lg:col-span-2 flex flex-col gap-4">
          <DriverStatus
            status={driver?.status}
            tripStatus={driver?.trip_status ?? "Unknown"}
          />
          <AccountBalance balance={driver?.balance} />
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
