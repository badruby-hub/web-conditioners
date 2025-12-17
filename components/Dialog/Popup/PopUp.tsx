"use client";
import { RxCross1 } from "react-icons/rx";
import classes from "./popUp.module.css";
import {  Dialog, DialogPanel, DialogTitle, Field, Input, Label, Select } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/components/Loader/Loader";
import { sendConversion } from "@/components/lib/gtag";
import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


interface PopUpProps {
    open: boolean;
    onClose: () => void;
}

interface PopUpCalcProps {
    openCalc: boolean;
    onCloseCalc: () => void;

}

export const PopUp = ({open, onClose}: PopUpProps)=> {
     const {t}= useTranslation();

   return   <Dialog open={open} onClose={onClose}>
            <div className={classes.bg__dialog}>
                <DialogPanel className={classes.popUp_contact_info}>
                     <button className={classes.close__btn} onClick={onClose}>{<RxCross1 size={25}/>}</button>
                    <DialogTitle className={classes.title_contact_info}>{t("contact information")}</DialogTitle>
                     <ul className={classes.ul}>
                        <li className={`${classes.li} ${classes.phone}`}>
                            <a 
                            href="tel:+971588125032"
                            onClick={
                            ()=>{
                                sendConversion("tel:+971588125032");
                            }
                            }>
                            <div className={`${classes.block_content} ${classes.block_phone_content}`}>
                                <span className={`${classes.phone} ${classes.icon}`}><Phone size={34}/></span>
                                <div className={classes.block_info}>
                                    <h5>Phone</h5>
                                    <span>+&#40;971&#41;58-812-5032</span>
                                </div>
                            </div>
                            </a>
                        </li>
                        <li className={`${classes.li} ${classes.telegram}`}>
                            <a 
                            href="https://t.me/ModuHaus"
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={
                            ()=>{
                                sendConversion("https://t.me/ModuHaus");
                            }
                            }
                            >
                            <div className={`${classes.block_content} ${classes.block_telegram_content}`}>
                                <span className={`${classes.telegram} ${classes.icon}`}><Send size={34}/></span>
                                <div className={classes.block_info}>
                                    <h5>Telegram</h5>
                                    <span>ModuHaus</span>
                                </div>
                            </div>
                            </a>
                        </li>
                        <li className={`${classes.li} ${classes.whatsApp}`}>
                            <a 
                            href="https://wa.me/971588125032"
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={
                            ()=>{
                                sendConversion("https://wa.me/971588125032");
                            }
                            }
                            >
                            <div className={`${classes.block_content} ${classes.block_whatApp_content}`}>
                                <span className={`${classes.whatsApp} ${classes.icon}`}><FaWhatsapp color="green" size={34}/></span>
                                <div className={classes.block_info}>
                                    <h5>WhatsApp</h5>
                                    <span>+971588125032</span>
                                </div>
                            </div>
                            </a>
                        </li>
                     </ul>
                </DialogPanel>
            </div>
        </Dialog>
}



export const PopUpСalculation = ({openCalc, onCloseCalc}: PopUpCalcProps)=> {
     const {t}= useTranslation();
     const [firstName, setFirstName] = useState<string>("");
     const [numberPhone, setNumberPhone] = useState<string>("");
     const [category, setCategory] = useState<string>("");
     const [isLoading, setIsLoading] = useState<Boolean>(false);
           const resetForm=()=>{
                   setFirstName("");
                   setNumberPhone("");
        };
     
         const sendEmailTelegram = async (event: React.FormEvent<HTMLFormElement>) => {
             event.preventDefault()
             const form = event.currentTarget;
             const {firstName,numberPhone, category} = Object.fromEntries(new FormData(form).entries());
     
const applicationForm = `
Выбран тариф (${category})
Имя: ${firstName}
Номер телефона: ${numberPhone}
             `
            try {
              setIsLoading(true);
              const resRequest = await fetch("/api/requests/send",{
                 method:"POST",
                 headers:{
                     "Content-Type": "application/json",
                 },
                 body:JSON.stringify({ userMessage: applicationForm}),
             });
             if(resRequest.ok) {
                 console.log("Заявка успешно отправлена");
                 resetForm();
                 toast.success("Заявка успешно отправлена");
                 sendConversion();
             }else{
                   console.log("Ошибка при отправке");
                   toast.error("Ошибка при отправке");
             }
            } catch (error) {
             
               console.log("Произошла ошибка при отправке:" + error);
            }finally{
                setIsLoading(false);
            }
         } 
   return   <Dialog open={openCalc} onClose={onCloseCalc}>
            <div className={classes.bg__dialog}>
                <DialogPanel className={classes.popUp}>
                     <button className={classes.close__btn} onClick={onCloseCalc}>{<RxCross1 size={25}/>}</button>
                    <DialogTitle className={classes.title}>{t("choose your plan")}</DialogTitle>
                  <form onSubmit={sendEmailTelegram} className={classes.form}>
                    <Field className={`${classes.field__firstName} ${classes.field} `}>
                        <Label>{t("firstName")}</Label>
                        <Input name="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)} required placeholder={t("enterFirstName")}/>
                    </Field>
                    <Field className={`${classes.field__number} ${classes.field} `}>
                        <Label>{t("numberPhone")}</Label>
                        <Input name="numberPhone" value={numberPhone} onChange={(e)=>setNumberPhone(e.target.value)} required placeholder="+(921) __-___-____"/>
                    </Field>
                    <Field  className={`${classes.field__service} ${classes.field} `}>
                        <Label>{t("select service")}</Label>
                        <div className={classes.block__select}>
                            <Select name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
                                <option>{t("basic service")}</option>
                                <option>{t("premium service")}</option>
                                <option>{t("installation")}</option>
                            </Select>
                        </div>
                    </Field>
                  <button className={`${isLoading ? classes.submit__none__class : classes.submit__btn}`} type="submit">{isLoading ? <Loader/>: t("send")}</button>
                  </form>
                </DialogPanel>
            </div>
        </Dialog>
}