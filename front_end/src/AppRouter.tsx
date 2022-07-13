import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/sections/Layout"
import Login from "./components/sections/registration/Login"
import Register from "./components/sections/registration/Register"
import LinkPage from "./components/sections/LinkPage"
import Unauthorized from "./components/sections/registration/Unauthorized"
import Home from "./components/sections/Home"
import Editor from "./components/sections/Editor"
import Lounge from "./components/sections/Lounge"
import RequireAuth from "./components/sections/RequireAuth"

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150
}

const AppRouter = () => {
  const routes = [
    { path: "login", element: <Login />, routeType: "public" },
    { path: "register", element: <Register />, routeType: "public" },
    { path: "linkpage", element: <LinkPage />, routeType: "public" },
    { path: "unauthorized", element: <Unauthorized />, routeType: "public" },
    {
      path: "/",
      element: <Home />,
      routeType: "private",
      allowedRoles: [ROLES.User, ROLES.Admin, ROLES.User]
    },
    {
      path: "editor",
      element: <Editor />,
      routeType: "private",
      allowedRoles: [ROLES.Editor]
    },
    {
      path: "lounge",
      element: <Lounge />,
      routeType: "private",
      allowedRoles: [ROLES.Admin, ROLES.Editor]
    }
  ]

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <React.Fragment key={route.path}>
            {route.routeType === "public" ? (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ) : (
              <Route
                element={
                  <RequireAuth
                    allowedRoles={route.allowedRoles ? route.allowedRoles : []}
                  />
                }
              >
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              </Route>
            )}
          </React.Fragment>
        ))}
      </Route>
    </Routes>
  )
}

export default AppRouter
