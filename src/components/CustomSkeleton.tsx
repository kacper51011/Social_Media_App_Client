import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { ComponentProps } from "react";

type Props = {
  height: string;
  width: string;
} & ComponentProps<typeof Stack>;

// skeleton that will be used in loading places
const CustomSkeleton = ({ height, width, ...containerProps }: Props) => {
  return (
    <Stack spacing={1} width={width} height={height} {...containerProps}>
      <Skeleton variant="circular" width="15%" height="10%" />
      <Skeleton variant="rectangular" width="100%" height="20%" />
      <Skeleton variant="rounded" width="100%" height="70%" />
    </Stack>
  );
};

export default CustomSkeleton;
