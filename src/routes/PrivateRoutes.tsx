import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children, redirectTo }: any) => {
  const authenticated = localStorage.getItem("token");
  return authenticated ? children : <Navigate to={redirectTo} />;
};
