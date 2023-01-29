import React from "react";
import { useTranslation } from "react-i18next";
import CustomIconButton from "./buttons/CustomIconButton";
import { ReactComponent as UKFlag } from "../../utils/united-kingdom-flag-icon.svg";
import { ReactComponent as PLFlag } from "../../utils/poland-flag-icon.svg";

const LanguageChangeButton = () => {
  const { t, i18n } = useTranslation();

  return i18n.language === "pl" ? (
    <CustomIconButton
      icon={<PLFlag width="50px" height="30px" />}
      title="Język polski"
      onClick={() => {
        i18n.changeLanguage("en");
      }}
    />
  ) : (
    <CustomIconButton
      icon={<UKFlag width="50px" height="30px" />}
      title="English language"
      onClick={() => {
        i18n.changeLanguage("pl");
      }}
    />
  );
};

export default LanguageChangeButton;
