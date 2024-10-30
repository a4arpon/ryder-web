import { Activity, Ban, Car, ClipboardCheck } from "lucide-react"
import { Badge } from "#components/ui/badge"
import { Card, CardContent, CardHeader } from "#components/ui/card"

const StatusCard = ({
  title,
  icon,
  counter,
}: {
  title: string
  icon: JSX.Element
  counter: string
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <p className="uppercase">{title}</p>
          <Badge className="rounded-full py-1 px-1" variant="outline">
            {icon}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">{counter}</p>
      </CardContent>
    </Card>
  )
}

export const TripsInsights = () => {
  return (
    <>
      <StatusCard title="Total Trips" icon={<Car />} counter="7434,34" />
      <StatusCard
        title="In-process Trips"
        icon={<Activity />}
        counter="34,34"
      />
      <StatusCard
        title="Completed Trips"
        icon={<ClipboardCheck />}
        counter="5655,00"
      />
      <StatusCard title="Canceled Trips" icon={<Ban />} counter="45,00" />
    </>
  )
}
