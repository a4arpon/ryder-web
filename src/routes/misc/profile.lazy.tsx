import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/misc/profile')({
  component: () => <div>Hello /misc/profile!</div>,
})
