import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import CreateUser from "../pages/UserPages/CreateUser/CreateUser";
import UpdateUser from "../pages/UserPages/UpdateUser/UpdateUser";

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
    path: "/",
    element: <Home />,
  },
];

//inclui todas as rotas separada por useCase
const router = createBrowserRouter([...userRouter, ...adminRouter]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
