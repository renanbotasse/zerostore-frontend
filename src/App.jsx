import Home from './pages/home/index'
import About from './pages/about/index'
import Contact from './pages/contact/index'
import Faq from './pages/faq/index'
import LegalMentions from './pages/legalMentions'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './globals.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/faq",
      element: <Faq/>,
    },
    {
      path: "/legal-mentions",
      element: <LegalMentions/>,
    },
  ]);
  return (
    <>
      <ChakraProvider>
      <RouterProvider router={router} />
      </ChakraProvider>
    </>
  )
}

export default App
