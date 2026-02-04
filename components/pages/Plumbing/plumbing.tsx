"use client"

import { CircleCheckBig, Clock3, Droplets, PhoneCall, Shield, Thermometer, Waves, Wrench } from "lucide-react";
import classes from "./plumbing.module.css";
import { useTranslation } from "react-i18next";
import { PopUp, PopUpСalculation } from "@/components/Dialog/Popup/PopUp";
import { useState } from "react";
import Link from "next/link";


export default function PlumbingServices() {
   const {t} = useTranslation();
   const [isOpen, setIsOpen] = useState <boolean> (false);
   const [isOpenCalc, setIsOpenCalc] = useState <boolean> (false);

    return <>
        <section className={`${classes.video_bg}`}>
        <video  
         autoPlay
         muted
         playsInline
         loop
         preload="auto"
         >
            <source src="video/plumbing/fon-plumbing.mp4" type="video/mp4" />
         </video>

        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>{t("Professional plumbing services")}</h1>
            <p>{t("From emergency repairs")}</p>
            <Link href="tel:+971588125032" className={classes.btn__ask}><span><PhoneCall size={17}/>{t("request a technician")}</span></Link>
        </div>
      </section>
      {/* BLOCK-2 */}
      <section className={classes.container__one}>
{/* импортированные компоненты модальных окан */}
         <PopUp open={isOpen} onClose={()=> setIsOpen(false)}/>
         <PopUpСalculation openCalc={isOpenCalc} onCloseCalc={()=> setIsOpenCalc(false)}/>   
        <div className={classes.block__zagolovok}>
            <h1>
                {t("our services")} 
            </h1>
            <p>{t("comprehensive solutions")}</p>
        </div>
            <div className={classes.section__card__one}>
                       <div className={`${classes.card__premium} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                          <Droplets size={34}/>
                          </div>
                          <h5>{t("Leak Detection & Repair")}</h5>
                          <p>{t("We quickly identify")}</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Waves size={34}/>
                          </div>
                          <h5>{t("Drain Cleaning & Unclogging")}</h5>
                          <p>{t("Professional drain cleaning")}</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Wrench size={34}/>
                          </div>
                          <h5>{t("Pipe Installation & Repair")}</h5>
                          <p>{t("Expert pipe installation")}</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                            <Thermometer size={34}/>
                          </div>
                          <h5>{t("Water Heater Services")}</h5>
                          <p>{t("Installation, repair,")}</p>
                       </div>
            </div>
      </section>
         
         {/*BLOCK-3  звонок для консультации */}
      <section className={classes.container__five}>
          <div className={classes.block__navigation__pages}>
                  <h1>{t("get consultation")}</h1>
                  <p>{t("contact us today")}</p>
                  <div className={classes.block__btn__navigation}>
                    <Link className={classes.btn__ask} href="tel:+971588125032"><span>{t("call")}</span></Link>
                  </div>
          </div>
      </section>

      {/*BLOCK-4*/}
      {/*секция карточек почему выбирают нас*/}
      <section className={classes.container__two}>
        <h1>{t("Why Choose")}</h1>
        <div className={classes.section__card__two}>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
            <h3>{t("Licensed Plumbers")}</h3>
            <p>{t("All our plumbers")}</p>
        </div>
        <div className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <Clock3/>
            </div>
              <h3>{t("Fast Response Time")}</h3>
            <p>{t("We respond quickly")}</p>
        </div>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <CircleCheckBig/>
            </div>
              <h3>{t("Guaranteed Work")}</h3>
            <p>{t("We stand behind our")}</p>
        </div>
        </div>
      </section>
     {/*BLOCK-4  звонок для консультации */}
      <section className={classes.container__five}>
          <div className={classes.block__navigation__pages}>
                  <h1>{t("Get Professional Plumbing Help Today")}</h1>
                  <p>{t("Experienced plumbers ready")}</p>
                  <div className={classes.block__btn__navigation}>
                  <Link className={classes.btn__ask} href="tel:+971588125032"><span>{t("call now")}</span></Link>
                  </div>
          </div>
      </section>

    </>
}