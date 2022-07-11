import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { AuthProvider } from "./context/AuthProvider"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    {/* A <BrowserRouter> uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly.
     Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router.
      Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well. */}
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
