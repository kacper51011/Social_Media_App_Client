import { Navigate } from "react-router";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import { Main } from "./Main";

export const ProtectedMain = () => {
  const user = useAppSelector((state) => state.auth.user);

  return user ? <Main /> : <Navigate to="/" />;
};
