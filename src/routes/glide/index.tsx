import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/glide/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/glide/"!</div>
}
