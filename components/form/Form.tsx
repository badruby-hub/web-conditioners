import { Mail } from "lucide-react"
import classes from "./form.module.css"
import { useTranslation } from "react-i18next"

export default function Form() {
    const {t} = useTranslation()
    return (
        <form autoComplete="off" className={classes.form__blank}>
            <div className={classes.name_and_number}>
        <input className={`${classes.name__input} ${classes.input}`} type="text" name="firstName" placeholder={t("firstName")} />
        <input className={`${classes.name__phone__number} ${classes.input}`} type="text" name="numberPhone" placeholder={t("numberPhone")} />
            </div>
         <textarea className={`${classes.details} ${classes.input}`} name="details" id="details" placeholder={t("details")} maxLength={150} rows={5}></textarea>
         <button className={classes.btn__ask}><span><Mail size={17}/>{t("submit request")}</span></button>
        </form>
    )
}