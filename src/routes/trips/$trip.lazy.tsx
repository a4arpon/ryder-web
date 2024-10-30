import { createLazyFileRoute } from "@tanstack/react-router"

export const TripPage = () => {
  return <div>TripPage</div>
}

export const Route = createLazyFileRoute("/trips/$trip")({
  component: () => <TripPage />,
})
