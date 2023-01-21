import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../hooks/reduxHooks";
import useAuth from "../hooks/useAuth";

import Home from "./Home";

const PageProtection = () => {
  const user = useAppSelector((state) => state.auth.user);
  // useAuth();

  return user ? <Outlet /> : <Navigate to="/" />;

  // return user ? <Outlet /> : <Home />;
};

export default PageProtection;
