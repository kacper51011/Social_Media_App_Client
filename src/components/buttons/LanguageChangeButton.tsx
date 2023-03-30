import { useTranslation } from "react-i18next";
import { CustomIconButton } from "./CustomIconButton";
import { ReactComponent as UKFlag } from "../../assets/united-kingdom-flag-icon.svg";
import { ReactComponent as PLFlag } from "../../assets/poland-flag-icon.svg";

export const LanguageChangeButton = () => {
  const { i18n } = useTranslation();
  return i18n.language === "pl" ? (
    <CustomIconButton
      icon={<PLFlag width="45px" height="25px" />}
      title="Język polski"
      onClick={() => {
        i18n.changeLanguage("en");
      }}
    />
  ) : (
    <CustomIconButton
      icon={<UKFlag width="45px" height="25px" />}
      title="English language"
      onClick={() => {
        i18n.changeLanguage("pl");
      }}
    />
  );
};
