import { Box } from "@mui/material";
import ImageWithText from "../components/shared/ImageWithText";
import { ReactComponent as PageNotFoundImage } from "../assets/PageNotFoundImage.svg";

const PageNotFound = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <ImageWithText
        content={"Couldn`t find the page"}
        image={<PageNotFoundImage />}
        width={"70%"}
        height={"70%"}
      />
    </Box>
  );
};

export default PageNotFound;
