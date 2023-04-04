import { PostsError } from "@assets";
import { ImageWithText } from "@components";
import { useTranslation } from "react-i18next";

type Props = {
  showOn: boolean;
};

export const ErrorInfo = ({ showOn }: Props) => {
  const { t } = useTranslation("imagesWithText");
  return showOn ? (
    <ImageWithText
      content={t("error")}
      image={<PostsError width={0.5} height={0.3} />}
      width="100%"
      height="30vw"
    />
  ) : null;
};
