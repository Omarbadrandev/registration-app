import { AxiosError } from "axios"
import { useEffect, useState } from "react"
import axios from "../api/axios"
import { User } from "../types"

// https://blog.openreplay.com/integrating-axios-with-react-hooks

export const useGetUsers = async (): Promise<{
  users: User[] | undefined
  error: string
  loaded: boolean
}> => {
  const [users, setUsers] = useState<User[]>()
  const [error, setError] = useState("")
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()
    const url = "/users"
    const getUsers = async () => {
      try {
        const response = await axios.get(url, {
          signal: controller.signal
        })
        isMounted && setUsers(response.data)
      } catch (error) {
        const err = error as AxiosError
        setError(err.message)
      } finally {
        setLoaded(true)
      }
    }

    getUsers()

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isMounted = false
      controller.abort()
    }
  }, [])

  return { users, error, loaded }
}
