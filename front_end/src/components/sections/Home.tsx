import React from "react"
import LinkComponent from "../LinkComponent"
import Title from "../Title"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { Auth } from "../../types"

const Home = () => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()

  const homeLinks = [
    { path: "/editor", text: "Go to the Editor page" },
    { path: "/admin", text: "Go to the Admin page" },
    { path: "/lounge", text: "Go to the Lounge" },
    { path: "/linkpage", text: "Go to the the link page" }
  ]

  const logout = async () => {
    // setting an empty object and casting it to Auth type
    setAuth({} as Auth)
    navigate("/linkpage")
  }

  return (
    <section>
      <Title title={"Home"} />
      {homeLinks.map((link) => (
        <LinkComponent to={link.path} text={link.text} />
      ))}
      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
    </section>
  )
}

export default Home
