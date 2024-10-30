import { createLazyFileRoute, useNavigate } from "@tanstack/react-router"
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
import { useDrivers } from "#hooks/useDrivers"
import { SkeletonList } from "#components/shared/SkeletonList"

const DriversListPage = () => {
  useIntentTitle("Drivers List")

  const { drivers, isLoading } = useDrivers()

  const navigator = useNavigate()

  if (isLoading) {
    return <SkeletonList listNumber={5} />
  }

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
        {drivers?.map((driver) => (
          <TableRow key={driver?.driverID}>
            <TableCell className="font-medium">{driver?.driverID}</TableCell>
            <TableCell>{driver?.name}</TableCell>
            <TableCell>{driver?.email}</TableCell>
            <TableCell>{driver?.phone_number}</TableCell>
            <TableCell>${driver?.balance}</TableCell>
            <TableCell className="uppercase">{driver?.status}</TableCell>
            <TableCell className="flex flex-row gap-2 items-center">
              <Button
                size="icon"
                onClick={() =>
                  navigator({
                    to: "/drivers/driver",
                    search: { driverID: driver.driverID },
                  })
                }
              >
                <Info />
              </Button>

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
