import { Badge } from "#components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "#components/ui/card"
import type { Driver } from "#hooks/useDrivers"
import { Radio, User, Wallet } from "lucide-react"

export const DriverInfo = ({ driver }: { driver: Driver }) => {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Driver Profile</CardTitle>
          <Badge className="rounded-full py-1 px-1" variant="outline">
            <User />
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-4 font-semibold">
          <p>Driver ID</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{driver?.driverID}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Name</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{driver?.name}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Email</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{driver?.email}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Phone</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{driver?.phone_number}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Driver License</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{driver?.driving_license}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export const AccountBalance = ({ balance }: { balance: number }) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Account Balance</CardTitle>
          <Badge className="rounded-full py-1 px-1" variant="outline">
            <Wallet />
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="ont-medium">${balance.toFixed(2)}</p>
      </CardContent>
    </Card>
  )
}

export const DriverStatus = ({
  status,
  tripStatus,
}: { status: string; tripStatus: string }) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Status</CardTitle>
          <Badge
            className="rounded-full py-1 px-1"
            variant={status === "on_trip" ? "destructive" : "outline"}
          >
            <Radio />
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-medium uppercase">Driver Status: {status}</p>
        <p className="font-medium uppercase">Trip Status: {tripStatus}</p>
      </CardContent>
    </Card>
  )
}
