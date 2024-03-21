"use client";
import { useTranslation } from "react-i18next";

export const Button = () => {
  const { t } = useTranslation();

  return <button>{t("slogan")}</button>;
};
