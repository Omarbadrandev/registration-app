import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

interface LabelProps {
  validVal?: boolean
  val: string
  labelText: string
  contentPropertyValue: string
}

const Label = (props: LabelProps) => {
  const { validVal, val, labelText, contentPropertyValue } = props
  return (
    <label htmlFor={contentPropertyValue}>
      {labelText}
      <span className={validVal && val? "valid" : "hide"}>
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <span className={validVal || !val ? "hide" : "invalid"}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </label>
  )
}

export default Label
