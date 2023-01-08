import Box from "@mui/material/Box";
import { useState } from "react";
import LoginWindow from "../components/auth/LoginWindow";
import RegisterWindow from "../components/auth/RegisterWindow";
const Home = () => {
  const [showRegisterWindow, setShowRegisterWindow] = useState(true);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      sx={{
        backgroundImage: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
      }}
    >
      {showRegisterWindow ? (
        <RegisterWindow setShowRegisterWindow={setShowRegisterWindow} />
      ) : (
        <LoginWindow setShowRegisterWindow={setShowRegisterWindow} />
      )}
    </Box>
  );
};

export default Home;
