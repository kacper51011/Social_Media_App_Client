import { Avatar, Grid, InputBase, Paper, useTheme } from "@mui/material";
import { ComponentProps } from "react";
import { useAppSelector } from "../hooks/reduxHooks";

type Props = {
  height?: string | number;
  width?: string | number;
} & Omit<
  ComponentProps<typeof InputBase>,
  "width" | "height" | "fullWidth" | "sx"
>;

const CustomInput = ({ height = 0.3, width = 1, ...inputProps }: Props) => {
  const theme = useTheme();
  const user = useAppSelector((state) => state.auth.user);
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
        <Avatar src={`assets/${user?.picturePath}`}>
          {user?.firstName[0]}{" "}
        </Avatar>
      </Grid>
      <Grid item xs={10.5} sx={{ width: 1, minHeight: 0.2 }}>
        <Paper
          sx={{
            backgroundColor: theme.palette.neutral.light,
            borderRadius: "16px",
          }}
          elevation={0}
        >
          <InputBase {...inputProps} sx={{ width: 1, minHeight: 0.9 }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CustomInput;
