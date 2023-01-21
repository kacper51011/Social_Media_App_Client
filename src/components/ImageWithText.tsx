import { Typography, Box } from "@mui/material";

import { ComponentProps, ReactNode } from "react";

// it will be component with image and text on it, used on login page and probably somewhere while loading or when state is empty

type Props = {
  content: string;
  image: ReactNode;
  width: string;
  height: string;
} & Omit<
  ComponentProps<typeof Box>,
  "width" | "height" | "display" | "justifyContent" | "alignItems"
>;

const ImageWithText = ({
  content,
  image,
  width,
  height,
  ...containerProps
}: Props) => {
  return (
    // <Grid container direction="column" {...containerProps}>
    //   <Grid item xs={4}>
    //     <Typography {...typographyProps}>{content}</Typography>
    //   </Grid>
    //   <Grid item xs={8}>
    //     {image}
    //   </Grid>
    // </Grid>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={width}
      height={height}
    >
      <Typography variant="h5">{content}</Typography>
      <Box width={0.6} height={0.7}>
        {image}
      </Box>
    </Box>
  );
};

export default ImageWithText;
