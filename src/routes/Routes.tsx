import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUser from "../pages/UserPages/CreateUser/CreateUser";
import UpdateUser from "../pages/UserPages/UpdateUser/UpdateUser";
import ShowProducts from "../pages/ProductPages/ShowProducts/ShowProducts";

const userRouter = [
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

//inclui todas as rotas, separadas por entidades
const router = createBrowserRouter([
  ...userRouter,
  ...adminRouter,
  ...productRouter,
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
