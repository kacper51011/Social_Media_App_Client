import { Container, Stack } from "@mui/material";
import { LanguageChangeButton } from "@components";
import { TitleLink, ColorModeButton, LogoutButton } from "./components";

export const DesktopNavbar = () => {
  return (
    <Container>
      <TitleLink />
      <Stack direction="row" minWidth="15%" justifyContent="space-between">
        <ColorModeButton />
        <LanguageChangeButton />
        <LogoutButton />
      </Stack>
    </Container>
  );
};
