import { Mail } from "lucide-react"
import classes from "./form.module.css"
import { useTranslation } from "react-i18next"
import { useState } from "react";
import toast from "react-hot-toast";


export default function Form() {
    const {t} = useTranslation();
    const [firstName, setFirstName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [isLoading, setIsLoading] = useState<Boolean>(false);
      const resetForm=()=>{
              setFirstName("");
              setPhoneNumber("");
              setDetails("");
   };

    const sendEmailTelegram = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget;
        const {firstName,numberPhone,details} = Object.fromEntries(new FormData(form).entries());

        const applicationForm = `
Заявка на Ремонт
Имя: ${firstName}
Номер телефона: ${numberPhone}
Детали проекта: ${details}
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
       }
       finally{
        setIsLoading(false);
       }
    } 

    return (
        <form onSubmit={sendEmailTelegram} autoComplete="off" className={classes.form__blank}>
            <div className={classes.name_and_number}>
        <input className={`${classes.name__input} ${classes.input}`} value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" name="firstName" required placeholder={t("firstName")} />
        <input className={`${classes.name__phone__number} ${classes.input}`} value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} type="text" required name="numberPhone" placeholder={t("numberPhone")} />
            </div>
         <textarea className={`${classes.details} ${classes.input}`} value={details} onChange={(e)=>{setDetails(e.target.value)}} name="details" id="details" required placeholder={t("details")} maxLength={150} rows={5}></textarea>
         <button className={classes.btn__ask}><span><Mail size={17}/>{isLoading ? t("loading") : t("submit request")}</span></button>
        </form>
    )
}