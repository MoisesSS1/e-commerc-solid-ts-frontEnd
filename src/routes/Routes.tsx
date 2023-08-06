import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUser from "../pages/UserPages/CreateUser/CreateUser";
import UpdateUser from "../pages/UserPages/UpdateUser/UpdateUser";
import ShowProducts from "../pages/ProductPages/ShowProducts/ShowProducts";
import Login from "../pages/UserPages/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../pages/Cart/Cart";

const userRouter = [
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/create",
    element: <CreateUser />,
  },
  {
    path: "/user/update",
    element: <UpdateUser />,
  },
];

const adminRouter = [
  {
    path: "/admin",
    element: "",
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
    element: <Cart />,
  },
];

//inclui todas as rotas, separadas por entidades
const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [...userRouter, ...adminRouter, ...productRouter, ...cartRouter],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
