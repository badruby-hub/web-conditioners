"use client"


import Link from "next/link";
import classes from "./footer.module.css";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";


export default function Footer() {
  const {t} = useTranslation();
    return <>
    <section className={classes.container__footer}>
      <section className={classes.one__block__footer}>
      <Link href="/">
      <div className={classes.block__img}>
        <img src="/logo/home-black-256.png" alt="Логотип" />
      </div>
      </Link>
      <p className={`${classes.text} ${classes.text__one__block}`}>{t("modern solutions")}</p>
    </section>
     <section className={classes.fast__nav}>
        <h2 className={classes.h__two}>{t("quick links")}</h2>
        <ul>
          <li className={`${classes.text} ${classes.text__home}`}><Link href="/">{t("home")}</Link></li>
          <li className={`${classes.text} ${classes.text__conditioners}`}><Link href="conditioners">{t("conditioners")}</Link></li>
          <li className={`${classes.text} ${classes.text__repair}`}><Link href="repair">{t("repair")}</Link></li>
        </ul>
     </section>
     <section className={classes.media}>
        <h2 className={classes.h__two}>{t("follow")}</h2>
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
     <section className={classes.contacts}>
        <h2 className={classes.h__two}>{t("contact information")}</h2>
        <ul>
          <li className={`${classes.text} ${classes.text__maps}`}>
           <MapPin className={classes.icon}/><Link href="https://maps.app.goo.gl/mQw4XV5hLBMGoVJB7" target="_blank" rel="noopener noreferrer">{t("geo")}</Link>
          </li>
          <li  className={`${classes.text} ${classes.text__number}`}>
          <Phone className={classes.icon}/><Link href="tel:+971588122046">+&#40;971&#41;58-812-2046</Link>
          </li>
          <li className={`${classes.text} ${classes.text__mail}`}>
           <Mail className={classes.icon}/><Link href="mailto:moduhaus.technical@gmail.com">moduhaus.technical@gmail.com</Link>
          </li>
        </ul>
     </section>
    </section>
     <hr className={classes.hr} />
     <p className={classes.rights}>© 2025 MODUHAUS.{t("rights reserved")}</p>
    </>
}