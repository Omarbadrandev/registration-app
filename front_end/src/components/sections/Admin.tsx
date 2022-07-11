import React from "react"
import LinkComponent from "../LinkComponent"
import Title from "../Title"

const Admin = () => {
  return (
    <section>
      <Title title={"Admins Page"} />
      <br />
      <p>You must have been assigned an Admin role.</p>
      <div className="flexGrow">
        <LinkComponent to="/" text={"Home"} />
      </div>
    </section>
  )
}

export default Admin
