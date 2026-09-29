"use client";

import { useEffect } from "react";
import i18n, { LANG_STORAGE_KEY } from "@/app/i18n";
import { I18nextProvider } from "react-i18next";


export default function I18nProvider({children}:{children:React.ReactNode}){
   // сервер рендерит язык по умолчанию, сохранённый язык включаем после монтирования,
   // иначе разметка сервера и клиента не совпадёт (hydration error)
   useEffect(() => {
      let saved: string | null = null;
      try {
         saved = localStorage.getItem(LANG_STORAGE_KEY);
      } catch {}
      if ((saved === "ru" || saved === "en") && saved !== i18n.language) {
         i18n.changeLanguage(saved);
      }
   }, []);

   return <I18nextProvider i18n={i18n} >{children}</I18nextProvider>
}
