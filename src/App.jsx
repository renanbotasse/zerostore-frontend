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
import CartPage from './pages/cart'
import CheckoutSignPage from './pages/sign'
import RegisterPage from './pages/register'
import SignInPage from './pages/signin'
import CheckoutPage from './pages/checkout' 
import NewOrder from './pages/neworder'
import ProfileOrdersPage from './pages/profileOrders'
import ProfilePage from './pages/profile'

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
      path: "/cart",
      element: <CartPage/>,
    },
    {
      path: "/sign",
      element: <CheckoutSignPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>,
    },
    {
      path: "/signin",
      element: <SignInPage/>,
    },
    {
      path: "/checkout",
      element: <CheckoutPage/>,
    },
    {
      path: "/profile",
      element: <ProfilePage/>,
    },
    {
      path: "/profile/neworder",
      element: <NewOrder/>,
    },
    {
      path: "/profile/orders",
      element: <ProfileOrdersPage/>,
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
