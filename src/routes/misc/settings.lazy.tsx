import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/misc/settings")({
  component: () => <div>Hello /misc/settings!</div>,
})
