import { Grid, Avatar, Typography } from "@mui/material";
import { User } from "@types";
import { useTranslation } from "react-i18next";

type Props = Pick<
  User,
  "firstName" | "lastName" | "followingIDs" | "picturePath"
>;

export const MainInfoRow = ({
  firstName,
  lastName,
  followingIDs,
  picturePath,
}: Props) => {
  const { t } = useTranslation("userCard");
  const followedPeopleNumber = followingIDs.length || 0;

  return (
    <Grid container width="1" direction="row" alignItems="center">
      <Grid item xs={2.5}>
        <Avatar
          alt="User profile image"
          src={`http://localhost:3001/assets/${picturePath}`}
        >
          {firstName[0]}
        </Avatar>
      </Grid>
      <Grid sx={{ flexDirection: "column", justifyContent: "center" }}>
        <Typography fontWeight={600} sx={{ cursor: "pointer" }} variant="body1">
          {firstName + " " + lastName}
        </Typography>
        <Typography variant="caption">
          {`${followedPeopleNumber} ${t("followsInfo")}`}
        </Typography>
      </Grid>
    </Grid>
  );
};
