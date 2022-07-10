import React from "react"

interface ErrMsgProps {
  errRef: React.RefObject<HTMLParagraphElement>
  errMsg: string
}

export const ErrorMsgParagraph = (props: ErrMsgProps) => {
  const { errRef, errMsg } = props
  return (
    <p
      ref={errRef}
      className={errMsg ? "errmsg" : "offscreen"}
      // Indicates that an element will be updated,
      // and describes the types of updates the user agents,
      // assistive technologies, and user can expect from the live region.
      // the aria-live means that if we set the focus on this element that has
      // the ref of error ref it will be announced with the screen reader  and that is important if an error exists and then here we simply display the error msg which is the error msg state
      aria-live="assertive"
    >
      {errMsg}
    </p>
  )
}
