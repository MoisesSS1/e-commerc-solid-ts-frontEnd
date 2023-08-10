import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children, redirectTo }: any) => {
  const authenticated = localStorage.getItem("token");

  return authenticated ? <Navigate to={redirectTo} /> : children;
};
