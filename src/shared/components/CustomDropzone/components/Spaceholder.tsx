import { Box, Typography } from "@mui/material";
import { CustomIconButton } from "../../CustomIconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const Spaceholder = () => {
  return (
    <Box
      width={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      visibility="hidden"
    >
      <Typography noWrap variant="caption">
        placeholder
      </Typography>
      <CustomIconButton
        size="small"
        icon={<RemoveCircleIcon />}
        title="delete image"
      />
    </Box>
  );
};
