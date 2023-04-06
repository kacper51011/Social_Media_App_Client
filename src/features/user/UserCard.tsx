import { Divider } from "@mui/material";
import { User } from "@types";
import {
  CardContainer,
  MainInfoRow,
  SecondInfoColumn,
  StatisticsColumn,
} from "./components";

type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  const {
    picturePath,
    firstName,
    lastName,
    followingIDs,
    job,
    postsIds,
    viewsProfile,
    followedByIDs,
    location,
  } = user;

  return (
    <CardContainer>
      <MainInfoRow
        picturePath={picturePath}
        firstName={firstName}
        lastName={lastName}
        followingIDs={followingIDs}
      />
      <Divider sx={{ my: 1 }} />
      <SecondInfoColumn job={job} location={location} />

      <Divider sx={{ my: 1 }} />
      <StatisticsColumn
        postsIds={postsIds}
        viewsProfile={viewsProfile}
        followedByIDs={followedByIDs}
      />
    </CardContainer>
  );
};
