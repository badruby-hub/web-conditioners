"use client";

import i18n from "@/app/i18n";


export const toggleBtn = () =>{
const nowLang = i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
return nowLang;
} 

