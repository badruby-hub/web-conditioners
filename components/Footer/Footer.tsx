"use client"


import Link from "next/link";
import classes from "./footer.module.css";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";


export default function Footer() {
    return <>
    <section className={classes.container__footer}>
      <section className={classes.one__block__footer}>
      <Link href="/">
      <div className={classes.block__img}>
        <img src="/logo/black/home-256.png" alt="Логотип" />
      </div>
      </Link>
      <p className={`${classes.text} ${classes.text__one__block}`}>Современные решения для вашего климата и комфорта в Дубае</p>
    </section>
     <section className={classes.fast__nav}>
        <h2 className={classes.h__two}>Быстрые ссылки</h2>
        <ul>
          <li className={`${classes.text} ${classes.text__home}`}><Link href="/">Главная</Link></li>
          <li className={`${classes.text} ${classes.text__conditioners}`}><Link href="conditioners">Кондиционеры</Link></li>
          <li className={`${classes.text} ${classes.text__repair}`}><Link href="repair">Ремонт</Link></li>
        </ul>
     </section>
     <section className={classes.contacts}>
        <h2 className={classes.h__two}>Контактная информация</h2>
        <ul>
          <li className={`${classes.text} ${classes.text__maps}`}>
           <MapPin className={classes.icon}/><Link href="https://maps.app.goo.gl/mQw4XV5hLBMGoVJB7" target="_blank" rel="noopener noreferrer">Дубай</Link>
          </li>
          <li  className={`${classes.text} ${classes.text__number}`}>
          <Phone className={classes.icon}/><Link href="tel:+79962042046">+7&#40;996&#41;204-20-46</Link>
          </li>
          <li className={`${classes.text} ${classes.text__mail}`}>
           <Mail className={classes.icon}/><Link href="mailto:info@moduhaus.ae">info@moduhaus.ae</Link>
          </li>
        </ul>
     </section>
          <section className={classes.media}>
        <h2 className={classes.h__two}>Подписывайтесь</h2>
        <ul>
          <li className={`${classes.text} ${classes.text__facebook} ${classes.block__media}`}>
         <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook className={`${classes.facebook} ${classes.icon}`}/></Link>
          </li>
          <li className={`${classes.text} ${classes.text__instagram} ${classes.block__media}`}>
            <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><Instagram className={`${classes.instagram} ${classes.icon}`}/></Link>
          </li>
          <li className={`${classes.text} ${classes.text__telegram} ${classes.block__media}`}>
          <Link href="https://telegram.org/" target="_blank" rel="noopener noreferrer"><Send className={`${classes.telegram} ${classes.icon}`}/></Link>
          </li>
        </ul>
     </section>
    </section>
     <hr />
     <p className={classes.rights}>© 2025 ModuHaus. Все права защищены.</p>
    </>
}