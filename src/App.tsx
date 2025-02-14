import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { ProductsDatail } from "./pages/datail";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "product/:id",
        element: <ProductsDatail/>
      }
    ]
  }
])
export { router }

