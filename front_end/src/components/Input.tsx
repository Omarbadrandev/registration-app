import React, { useState } from "react"
import ShowPasswordButton from "./ShowPasswordButton"

interface InputProps {
  validVal?: boolean
  setInputVal: (value: React.SetStateAction<string>) => void
  setInputValFocus: (value: React.SetStateAction<boolean>) => void
  inputRef?: React.RefObject<HTMLInputElement>
  note?: JSX.Element
  label: JSX.Element
  inputType: string
  inputId: string
}

const Input = (props: InputProps) => {
  const {
    validVal,
    setInputVal,
    setInputValFocus,
    inputRef,
    note,
    label,
    inputType,
    inputId
  } = props

  const [type, setType] = useState(inputType)

  return (
    <div className="input">
      {label}
      <input
        type={type}
        id={inputId}
        ref={inputRef}
        autoComplete="off"
        //  onChange function will provide the event and then will set the value state
        //  so this ties this ties the input to the valueState
        onChange={(e) => setInputVal(e.target.value)}
        //  this input is also required
        required
        //  hibernated structure is also fine in react as shown in "aria-invalid"
        aria-invalid={validVal ? "false" : "true"}
        aria-describedby={inputId}
        // with onFocus we were simply setting
        // if the input field has focus we're setting that to true
        onFocus={() => setInputValFocus(true)}
        // onBlur is thats when you leave the input field we're setting the focus defaults
        onBlur={() => setInputValFocus(false)}
      />
      {inputType === "password" && (
        <ShowPasswordButton {...{ type }} {...{ setType }} />
      )}
      {note}
    </div>
  )
}

export default Input
