import { Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { SearchInput } from "../shared/SearchInput";

type Props = {
  setSearch: Dispatch<SetStateAction<string | null>>;
  query: string | null;
};

export const SearchComponent = ({ setSearch, query }: Props) => {
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
      <SearchInput setSearch={setSearch} query={query} />
    </Paper>
  );
};
