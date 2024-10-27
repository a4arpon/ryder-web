import { MapLocationComponent } from '#components/pages/drivers/MapLocationComponent'
import { Badge } from '#components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#components/ui/card'
import { useIntentTitle } from '#providers/IntentProvider'
import { createLazyFileRoute } from '@tanstack/react-router'
import { MapPinned } from 'lucide-react'

const DriversByLocationPage = () => {
  useIntentTitle("Tips")
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex flex-row items-center justify-between">
              <p className="uppercase">Drivers On Location</p>
              <Badge className="rounded-full py-1 px-1" variant="outline">
                <MapPinned />
              </Badge>
            </div>
          </CardTitle>
          <CardDescription>
            Drivers will be shown here on the available location
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MapLocationComponent />
        </CardContent>
      </Card>
    </>
  )
}

export const Route = createLazyFileRoute('/drivers/by-location')({
  component: () => <DriversByLocationPage />,
})
