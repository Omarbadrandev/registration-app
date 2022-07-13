import { useState, useEffect } from "react"
import { User } from "../../types"
import { v4 as uuidv4 } from "uuid"
import axios from "../../api/axios"

const Users = () => {
  const [users, setUsers] = useState<User[]>()
  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getUsers = async () => {
      try {
        const response = await axios.get("/users")
      } catch (error) {
        console.error(error)
      }
    }
  }, [])

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user) => (
            <li key={uuidv4()}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <p>No Users to display</p>
      )}
    </article>
  )
}

export default Users
