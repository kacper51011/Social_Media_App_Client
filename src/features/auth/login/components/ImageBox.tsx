import { LoginWindowImage } from "@assets";
import { Box } from "@mui/material";

type Props = {
  desktopSize: boolean;
};

export const ImageBox = ({ desktopSize }: Props) => {
  return desktopSize ? (
    <Box width={0.5} display="flex" justifyContent="center" alignItems="center">
      <LoginWindowImage width="90%" />
    </Box>
  ) : null;
};
