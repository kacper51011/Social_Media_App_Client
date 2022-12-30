import { Routes, Route } from "react-router";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import { RootState } from "./store";
import { themeSettings } from "./utils/theme";
import UserCard from "./components/UserCard";

function App() {
  const mode = useSelector((state: RootState) => state.theme.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div>
      <UserCard
        photo="123"
        firstName="Kacper"
        lastName="Tylec"
        location="Nagoszyn"
        followedPeopleNumber={10}
        job="Programmer"
        numberOfLikes={10}
        numberOfProfileViews={15}
      ></UserCard>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
