import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { ComponentProps } from "react";

const SearchInput = ({ ...props }: ComponentProps<typeof Paper>) => {
  const theme = useTheme();

  return (
    <Paper
      component="div"
      sx={{
        bgcolor: theme.palette.neutral.light,
        borderRadius: "16px",
        pl: 2,
        py: 0.25,
        display: "flex",
      }}
      {...props}
    >
      <InputBase placeholder="Search for posts..." sx={{ flexGrow: 1 }} />
      <IconButton sx={{ flexGrow: 0 }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
