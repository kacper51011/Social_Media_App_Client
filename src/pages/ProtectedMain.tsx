import { Navigate } from "react-router";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import Main from "./Main";

export const ProtectedMain = () => {
  const user = useAppSelector((state) => state.auth.user);
  // useAuth();

  return user ? <Main /> : <Navigate to="/" />;

  // return user ? <Outlet /> : <Home />;
};
