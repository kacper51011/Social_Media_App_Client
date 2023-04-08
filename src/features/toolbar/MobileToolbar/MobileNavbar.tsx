import { useDispatch } from "react-redux";
import { setMode } from "../../../store/themeSlice";
import { MobileMenu } from "./components/MobileMenu";
import { ColumnsChangeButtons } from "./components/ColumnsChangeButtons";
import { LogoutButton } from "./components/LogoutButton";
import { Container } from "./components";

export const MobileNavbar = () => {
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(setMode());
  };

  return (
    <Container>
      <MobileMenu toggleMode={toggleMode} />

      <ColumnsChangeButtons />

      <LogoutButton />
    </Container>
  );
};
