import { Badge } from "#components/ui/badge"
import { Card, CardContent, CardHeader } from "#components/ui/card"
import { Activity, DollarSign, User } from "lucide-react"

export const EarningsInsights = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <p className="uppercase">Revenue (M)</p>
            <Badge className="rounded-full py-1 px-1" variant="outline">
              <DollarSign />
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold">$674,56</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <p className="uppercase">Profit (M)</p>
            <Badge className="rounded-full py-1 px-1" variant="outline">
              <DollarSign />
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold">$12,56</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <p className="uppercase">New Customers (M)</p>
            <Badge className="rounded-full py-1 px-1" variant="outline">
              <User />
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold">34,56</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <p className="uppercase">Active Users (H)</p>
            <Badge className="rounded-full py-1 px-1" variant="outline">
              <Activity />
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold">734</p>
        </CardContent>
      </Card>
    </ >
  )
}
