import { Box, Grid, SxProps, Typography, TypographyProps } from "@mui/material";
import { ComponentProps, ReactNode } from "react";

// it will be component with image and text on it, used on login page and probably somewhere while loading or when state is empty

type Props = {
  content: string;
  image: ReactNode;
  typographyProps: TypographyProps;
} & Omit<SxProps, "flexDirection" | "display">;

const ImageWithText = ({
  content,
  image,
  typographyProps,
  ...sxContainer
}: Props) => {
  return (
    <Grid container direction="column" sx={sxContainer}>
      <Grid item xs={4}>
        <Typography {...typographyProps}>{content}</Typography>
      </Grid>
      <Grid item xs={8}>
        {image}
      </Grid>
    </Grid>
  );
};

export default ImageWithText;
