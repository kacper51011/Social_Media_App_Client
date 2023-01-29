import { Paper, Divider, Button } from "@mui/material";
import SearchInput from "../SearchInput";

const SearchComponent = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",

        mb: 5,
        p: 2,
      }}
    >
      <SearchInput />
    </Paper>
  );
};

export default SearchComponent;
