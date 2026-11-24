
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
export default function UserName() {
     const name = useContext(UserContext);
  return (
    <div>
      <h2>User Name</h2>
      <p>{name}</p>
    </div>
  )
}
