import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { ReactNode } from "react"

interface NoteProps {
  focus: boolean
  val: string
  validVal: boolean
  id: string
  children: ReactNode
}
const Note = (props: NoteProps) => {
  const { focus, val, validVal, id, children } = props
  return (
    <p
      {...{ id }}
      className={focus && val && !validVal ? "instructions" : "offscreen"}
    >
      <FontAwesomeIcon icon={faInfoCircle} />
      {children}
    </p>
  )
}

export default Note
