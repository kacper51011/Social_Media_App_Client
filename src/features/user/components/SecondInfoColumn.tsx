import { Box, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { User } from "@types";

type Props = Pick<User, "location" | "job">;
export const SecondInfoColumn = ({ location, job }: Props) => {
  return (
    <>
      <Box my={1} mx={0.5} display="flex">
        <PlaceIcon color="primary" />
        <Typography ml={4} variant="caption">
          {location}
        </Typography>
      </Box>
      <Box my={1} mx={0.5} display="flex">
        <BusinessCenterIcon color="primary" />
        <Typography ml={4} variant="caption">
          {job}
        </Typography>
      </Box>
    </>
  );
};
