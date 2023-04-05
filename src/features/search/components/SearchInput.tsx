import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { ComponentProps, Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  setSearch: Dispatch<SetStateAction<string | null>>;
  query: string | null;
} & ComponentProps<typeof InputBase>;

export const SearchInput = ({ setSearch, query, ...props }: Props) => {
  const [textToSearch, setTextToSearch] = useState<string>("");
  const theme = useTheme();
  const { t } = useTranslation("posts");

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
    >
      <InputBase
        {...props}
        onChange={(e) => setTextToSearch(e.target.value)}
        placeholder={t("search")!}
        value={textToSearch}
        sx={{ flexGrow: 1 }}
      />
      {query && (
        <IconButton
          aria-label={t("searchReset")!}
          onClick={() => {
            setSearch(null);
            setTextToSearch("");
          }}
          sx={{ flexGrow: 0 }}
        >
          <ClearRoundedIcon />
        </IconButton>
      )}
      <IconButton
        aria-label={t("searchButton")!}
        onClick={() => setSearch(textToSearch)}
        sx={{ flexGrow: 0 }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
