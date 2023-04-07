import { Typography, Box } from "@mui/material";
import { CustomIconButton } from "../../CustomIconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";
type Props = {
  fileToSend: File | null;
  setFileToSend: Dispatch<SetStateAction<File | null>>;
};
export const ChoosenFileInfo = ({ fileToSend, setFileToSend }: Props) => {
  const { t } = useTranslation("dropzone");
  return fileToSend ? (
    <>
      <Typography mt={2}>{t("files")}</Typography>
      <Box
        width={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography noWrap variant="caption">
          {fileToSend.name}
        </Typography>
        <CustomIconButton
          size="small"
          icon={<RemoveCircleIcon />}
          title={t("deleteImage")}
          onClick={() => setFileToSend(null)}
        />
      </Box>
    </>
  ) : null;
};
