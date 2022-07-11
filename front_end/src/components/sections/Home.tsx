import React, { useContext } from "react"
import LinkComponent from "../LinkComponent"
import Title from "../Title"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../context/AuthProvider"

const Home = () => {
  const navigate = useNavigate()
  const { setAuth } = useContext(AuthContext)

  const homeLinks = [
    { path: "/editor", text: "Go to the Editor page" },
    { path: "/admin", text: "Go to the Admin page" },
    { path: "/lounge", text: "Go to the Lounge" },
    { path: "/linkpage", text: "Go to the the link page" }
  ]

  const logout = async () => {
    setAuth({})
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
