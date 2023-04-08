import { useAppSelector } from "@hooks";
import { Routes, Route, Navigate } from "react-router";
import { LoginWindow, RegisterWindow, useAuth } from "src/features/auth";
import {
  Main,
  AuthUserPage,
  OtherUserPage,
  PageNotFound,
  Home,
} from "src/pages";

export const AppRoutes = () => {
  const user = useAppSelector((state) => state.auth.user?.id);

  useAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Home />}>
        <Route index element={<LoginWindow />}></Route>
      </Route>

      <Route path="/register" element={user ? <Navigate to="/" /> : <Home />}>
        <Route index element={<RegisterWindow />}></Route>
      </Route>

      <Route path="/" element={user ? <Main /> : <Navigate to="/login" />}>
        <Route index element={<AuthUserPage />}></Route>
        <Route path="profile/:id" element={<OtherUserPage />}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
