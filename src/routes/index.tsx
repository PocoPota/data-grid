import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="App">
     <h1>Hello World!</h1>
     <ul>
      <li><Link to='/revogrid'>RevoGrid Demo</Link></li>
      <li><Link to='/glide'>Glide Demo</Link></li>
     </ul>
    </div>
  )
}
