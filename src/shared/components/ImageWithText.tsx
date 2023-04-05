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

export const ImageWithText = ({
  content,
  image,
  width,
  height,
  ...containerProps
}: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={width}
      height={height}
      {...containerProps}
    >
      <Typography component="h2" variant="h5">
        {content}
      </Typography>
      <Box
        width={0.4}
        height={0.7}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {image}
      </Box>
    </Box>
  );
};
