import { Badge } from "#components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "#components/ui/card"
import type { Passenger } from "#hooks/useTrips"
import { User } from "lucide-react"

export const CurrentPassenger = ({ passenger }: { passenger: Passenger }) => {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="uppercase">Passenger</CardTitle>
          <Badge className="rounded-full py-1 px-1" variant="secondary">
            <User />
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-4 font-semibold">
          <p>Passenger ID</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{passenger?.userID}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Name</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{passenger?.name}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Email</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{passenger?.email}</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <p>Phone</p>
          <p className="col-span-4">
            <span>:</span>
            <span className="ml-2">{passenger?.phone}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
