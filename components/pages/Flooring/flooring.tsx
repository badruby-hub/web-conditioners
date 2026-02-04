"use client"

import { BookCheck, CircleCheckBig, Grid3x3, Hammer, Layers, PhoneCall, Shield,Square } from "lucide-react";
import classes from "./flooring.module.css";
import { useTranslation } from "react-i18next";
import { PopUp, PopUpСalculation } from "@/components/Dialog/Popup/PopUp";
import { useState } from "react";
import Link from "next/link";


export default function Flooring() {
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
            <source src="/video/flooring/fon-flooring.mp4" type="video/mp4" />
         </video>

        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>{t("Профессиональная укладка напольных покрытий и плитки")}</h1>
            <p>{t("Экспертная установка красивых, долговечных напольных покрытий и плитки. Преобразите ваше пространство с нуля.")}</p>
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
                          <Layers size={34}/>
                          </div>
                          <h5>{t("Паркетные полы")}</h5>
                          <p>{t("Профессиональная установка паркетных полов для красоты.")}</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Grid3x3 size={34}/>
                          </div>
                          <h5>{t("Укладка плитки")}</h5>
                          <p>{t("Экспертная установка керамической, фарфоровой и натуральной каменной плитки.")}</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Square size={34}/>
                          </div>
                          <h5>{t("Ламинат и винил")}</h5>
                          <p>{t("Доступная, долговечная установка ламината и винилового напольного покрытия.")}</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                            <Hammer size={34}/>
                          </div>
                          <h5>{t("Установка ковров")}</h5>
                          <p>{t("Профессиональная установка ковров для комфорта и стиля.")}</p>
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
            <h3>{t("Экспертные установщики")}</h3>
            <p>{t("Наши установщики сертифицированы и имеют опыт работы со всеми типами напольных покрытий.")}</p>
        </div>
        <div className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <BookCheck/>
            </div>
              <h3>{t("Точная работа")}</h3>
            <p>{t("Тщательное внимание к деталям обеспечивает идеальное выравнивание и отделку.")}</p>
        </div>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <CircleCheckBig/>
            </div>
              <h3>{t("Выбор материалов")}</h3>
            <p>{t("Мы помогаем вам выбрать идеальное напольное покрытие для ваших потребностей и бюджета.")}</p>
        </div>
        </div>
      </section>
     {/*BLOCK-5  звонок для консультации */}
      <section className={classes.container__five}>
          <div className={classes.block__navigation__pages}>
                  <h1>{t("Получите профессиональную укладку напольных покрытий сегодня")}</h1>
                  <p>{t("Красивые, долговечные полы, установленные экспертами. Свяжитесь с нами для бесплатной консультации и оценки.")}</p>
                  <div className={classes.block__btn__navigation}>
                    <Link className={classes.btn__ask} href="tel:+971588125032"><span>{t("call now")}</span></Link>
                  </div>
          </div>
      </section>

    </>
}