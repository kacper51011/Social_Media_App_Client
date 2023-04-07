import { Box, InputBase, Typography, useTheme } from "@mui/material";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import { CustomIconButton } from "../CustomIconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useTranslation } from "react-i18next";
import { dropzoneBoxStyle } from "./styles";
import { ChoosenFileInfo, Spaceholder } from "./components";

type Props = {
  fileToSend: File | null;
  holdSpace?: Boolean;
  setFileToSend: Dispatch<SetStateAction<File | null>>;
} & ComponentProps<typeof Box>;

export const CustomDropzone = ({
  fileToSend,
  setFileToSend,
  holdSpace,
  ...containerProps
}: Props) => {
  const theme = useTheme();
  const { t } = useTranslation("dropzone");

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    maxSize: 30000000,
    multiple: false,
    disabled: !!fileToSend,
    onDropAccepted(files) {
      setFileToSend(files[0]);
    },
  });

  return (
    <Box {...containerProps}>
      <Box
        {...dropzoneBoxStyle}
        sx={{
          cursor: !fileToSend ? "pointer" : "default",
          backgroundColor: theme.palette.neutral.medium,
        }}
        {...getRootProps({ className: "dropzone" })}
      >
        <InputBase sx={{ display: "none" }} {...getInputProps} />
        <Typography role="status" textAlign="center">
          {!fileToSend ? t("beforeFile") : t("afterFile")}
        </Typography>
      </Box>
      <ChoosenFileInfo fileToSend={fileToSend} setFileToSend={setFileToSend} />
      {/* placeholder for popping file name */}

      {holdSpace && !fileToSend && (
        <Typography visibility="hidden" mt={2}>
          Files:
        </Typography>
      )}
      {holdSpace && !fileToSend && <Spaceholder />}
    </Box>
  );
};
