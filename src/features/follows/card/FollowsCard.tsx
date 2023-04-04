import { TransitionGroup } from "react-transition-group";
import { Collapse } from "@mui/material";
import { Following } from "@store";
import { FollowsContainer, FollowsItem } from "./components";

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
              <Collapse>
                <FollowsItem followedPerson={follow} key={follow.id} />
              </Collapse>
            );
          })}
      </TransitionGroup>
    </FollowsContainer>
  );
};
