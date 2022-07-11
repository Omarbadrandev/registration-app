import React from "react"
import LinkComponent from "../LinkComponent"
import Title from "../Title"

const Lounge = () => {
  return (
    <section>
      <Title title={"The Lounge"} />
      <p>Admins and Editors can hang out here.</p>
      <div className="flexGrow">
        <LinkComponent to={"/"} text={"Home"} />
      </div>
    </section>
  )
}

export default Lounge
