import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useGetUsers } from "../../hooks/useGetUsers"
import { User } from "../../types"

const Users = () => {
  //TODO: refactor query
  const [queryResult, setQueryResult] = useState<{
    users: User[] | undefined
    error: string
    loaded: boolean
  }>({
    users: undefined,
    error: "",
    loaded: false
  })

  useGetUsers().then((result) => setQueryResult(result))

  const { users, error, loaded } = queryResult

  console.log(error, loaded)

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
