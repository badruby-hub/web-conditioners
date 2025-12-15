"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import ru from "@/components/data/locales/ru/translation.json";
import en from "@/components/data/locales/en/translation.json";

i18n

  .use(initReactI18next)

  .init({
    fallbackLng:"en",
    resources:{
        ru:{
            translation: ru,
        },

        en:{
            translation: en,
        }
    }
  });

export default i18n;
