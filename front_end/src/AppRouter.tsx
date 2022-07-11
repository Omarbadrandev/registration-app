import React from "react"
import { Routes, Route } from "react-router-dom"
import App from "./App"
import Layout from "./components/sections/Layout"
import Login from "./components/sections/registration/Login"
import Register from "./components/sections/registration/Register"
import LinkPage from "./components/sections/LinkPage"
import Unauthorized from "./components/sections/registration/Unauthorized"
import NotFound from "./components/sections/NotFound"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
