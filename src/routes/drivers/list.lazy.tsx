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
import { useIntentTitle } from "#providers/IntentProvider"

const drivers = [
  {
    id: "DRV001",
    driverName: "John Doe",
    email: "johndoe@gmail.com",
    phone: "1234567890",
    balance: 1000,
    status: "Active",
  },
  {
    id: "DRV002",
    driverName: "Bob Smith",
    email: "bobsmith@gmail.com",
    phone: "1234567890",
    balance: 1000,
    status: "Active",
  },
  {
    id: "DRV003",
    driverName: "Jane Marly",
    email: "janemarly@gmail.com",
    phone: "1234567890",
    balance: 1000,
    status: "Active",
  },
  {
    id: "DRV004",
    driverName: "Alice Lee",
    email: "alicelee@gmail.com",
    phone: "1234567890",
    balance: 1000,
    status: "Active",
  },
]

const DriversListPage = () => {
  useIntentTitle("Drivers List")
  return (
    <Table>
      <TableCaption>Drivers List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Driver ID</TableHead>
          <TableHead>Driver Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Balance</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {drivers.map((driver) => (
          <TableRow key={driver.id}>
            <TableCell className="font-medium">{driver.id}</TableCell>
            <TableCell>{driver.driverName}</TableCell>
            <TableCell>{driver.email}</TableCell>
            <TableCell>{driver.phone}</TableCell>
            <TableCell>${driver.balance}</TableCell>
            <TableCell>{driver.status}</TableCell>
            <TableCell className="flex flex-row gap-2 items-center">
              <Link to="/drivers/driver">
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

export const Route = createLazyFileRoute("/drivers/list")({
  component: () => <DriversListPage />,
})
