import { Outlet } from "react-router";
import { useAppSelector } from "../hooks/reduxHooks";

import Home from "./Home";

const PageProtection = () => {
  const user = useAppSelector((state) => state.auth.user);
  // useAuth();

  return user ? <Outlet /> : <Home />;
};

export default PageProtection;
