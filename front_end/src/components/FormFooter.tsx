import React from "react"

interface FormFooterProps {
  caption: string
  linkText: string
  link: string
}

export const FormFooter = (props: FormFooterProps) => {
  const { caption, linkText, link } = props
  return (
    <p>
      {caption}
      <br />
      <span className="line">
        {/*put router link here*/}
        <a href={link}>{linkText}</a>
      </span>
    </p>
  )
}

export default FormFooter
