"use client"

import { BrushCleaning, PaintbrushVertical, PaintBucket, PaintRoller, Palette, PhoneCall, Shield, Sparkles } from "lucide-react";
import classes from "./painting.module.css";
import { useTranslation } from "react-i18next";
import { PopUp, PopUpСalculation } from "@/components/Dialog/Popup/PopUp";
import { useState } from "react";
import Link from "next/link";


export default function PaintingWorks() {
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
            <source src="https://moduhaus.ae/video/painting/fon-painting.mp4" type="video/mp4" />
         </video>

        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>{t("Professional painting services")}</h1>
            <p>{t("Transform your space")}</p>
            <Link className={classes.btn__ask} href="tel:+971588125032"><span><PhoneCall size={17}/>{t("request a technician")}</span></Link>
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
                          <PaintRoller size={34}/>
                          </div>
                          <h5>{t("Interior Painting")}</h5>
                          <p>{t("Professional interior")}</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <PaintBucket size={34}/>
                          </div>
                          <h5>{t("Exterior Painting")}</h5>
                          <p>{t("Weather-resistant")}</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Palette size={34}/>
                          </div>
                          <h5>{t("Color Consultation")}</h5>
                          <p>{t("Expert guidance")}</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                            <Sparkles size={34}/>
                          </div>
                          <h5>{t("Wallpaper Installation")}</h5>
                          <p>{t("Professional wallpaper")}</p>
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
               <PaintbrushVertical/>
            </div>
            <h3>{t("Experienced Painters")}</h3>
            <p>{t("Our skilled painters")}</p>
        </div>
        <div className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
              <h3>{t("Quality Materials")}</h3>
            <p>{t("We use only premium")}</p>
        </div>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <BrushCleaning/>
            </div>
              <h3>{t("Clean Worksite")}</h3>
            <p>{t("We protect your")}</p>
        </div>
        </div>
      </section>
     {/*BLOCK-5  звонок для консультации */}
      <section className={classes.container__five}>
          <div className={classes.block__navigation__pages}>
                  <h1>{t("Get Professional Painting Services Today")}</h1>
                  <p>{t("Transform your home or")}</p>
                  <div className={classes.block__btn__navigation}>
                    <Link className={classes.btn__ask} href="tel:+971588125032"><span>{t("call now")}</span></Link>
                  </div>
          </div>
      </section>

    </>
}