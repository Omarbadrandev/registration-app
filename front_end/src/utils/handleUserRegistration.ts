import { AxiosError } from "axios"
import axios from "../api/axios"
import { RequestsConfig } from "../api/config"
import { PWD_REGEX, USER_REGEX } from "../constants"

// axios docs:
// https://axios-http.com/docs/post_example
// https://axios-http.com/docs/intro
// https://jasonwatmore.com/post/2021/06/25/axios-http-post-request-examples

const REGISTER_URL = "/register"

interface RegisterRequestProps {
  user: string
  pwd: string
  setErrMsg: (val: string) => void
  setSuccess: (val: boolean) => void
}

type handleUserSubmitPropsType = RegisterRequestProps

// TODO: rename it as a hook and adapt the request in the registration onSubmit function
export const handleUserSubmit = async (
  e: any,
  RegisterRequestProps: handleUserSubmitPropsType
) => {
  const { user, pwd, setErrMsg, setSuccess } = RegisterRequestProps
  e.preventDefault()
  //  if button is enabled with JS hack
  const v1 = USER_REGEX.test(user)
  const v2 = PWD_REGEX.test(pwd)

  if (!v1 || !v2) {
    setErrMsg("Invalid Entry")
    //  here we are just submitting anything so we don't submit anything to our backend that would have the database
    //  the database where we would actually save a user with invalid information
    return
  }
  console.log(user, pwd)

  try {
    const response = await axios.post(
      REGISTER_URL,
      JSON.stringify({ user, pwd }),
      RequestsConfig
    )

    const { data } = response
    // console.log(response?.data)
    // console.log(response.statusText)
    console.log(data)
    console.log(JSON.stringify(response))
    setSuccess(true)

    // clear state and controlled inputs
    // need value attrib on inputs for this
    // setUser('');
    // setPwd('');
    // setMatchPwd('');
  } catch (err) {
    console.log(err)
    const error = err as AxiosError
    console.log(error.response)
    if (!error?.response) {
      setErrMsg("No Server Response")
    } else if (error.response?.status === 409) {
      setErrMsg("Username Taken")
    } else {
      setErrMsg("Registration Failed")
    }
    // error.current.focus();
  }
}
