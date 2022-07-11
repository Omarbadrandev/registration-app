import React, { useRef, useState, useEffect, useContext } from "react"
import axios from "../../../api/axios"
import { RequestsConfig } from "../../../api/config"
import { ErrorMsgParagraph } from "../../ErrMsg"
import FormButton from "../../FormButton"
import FormFooter from "../../FormFooter"
import Input from "../../Input"
import Label from "../../Label"
import {
  PASSWORD_INPUT_ID,
  PWD_REGEX,
  USER_NAME_INPUT_ID,
  USER_REGEX
} from "../../../constants"
import { AxiosError } from "axios"
import SuccessSection from "../../SuccessSection"
import AuthContext from "../../../context/AuthProvider"
import { LoginResponse } from "../../../types"
import Title from "../../Title"

const LOGIN_URL = "/auth"

export const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef<HTMLInputElement>(null)
  const errRef = useRef<HTMLParagraphElement>(null)

  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)
  // TODO: use userFocus and pwdFocus
  const [userFocus, setUserFocus] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  useEffect(() => {
    userRef.current?.focus()
  }, [])

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd])

  const LoginInputs = [
    {
      setInputVal: setUser,
      setInputValFocus: setUserFocus,
      inputRef: userRef,
      val: user,
      labelText: "Username:",
      inputType: "text",
      inputId: USER_NAME_INPUT_ID
    },
    {
      setInputVal: setPwd,
      setInputValFocus: setPwdFocus,
      val: pwd,
      labelText: "Password:",
      inputId: PASSWORD_INPUT_ID,
      inputType: "password"
    }
  ]

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const v1 = USER_REGEX.test(user)
    const v2 = PWD_REGEX.test(pwd)
    type Case = "noServer" | "badRequest" | "unauthorized"

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry")
    }

    try {
      const response = await axios.post<LoginResponse>(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        RequestsConfig
      )
      const { data } = response
      const accessToken = data.accessToken
      const roles = data.roles
      setAuth({ user, pwd, roles, accessToken })
      setUser("")
      setPwd("")
      setSuccess(true)
    } catch (err) {
      console.log(err)
      const error = err as AxiosError
      console.log(error.response)

      const errorCases: Record<Case, boolean> = {
        noServer: !error?.response,
        badRequest: error.response?.status === 400,
        unauthorized: error.response?.status === 401
      }

      switch (true) {
        case errorCases.noServer:
          setErrMsg("No Server Response")
          break
        case errorCases.badRequest:
          setErrMsg("Missing Username or Password")
          break
        case errorCases.unauthorized:
          setErrMsg("Unauthorized")
          break
        default:
          setErrMsg("Login Failed")
          break
      }

      errRef.current?.focus()
    }
  }
  return (
    <>
      {success ? (
        <SuccessSection
          title={"You are logged in!"}
          linkText={"Go To Home"}
          link={"/"}
        />
      ) : (
        <section>
          <ErrorMsgParagraph {...{ errRef }} {...{ errMsg }} />
          <Title title={"login"} />
          <form onSubmit={handleSubmit}>
            {LoginInputs.map((input) => (
              <Input
                setInputVal={input.setInputVal}
                inputRef={input.inputRef}
                label={
                  <Label
                    val={input.val}
                    labelText={input.labelText}
                    contentPropertyValue={input.inputId}
                    variant={"login"}
                  />
                }
                inputType={input.inputType}
                inputId={input.inputId}
                key={input.inputId}
                setInputValFocus={input.setInputValFocus}
              />
            ))}
            <FormButton disabled={false} text={"Sign In"} />
            <FormFooter
              caption={"Need an Account?"}
              linkText={"Sign Up"}
              link={"register"}
            />
          </form>
        </section>
      )}
    </>
  )
}

export default Login
