import { EmptyPostsList } from "@assets";
import { ImageWithText } from "@components";
import { useTranslation } from "react-i18next";

type Props = {
  showOn: boolean;
};
export const EmptyListInfo = ({ showOn }: Props) => {
  const { t } = useTranslation("imagesWithText");
  return showOn ? (
    <ImageWithText
      content={t("noPosts")}
      image={<EmptyPostsList />}
      width="100%"
      height="30vh"
    />
  ) : null;
};
