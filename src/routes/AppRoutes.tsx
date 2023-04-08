import { useAppSelector } from "@hooks";
import { Home } from "@mui/icons-material";
import { Routes, Route, Navigate } from "react-router";
import { LoginWindow, RegisterWindow } from "src/features/auth";
import { AuthUserPage } from "src/pages/AuthUserPage";
import { Main } from "src/pages/Main";
import { OtherUserPage } from "src/pages/OtherUserPage";
import { PageNotFound } from "src/pages/PageNotFound";

export const AppRoutes = () => {
  const user = useAppSelector((state) => state.auth.user?.id);
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
