"use client"

import { BookCheck, Cable, CircleCheckBig, Grid3x3, Hammer, Lamp, Layers, PhoneCall, Plug, Settings, Shield, Square, Zap } from "lucide-react";
import classes from "./electrical.module.css";
import { useTranslation } from "react-i18next";
import { PopUp, PopUpСalculation } from "@/components/Dialog/Popup/PopUp";
import { useState } from "react";
import Link from "next/link";


export default function Electrical() {
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
            <h1>{t("Профессиональные электромонтажные услуги")}</h1>
            <p>{t("Безопасные, надежные электрические установки и ремонт от лицензированных электриков. Питаем ваш дом с экспертностью и заботой.")}</p>
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
                          <Cable size={34}/>
                          </div>
                          <h5>{t("Проводка и перепроводка")}</h5>
                          <p>{t("Профессиональная установка электропроводки и модернизация для безопасного, надежного электропитания.")}</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Lamp size={34}/>
                          </div>
                          <h5>{t("Установка освещения")}</h5>
                          <p>{t("Экспертная установка внутренних и наружных осветительных приборов и систем.")}</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Settings size={34}/>
                          </div>
                          <h5>{t("Модернизация панелей")}</h5>
                          <p>{t("Модернизация электрических панелей для безопасной обработки современных требований к электропитанию.")}</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                            <Plug size={34}/>
                          </div>
                          <h5>{t("Установка розеток и выключателей")}</h5>
                          <p>{t("Установка розеток, выключателей, USB-портов и защиты GFCI.")}</p>
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
               <Zap/>
            </div>
            <h3>{t("Лицензированные электрики")}</h3>
            <p>{t("Все наши электрики полностью лицензированы, застрахованы и постоянно обучаются последним нормам.")}</p>
        </div>
        <div className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
              <h3>{t("Безопасность прежде всего")}</h3>
            <p>{t("Мы ставим безопасность на первое место в каждой работе, обеспечивая установки и ремонт в соответствии с нормами.")}</p>
        </div>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <CircleCheckBig/>
            </div>
              <h3>{t("Гарантия включена")}</h3>
            <p>{t("Все наши электромонтажные работы поставляются с комплексными гарантиями для вашего спокойствия.")}</p>
        </div>
        </div>
      </section>
     {/*BLOCK-5  звонок для консультации */}
      <section className={classes.container__five}>
          <div className={classes.block__navigation__pages}>
                  <h1>{t("Получите профессиональное электромонтажное обслуживание сегодня")}</h1>
                  <p>{t("Лицензированные электрики готовы справиться с любым электрическим проектом. Гарантированное безопасное и надежное обслуживание.")}</p>
                  <div className={classes.block__btn__navigation}>
                    <Link className={classes.btn__ask} href="tel:+971588125032"><span>{t("call now")}</span></Link>
                  </div>
          </div>
      </section>

    </>
}