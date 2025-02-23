import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import FindMyCommunity from './pages/FindMyCommunity.jsx'
import RentalPropertyServices from './pages/RentalPropertyServices.jsx'
import CondoServices from './pages/CondoServices.jsx'
import Faq from './pages/Faq.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/',
        element: <Home /> 
      },
      {
        path: '/community',
        element: <FindMyCommunity />
      },
      {
        path: '/rental',
        element: <RentalPropertyServices />
      },
      {
        path: '/services',
        element: <CondoServices />
      },
      {
        path: '/faq',
        element: <Faq />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
