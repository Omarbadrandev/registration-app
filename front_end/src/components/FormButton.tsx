import React from "react"

interface FormButtonProps {
  disabled: boolean
  text: string
}

const FormButton = (props: FormButtonProps) => {
  const { disabled, text } = props
  return (
    <button disabled={disabled} type="submit">
      {text}
    </button>
  )
}

export default FormButton
