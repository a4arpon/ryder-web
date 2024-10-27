import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drivers/driver')({
  component: () => <div>Hello /drivers/driver!</div>,
})
