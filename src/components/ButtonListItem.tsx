import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExtendButtonBase } from "@mui/material/ButtonBase";
import { ListItemButtonTypeMap } from "@mui/material/ListItemButton";
import { ReactNode } from "react";

export type ButtonListItemProps = {
  icon: ReactNode;
  content: string;
} & ExtendButtonBase<ListItemButtonTypeMap<{}, "div">>;

const ButtonListItem = ({
  icon,
  content,
  ...listItemButtonProps
}: ButtonListItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton {...listItemButtonProps}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={content} />
      </ListItemButton>
    </ListItem>
  );
};

export default ButtonListItem;