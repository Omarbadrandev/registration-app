import React from "react"
import LinkComponent from "../LinkComponent"

const NotFound = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div className="flexGrow">
        <LinkComponent to={"/"} text={"Visit Our Homepage"} />
      </div>
    </article>
  )
}

export default NotFound
