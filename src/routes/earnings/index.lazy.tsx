import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/earnings/")({
  component: () => <div>Hello /earnings/!</div>,
})
