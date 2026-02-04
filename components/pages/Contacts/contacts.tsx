"use client";

import { useState } from "react";
import classes from "./contacts.module.css";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Form from "@/components/form/Form";



export default function ContactUs() {
    const [isOpen, setIsOpen] = useState <boolean> (false);
    const [isOpenCalc, setIsOpenCalc] = useState <boolean> (false);
    const {t} = useTranslation();
    return <section className={classes.container__contacts}>
               <section className={`${classes.video_bg}`}>
        <video  
         autoPlay
         muted
         playsInline
         loop
         preload="auto"
         >
            <source src="/video/contact/fon-contact.mp4" type="video/mp4" />
         </video>

        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>{t("Get In Touch")}</h1>
            <p>{t("Have a question or need")}</p>
        </div>
      </section>
      {/* BLOCK-2 */}
      {/*секция карточек почему выбирают нас*/}
      <section className={classes.container__two}>
        <div className={classes.section__card__two}>
        <Link href="tel:+971588125032" className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <PhoneCall size={55}/>
            </div>
            <h3>{t("phone")}</h3>
            <p>+971588125032</p>
        </Link>
        <Link href="https://wa.me/971588125032" target="_blank" rel="noopener noreferrer" className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <FaWhatsapp size={55}/>
            </div>
              <h3>{t("whatsApp")}</h3>
            <p>+971588125032</p>
        </Link>
        <Link href="mailto:moduhaus.technical@gmail.com" className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <Mail size={55}/>
            </div>
              <h3>{t("mail")}</h3>
            <p>moduhaus.technical@gmail.com</p>
        </Link>
        <Link href="https://maps.app.goo.gl/mQw4XV5hLBMGoVJB7" target="_blank" rel="noopener noreferrer" className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <MapPin size={55}/>
            </div>
              <h3>{t("location")}</h3>
            <p>Dubai, UAE</p>
        </Link>
        </div>
      </section>
       {/* BLOCK-4 запрос на консультацию  */}
      <section className={classes.container__four}>
        <div className={classes.block__form}>
         <div className={classes.block__zagolovok}>
             <h1>
                {t("request a free")}
             </h1>
             <p>{t("fill out")}</p>
            </div>
            <div className={classes.form}>
             <Form/>
            </div>
        </div>
        {/* two block  */}
        <div className={classes.block__fast__call}>
         <div className={classes.block__zagolovok}>
             <h1>
                {t("Need Immediate Help?")}
             </h1>
             <p>{t("For urgent technical issues")}</p>
            </div>
            <div className={classes.block__btn__navigation}>
             <Link className={classes.btn__ask} href="tel:+971588125032"><span>{t("call now")}</span></Link>
             <Link className={classes.btn__ask__whatsApp} href="https://wa.me/971588125032" target="_blank" rel="noopener noreferrer"><span>{t("send WhatsApp")}</span></Link>
            </div>
            <div className={classes.block__why_choose}>
               <h3>{t("Why Choose")}</h3>
               <ul className={classes.ul__why__choose}>
                <li>{t("Fast response time - Same-day service available")}</li>
                <li>{t("Licensed and certified technicians")}</li>
                <li>{t("Transparent pricing with no hidden fees")}</li>
                <li>{t("100% satisfaction guarantee")}</li>
               </ul>
            </div>
        </div>
      </section>
    </section>
}