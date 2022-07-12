import React from "react"

interface FormFooterProps {
  caption: string
  linkText: string
  link: string
}

export const FormFooter = (props: FormFooterProps) => {
  const { caption, linkText, link } = props
  return (
    <p className="fromFooter">
      {caption}
      <span className="line">
        <a href={link}>{linkText}</a>
      </span>
    </p>
  )
}

export default FormFooter
