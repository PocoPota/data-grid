import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/revogrid/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/revogrid/"!</div>
}
