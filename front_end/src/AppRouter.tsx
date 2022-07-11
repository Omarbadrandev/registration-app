import React from "react"
import { Routes, Route } from "react-router-dom"
import App from "./App"
import Layout from "./components/Layout"
import Login from "./registration/Login"
import Register from "./registration/Register"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
