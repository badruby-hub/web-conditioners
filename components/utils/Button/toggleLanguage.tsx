"use client";

import i18n, { LANG_STORAGE_KEY } from "@/app/i18n";


export const toggleBtn = () =>{
const next = i18n.language === "ru" ? "en" : "ru";
// запоминаем выбор, чтобы после перезахода открывался этот же язык
try {
  localStorage.setItem(LANG_STORAGE_KEY, next);
} catch {}
const nowLang = i18n.changeLanguage(next);
return nowLang;
} 
