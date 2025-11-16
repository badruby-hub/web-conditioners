import { Mail } from "lucide-react"
import classes from "./form.module.css"

export default function Form() {
    return (
        <form autoComplete="off" className={classes.form__blank}>
        <input className={`${classes.name__input} ${classes.input}`} type="text" name="firstName" placeholder="Ваше имя" />
        <input className={`${classes.name__phone__number} ${classes.input}`} type="text" name="numberPhone" placeholder="Введите номер телефона" />
         <textarea className={`${classes.details} ${classes.input}`} name="details" id="details" placeholder="Введите детали" maxLength={150} rows={5}></textarea>
         <button className={classes.btn__ask}><span><Mail size={17}/>Отправить запрос</span></button>
        </form>
    )
}