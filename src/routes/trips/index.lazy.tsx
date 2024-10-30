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

const invoices = [
  {
    id: "INV001",
    driverName: "John Doe",
    status: "On Going",
    startedOn: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2),
    endedOn: new Date(),
    tripCost: 2500,
    startsFrom: "New York",
    endsAt: "Los Angeles",
  },
  {
    id: "INV002",
    driverName: "Bob Smith",
    status: "On Going",
    startedOn: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3),
    endedOn: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2),
    tripCost: 2500,
    startsFrom: "San Francisco",
    endsAt: "Los Angeles",
  },
  {
    id: "INV003",
    driverName: "Jane Marly",
    status: "On Going",
    startedOn: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 4),
    endedOn: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3),
    tripCost: 2500,
    startsFrom: "Queens",
    endsAt: "Manhattan",
  },
  {
    id: "INV004",
    driverName: "Rabi Ahmed",
    status: "On Going",
    startedOn: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 5),
    endedOn: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 4),
    tripCost: 2500,
    startsFrom: "Los Angeles",
    endsAt: "Miami",
  },
]

export const TripsPage = () => {
  return (
    <Table>
      <TableCaption>Drivers List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Trip ID</TableHead>
          <TableHead>Driver Name</TableHead>
          <TableHead>Trip Status</TableHead>
          <TableHead>Trip Started On</TableHead>
          <TableHead>Trip Ended On</TableHead>
          <TableHead>Trip Cost</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.driverName}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.startedOn.toLocaleTimeString()}</TableCell>
            <TableCell>{invoice.endedOn.toLocaleTimeString()}</TableCell>
            <TableCell>${invoice.tripCost}</TableCell>
            <TableCell className="flex flex-row gap-2 items-center">
              <Link to={`/trips/${invoice.id}`}>
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
