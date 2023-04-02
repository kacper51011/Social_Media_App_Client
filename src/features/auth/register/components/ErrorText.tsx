import { Typography } from "@mui/material";

type Props = {
  errorMessage: string | undefined;
};

export const ErrorText = ({ errorMessage }: Props) => {
  return (
    <>
      <Typography variant="caption" visibility="hidden">
        spaceholder for errors
      </Typography>
      {errorMessage && (
        <Typography variant="caption" color="error" fontWeight="bold">
          {errorMessage}
        </Typography>
      )}
    </>
  );
};
