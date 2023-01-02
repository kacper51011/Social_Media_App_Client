import { Avatar, Grid, InputBase, Paper } from "@mui/material";
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
  width = 0.8,
  ...inputProps
}: Props) => {
  return (
    <Grid container direction="row" width={width} height={height}>
      <Grid item xs={3}>
        <Avatar src={picturePath || ""}>{firstName[0]} </Avatar>
      </Grid>
      <Grid item xs={8}>
        <Paper elevation={0} sx={{ width: 1, minHeight: 0.2 }}>
          <InputBase {...inputProps} sx={{ width: 0.8, minHeight: 0.8 }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CustomInput;
