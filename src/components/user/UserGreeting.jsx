
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export default function UserGreeting() {
  const name = useContext(UserContext)

  return (
    <h2>Hello, {name}! Welcome back.</h2>
  )
}
