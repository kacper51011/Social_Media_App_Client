import { CustomSkeleton } from "@components";

type Props = {
  showOn: boolean;
};

export const LoadSkeleton = ({ showOn }: Props) => {
  return showOn ? (
    <>
      <CustomSkeleton width="100%" height="30vw" />
      <CustomSkeleton width="100%" height="30vw" />
      <CustomSkeleton width="100%" height="30vw" />
    </>
  ) : null;
};
