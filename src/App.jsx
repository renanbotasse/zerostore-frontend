import Home from './pages/home/index'
import Item from './pages/item/index'
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/item",
      element: <Item/>,
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
