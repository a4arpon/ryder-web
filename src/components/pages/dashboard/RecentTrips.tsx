import { Car, CarTaxiFront, FileSymlink } from "lucide-react"
import { Badge } from "#components/ui/badge"
import { Button } from "#components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#components/ui/card"
import { useNavigate } from "@tanstack/react-router"

const RecentTrip = () => {
  const navigator = useNavigate()
  return (
    <>
      <div className="flex flex-row items-start justify-between gap-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <Button
            className="rounded h-full py-2 px-2 gap-2"
            variant="secondary"
            onClick={() =>
              navigator({
                to: "/trips/$trip",
                params: {
                  trip: "43d4cf",
                },
              })
            }
          >
            <CarTaxiFront size={24} />
            #43d4cf
            <FileSymlink size={14} />
          </Button>
          <div>
            <p className="font-medium">Destination : New York</p>
            <p className="text-sm">Driver: John Doe</p>
          </div>
        </div>
        <div>
          <p>2023-05-01</p>
          <p className="text-sm">10:00 AM</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export const RecentTrips = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-center">
          Trips
          <Badge className="rounded-full py-1 px-1" variant="outline">
            <Car size={24} />
          </Badge>
        </CardTitle>
        <CardDescription>Last 7 trips</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <RecentTrip />
        <RecentTrip />
        <RecentTrip />
        <RecentTrip />
        <RecentTrip />
        <RecentTrip />
        <RecentTrip />
      </CardContent>
    </Card>
  )
}
