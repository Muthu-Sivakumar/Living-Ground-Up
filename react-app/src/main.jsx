import { createBrowserRouter, RouterProvider } from "react-router"
import routes from "./routes.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
