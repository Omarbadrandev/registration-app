import React, { useState } from "react"

interface Props {
  type: string
  setType: (newVal: string) => void
}

const ShowPasswordButton = (props: Props) => {
  const { type, setType } = props
  //TODO: move logic outside of the component
  const [text, setText] = useState("Show")
  const handleShowPasswordButtonClicked = () => {
    if (type === "password") {
      setType("text")
      setText("Hide")
    } else {
      setType("password")
      setText("Show")
    }
  }
  return (
    <button
      className="show-button"
      onClick={handleShowPasswordButtonClicked}
      type="button"
    >
      {text}
    </button>
  )
}

export default ShowPasswordButton
