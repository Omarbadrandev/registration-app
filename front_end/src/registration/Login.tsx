import React, { useRef, useState, useEffect } from "react"
import { ErrorMsgParagraph } from "../components/ErrMsg"
import FormTitle from "../components/FormTitle"
import Input from "../components/Input"
import Label from "../components/Label"
import { PASSWORD_INPUT_ID, USER_NAME_INPUT_ID } from "../constants"

export const Login = () => {
  const userRef = useRef<HTMLInputElement>(null)
  const errRef = useRef<HTMLParagraphElement>(null)

  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)
  const [userForcus, setUserFocus] = useState(false)
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

  return (
    <section>
      <ErrorMsgParagraph {...{ errRef }} {...{ errMsg }} />
      <FormTitle title={"login"} />
      <form>
        {LoginInputs.map((input) => (
          <Input
            setInputVal={input.setInputVal}
            inputRef={input.inputRef}
            label={
              <Label
                val={input.val}
                labelText={input.labelText}
                contentPropertyValue={input.inputId}
              />
            }
            inputType={input.inputType}
            inputId={input.inputId}
            key={input.inputId}
            setInputValFocus={input.setInputValFocus}
          />
        ))}
      </form>
    </section>
  )
}

export default Login
