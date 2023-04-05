import { Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { SearchInput } from "./components/SearchInput";
import { searchComponentStyle } from "./styles";

type Props = {
  setSearch: Dispatch<SetStateAction<string | null>>;
  query: string | null;
};

export const SearchComponent = ({ setSearch, query }: Props) => {
  return (
    <Paper role="search" {...searchComponentStyle}>
      <SearchInput setSearch={setSearch} query={query} />
    </Paper>
  );
};
