"use client";
import { RxCross1 } from "react-icons/rx";
import classes from "./popUp.module.css";
import {  Dialog, DialogPanel, DialogTitle, Field, Input, Label, Select, Textarea } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/components/Loader/Loader";


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
     const [firstName, setFirstName] = useState<string>("");
     const [numberPhone, setNumberPhone] = useState<string>("");
     const [category, setCategory] = useState<string>("");
     const [details, setDetails] = useState<string>("");
     const [isLoading, setIsLoading] = useState<Boolean>(false);
           const resetForm=()=>{
                   setFirstName("");
                   setNumberPhone("");
                   setDetails("");
        };
     
         const sendEmailTelegram = async (event: React.FormEvent<HTMLFormElement>) => {
             event.preventDefault()
             const form = event.currentTarget;
             const {firstName,numberPhone, category, details} = Object.fromEntries(new FormData(form).entries());
     
const applicationForm = `
Заявка на услугу (${category})
Имя: ${firstName}
Номер телефона: ${numberPhone}
Детали: ${details}
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
   return   <Dialog open={open} onClose={onClose}>
            <div className={classes.bg__dialog}>
                <DialogPanel className={classes.popUp}>
                     <button className={classes.close__btn} onClick={onClose}>{<RxCross1 size={25}/>}</button>
                    <DialogTitle className={classes.title}>{t("leave request")}</DialogTitle>
                  <form onSubmit={sendEmailTelegram} className={classes.form}>
                    <Field className={`${classes.field__firstName} ${classes.field} `}>
                        <Label>{t("firstName")}</Label>
                        <Input name="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)} required placeholder={t("enterFirstName")}/>
                    </Field>
                    <Field className={`${classes.field__number} ${classes.field} `}>
                        <Label>{t("numberPhone")}</Label>
                        <Input name="numberPhone" value={numberPhone} onChange={(e)=> setNumberPhone(e.target.value)} required placeholder="+(921) __-___-____"/>
                    </Field>
                    <Field  className={`${classes.field__service} ${classes.field} `}>
                        <Label>{t("select service")}</Label>
                        <div className={classes.block__select}>
                            <Select name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
                                <option>{t("conditioners")}</option>
                                <option>{t("repair")}</option>
                                <option>{t("get consultation")}</option>
                                <option>{t("get estimate")}</option>
                            </Select>
                            {/* <ChevronDownIcon/> */}
                        </div>
                    </Field>
                    <Field className={`${classes.field__description} ${classes.field} `}>
                        <Label>{t("description")}</Label>
                        <Textarea name="details" value={details} onChange={(e)=> setDetails(e.target.value)} rows={5} placeholder={t("describe the task")}/>
                    </Field>
                  <button className={`${isLoading ? classes.submit__none__class : classes.submit__btn}`} type="submit">{isLoading ? <Loader/>: t("send")}</button>
                   </form>
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