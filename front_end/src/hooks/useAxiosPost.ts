import { AxiosError } from "axios"
import { useEffect, useState } from "react"
import axios from "../api/axios"

export const useAxiosPost = (url: string, payload: {}) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    axios
      .post(url, payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true))
  }, [])
  return { data, error, loaded }
}
