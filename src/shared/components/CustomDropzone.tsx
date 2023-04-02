import { Box, InputBase, Typography, useTheme } from "@mui/material";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import { CustomIconButton } from "./CustomIconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useTranslation } from "react-i18next";

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
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(3.5vw + 35px)"
        sx={{
          backgroundColor: theme.palette.neutral.medium,
          borderRadius: "16px",
          borderStyle: "dashed",
          cursor: !fileToSend ? "pointer" : "default",
          opacity: 0.7,
        }}
        {...getRootProps({ className: "dropzone" })}
      >
        <InputBase sx={{ display: "none" }} {...getInputProps} />
        <Typography textAlign="center">
          {!fileToSend ? t("beforeFile") : t("afterFile")}
        </Typography>
      </Box>
      {fileToSend && <Typography mt={2}>{t("files")}</Typography>}
      {fileToSend && (
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
      )}
      {/* placeholder for popping file name */}

      {holdSpace && !fileToSend && (
        <Typography visibility="hidden" mt={2}>
          Files:
        </Typography>
      )}
      {holdSpace && !fileToSend && (
        <Box
          width={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          visibility="hidden"
        >
          <Typography noWrap variant="caption">
            placeholder
          </Typography>
          <CustomIconButton
            size="small"
            icon={<RemoveCircleIcon />}
            title="delete image"
          />
        </Box>
      )}
    </Box>
  );
};
