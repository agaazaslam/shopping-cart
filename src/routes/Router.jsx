import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Productdetails from "../pages/Productdetails";
import ErrorPage from "../pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "products",
    element: <Products />,
    children: [{ path: ":id", element: <Productdetails /> }],
  },
  {
    path: "product",
    element: <Productdetails />,
    children: [{ path: "productdetails", element: <Productdetails /> }],
  },
];

const router = createBrowserRouter(routes);

export default router;
