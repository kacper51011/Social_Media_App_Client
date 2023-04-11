import { TransitionGroup } from "react-transition-group";
import { Collapse } from "@mui/material";
import { FollowsContainer, FollowsItem } from "./components";
import { Following } from "@types";

type Props = {
  follows: Following[] | null;
};
export const FollowsCard = ({ follows }: Props) => {
  return (
    <FollowsContainer>
      <TransitionGroup>
        {follows &&
          follows.map((follow) => {
            return (
              <Collapse key={follow.id}>
                <FollowsItem followedPerson={follow} key={follow.id} />
              </Collapse>
            );
          })}
      </TransitionGroup>
    </FollowsContainer>
  );
};
