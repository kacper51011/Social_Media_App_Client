import { Avatar, Grid, InputBase, Paper, useTheme } from "@mui/material";
import { ComponentProps } from "react";

type Props = {
  firstName: string;
  picturePath?: string;
  height?: string | number;
  width?: string | number;
} & Omit<
  ComponentProps<typeof InputBase>,
  "width" | "height" | "fullWidth" | "sx"
>;

const CustomInput = ({
  firstName,
  picturePath,
  height = 0.3,
  width = 1,
  ...inputProps
}: Props) => {
  const theme = useTheme();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width={width}
      height={height}
    >
      <Grid item>
        <Avatar src={picturePath || ""}>{firstName[0]} </Avatar>
      </Grid>
      <Grid item xs={10} sx={{ width: 1, minHeight: 0.2 }}>
        <Paper
          sx={{ backgroundColor: theme.palette.neutral.light }}
          elevation={1}
        >
          <InputBase {...inputProps} sx={{ width: 1, minHeight: 0.9 }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CustomInput;
