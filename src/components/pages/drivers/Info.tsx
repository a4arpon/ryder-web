import { Badge } from "#components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "#components/ui/card"
import { Radio, User, Wallet } from "lucide-react"

export const DriverInfo = ({ driverID }: { driverID: string }) => {
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
            <span className="ml-2">{driverID}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Name</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">Mr. Wayne</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Email</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">a4arpon@gmail.com</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Phone</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">8801995942029</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Driver License</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">fkjhwer23kj4kj34</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export const AccountBalance = () => {
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
        <p className="text-3xl font-medium">$343.00</p>
      </CardContent>
    </Card>
  )
}

export const DriverStatus = () => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Driver Status</CardTitle>
          <Badge className="rounded-full py-1 px-1" variant="outline">
            <Wallet />
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row justify-start gap-4 items-center">
        <p className="text-3xl font-medium">Online</p>
        <Radio />
      </CardContent>
    </Card>
  )
}
