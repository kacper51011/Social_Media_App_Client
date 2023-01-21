import Box from "@mui/material/Box";

import { Navigate, Outlet } from "react-router";

import { useAppSelector } from "../hooks/reduxHooks";

const Home = () => {
  // const [showRegisterWindow, setShowRegisterWindow] = useState(true);

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
      <Outlet />
    </Box>
  );
};

export default Home;
