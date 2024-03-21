"use client";

import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

export const MainLayout = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();
  console.log(t("slogan"));

  return (
    <div>
      {t("slogan")}
      {children}
    </div>
  );
};
