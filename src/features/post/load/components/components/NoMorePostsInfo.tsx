import { NoMorePosts } from "@assets";
import { ImageWithText } from "@components";
import { useTranslation } from "react-i18next";

type Props = {
  showOn: boolean;
};
export const NoMorePostsInfo = ({ showOn }: Props) => {
  const { t } = useTranslation("imagesWithText");

  return showOn ? (
    <ImageWithText
      content={t("noMore")}
      image={<NoMorePosts />}
      width="100%"
      height="30vw"
    />
  ) : null;
};
