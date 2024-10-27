import { createLazyFileRoute } from "@tanstack/react-router"
import { useIntentTitle } from "#providers/IntentProvider"
import { EarningsInsights } from "#components/pages/dashboard/EarningsInsights"
import PendingDashboard from "#components/pages/dashboard/PendingDashboard"
import { RecentTrips } from "#components/pages/dashboard/RecentTrips"
import TopCities from "#components/pages/dashboard/TopCities"
import { TripsInsights } from "#components/pages/dashboard/DriversStatus"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#components/ui/tabs"

export const HomePage = () => {

  useIntentTitle("Analytics Dashboard")

  return (
    <>
      <Tabs defaultValue="general" >
        <TabsList>
          <TabsTrigger value="general">General Insights</TabsTrigger>
          <TabsTrigger value="trips">Trips Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <EarningsInsights />
        </TabsContent>
        <TabsContent value="trips" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <TripsInsights />
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 lg:grid-cols-2">
        <RecentTrips />
        <TopCities />
      </div>
    </>
  )
}

export const Route = createLazyFileRoute("/")({
  component: () => <HomePage />,
  pendingComponent: () => <PendingDashboard />,
})
