import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import LoginWindow from "../components/auth/LoginWindow";
const Home = () => {
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
      <LoginWindow />
    </Box>
  );
};

export default Home;
