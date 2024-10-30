import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/statics/earnings")({
  component: () => <div>Hello /statics/earnings!</div>,
})
