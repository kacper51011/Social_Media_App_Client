import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ComponentProps, ReactNode } from "react";

export type ButtonListItemProps = {
  icon: ReactNode;
  content: string;
} & ComponentProps<typeof ListItemButton>;

const ButtonListItem = ({
  icon,
  content,
  ...listItemButtonProps
}: ButtonListItemProps) => {
  return (
    <ListItem dense disablePadding>
      <ListItemButton {...listItemButtonProps}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={content} />
      </ListItemButton>
    </ListItem>
  );
};

export default ButtonListItem;
