import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
  },

  {
    path: "/users",
    element: <p>users</p>,
  },
  {},
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
