import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import AppLayout from './layouts/app-layout'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
       {
        path: '/',
        element:<LandingPage />
       }
    ]
  },
])

function App() {
  return (
    <RouterProvider router ={router} />
  )
}

export default App

