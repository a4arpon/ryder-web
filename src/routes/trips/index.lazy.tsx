import { Link, createLazyFileRoute } from "@tanstack/react-router"
import { Info, Trash } from "lucide-react"
import { Button } from "#components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#components/ui/table"
import { useTrips } from "#hooks/useTrips"
import { SkeletonList } from "#components/shared/SkeletonList"

export const TripsPage = () => {
  const { trips, isLoading } = useTrips()

  if (isLoading) {
    return <SkeletonList listNumber={10} />
  }

  return (
    <Table>
      <TableCaption>Drivers List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Trip ID</TableHead>
          <TableHead>Driver Name</TableHead>
          <TableHead>Trip Status</TableHead>
          <TableHead>Trip Started On</TableHead>
          <TableHead>Trip Destination</TableHead>
          <TableHead>Trip Cost</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trips.map((trip) => (
          <TableRow key={trip?.tripID}>
            <TableCell className="font-medium">{trip?.tripID}</TableCell>
            <TableCell>{trip?.driver_name}</TableCell>
            <TableCell>{trip?.tripStatus.toUpperCase()}</TableCell>
            <TableCell>
              {new Date(trip?.createdAt).toLocaleTimeString()}
            </TableCell>
            <TableCell>{trip?.destination}</TableCell>
            <TableCell>${trip?.tripFee.toFixed(2)}</TableCell>
            <TableCell className="flex flex-row gap-2 items-center">
              <Link to={`/trips/${trip?.tripID}`}>
                <Button size="icon">
                  <Info />
                </Button>
              </Link>
              <Button size="icon" variant="destructive" disabled>
                <Trash />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export const Route = createLazyFileRoute("/trips/")({
  component: () => <TripsPage />,
})
