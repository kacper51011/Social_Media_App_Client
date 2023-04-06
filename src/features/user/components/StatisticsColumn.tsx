import { Grid, Typography } from "@mui/material";
import { User } from "@types";
import { useTranslation } from "react-i18next";

type Props = Pick<User, "followedByIDs" | "postsIds" | "viewsProfile">;

export const StatisticsColumn = ({
  followedByIDs,
  postsIds,
  viewsProfile,
}: Props) => {
  const { t } = useTranslation("userCard");
  const numberOfFollowedBy = followedByIDs.length || 0;
  const numberOfPosts = postsIds.length || 0;
  return (
    <Grid container direction="column" py={1}>
      <Grid container direction="row" sx={{ justifyContent: "space-between" }}>
        <Grid item py={1}>
          <Typography variant="caption">{t("followedByInfo")}</Typography>
        </Grid>
        <Grid item py={1}>
          <Typography>{numberOfFollowedBy}</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" sx={{ justifyContent: "space-between" }}>
        <Grid item py={1}>
          <Typography variant="caption">{t("viewsInfo")}</Typography>
        </Grid>
        <Grid item py={1}>
          <Typography> {viewsProfile}</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" sx={{ justifyContent: "space-between" }}>
        <Grid item py={1}>
          <Typography variant="caption">{t("postInfo")}</Typography>
        </Grid>
        <Grid item py={1}>
          <Typography>{numberOfPosts}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
