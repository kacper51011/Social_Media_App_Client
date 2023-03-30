import { Tooltip, IconButton } from "@mui/material";
import { ComponentProps, ReactNode } from "react";

type Props = {
  title: string;
  icon: ReactNode;
} & ComponentProps<typeof IconButton>;

const CustomIconButton = ({
  title,
  icon,

  ...IconButtonProps
}: Props) => {
  return (
    <Tooltip title={title}>
      <IconButton color="primary" {...IconButtonProps}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default CustomIconButton;
