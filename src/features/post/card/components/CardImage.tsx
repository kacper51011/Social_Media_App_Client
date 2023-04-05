import { CardMedia, Paper } from "@mui/material";

type Props = {
  picturePath: string;
};

export const CardImage = ({ picturePath }: Props) => {
  return (
    <Paper elevation={0}>
      <CardMedia
        alt="Image added to post"
        component="img"
        loading="lazy"
        src={`http://localhost:3001/assets/${picturePath}`}
        sx={{
          height: "auto",
          maxWidth: "100%",
          borderRadius: "16px",
        }}
      />
    </Paper>
  );
};
