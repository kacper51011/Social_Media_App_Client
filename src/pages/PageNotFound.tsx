import { Box } from "@mui/material";
import { ImageWithText } from "../shared/components/ImageWithText";
import { PageNotFoundImage } from "../shared/assets";

export const PageNotFound = () => {
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
