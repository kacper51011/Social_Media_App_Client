import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

type Props = {
  disabledWhen: boolean;
};

export const SubmitButton = ({ disabledWhen }: Props) => {
  const { t } = useTranslation("dropzone");
  return (
    <Box display="flex" justifyContent="right" width={1}>
      <Button disabled={disabledWhen} variant="outlined" type="submit">
        {t("button")}
      </Button>
    </Box>
  );
};
