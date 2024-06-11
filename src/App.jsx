import Landing from './pages/landing/index'
import About from './pages/about/index'
import Contact from './pages/contact/index'
import Faq from './pages/faq/index'
import Filters from './pages/filter/index'
import LegalMentions from './pages/legalMentions'
import Sales from './pages/sales'
import ProductNew from './pages/productNew'
import ProductDetails from './pages/productDetail'
import Search from './pages/search'
import AyaneoDetails from './pages/ayaneo'
import Checkout from './pages/checkout'

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
      element: <Landing/>,
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
    {
      path: "/filter",
      element: <Filters/>,
    },
    {
      path: "/sales",
      element: <Sales/>,
    },
    {
      path: "/new",
      element: <ProductNew/>,
    },
    {
      path: "/product-detail",
      element: <ProductDetails/>,
    },
    {
      path: "/search",
      element: <Search/>,
    },
    {
      path: "/ayaneo",
      element: <AyaneoDetails/>,
    },
    {
      path: "/checkout",
      element: <Checkout/>,
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
