import { Box, InputBase, Typography, useTheme } from "@mui/material";
import { ComponentProps, Dispatch } from "react";
import { useDropzone } from "react-dropzone";
import CustomIconButton from "./buttons/CustomIconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

type Props = {
  fileToSend: File | null;
  setFileToSend: Dispatch<React.SetStateAction<File | null>>;
} & ComponentProps<typeof Box>;

const CustomDropzone = ({
  fileToSend,
  setFileToSend,
  ...containerProps
}: Props) => {
  const theme = useTheme();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    maxSize: 3000000,
    multiple: false,
    disabled: !!fileToSend,
    onDropAccepted(files, event) {
      setFileToSend(files[0]);
    },
  });

  return (
    <Box {...containerProps}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={1}
        minHeight="5vw"
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
        <Typography>
          {!fileToSend
            ? "Drop your Image or click to choose"
            : "Image choosed!"}
        </Typography>
      </Box>
      {fileToSend && <Typography mt={2}>Files:</Typography>}
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
            title="delete image"
            onClick={() => setFileToSend(null)}
          />
        </Box>
      )}
    </Box>
  );
};

export default CustomDropzone;
