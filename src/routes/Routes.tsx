import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUser from "../pages/UserPages/CreateUser/CreateUser";
import ShowProducts from "../pages/ProductPages/ShowProducts/ShowProducts";
import Login from "../pages/UserPages/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../pages/Cart/Cart";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

//component para rotas privadas

const userRouter = [
  {
    path: "/user/login",
    element: (
      <PublicRoutes redirectTo={"/"}>
        <Login />,
      </PublicRoutes>
    ),
  },
  {
    path: "/user/create",
    element: (
      <PublicRoutes>
        <CreateUser />
      </PublicRoutes>
    ),
  },
];

const productRouter = [
  {
    path: "/",
    element: <ShowProducts />,
  },
];

const cartRouter = [
  {
    path: "/cart",
    element: (
      <PrivateRoutes redirectTo={"/user/login"}>
        <Cart />
      </PrivateRoutes>
    ),
  },
];

//inclui todas as rotas, separadas por entidades
const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [...userRouter, ...productRouter, ...cartRouter],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
