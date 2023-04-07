import { Box } from "@mui/material";
import { ImageWithText } from "../shared/components/ImageWithText";
import { PageNotFoundImage } from "../shared/assets";
import { notFoundPageStyle } from "@styles";

export const PageNotFound = () => {
  return (
    <Box {...notFoundPageStyle}>
      <ImageWithText
        content={"Couldn`t find the page"}
        image={<PageNotFoundImage />}
        width={"70%"}
        height={"70%"}
      />
    </Box>
  );
};
