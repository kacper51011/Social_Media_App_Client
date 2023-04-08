import { Stack } from "@mui/material";
import { LanguageChangeButton } from "@components";
import {
  TitleLink,
  ColorModeButton,
  LogoutButton,
  Container,
} from "./components";

export const DesktopToolbar = () => {
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
