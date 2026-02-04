"use client"

import { Cable, CircleCheckBig,Hammer,Lamp,  Layers,  PaintBucket,  PhoneCall, Plug, Settings, Shield,Square,Wrench,Zap } from "lucide-react";
import classes from "./drywall.module.css";
import { useTranslation } from "react-i18next";
import { PopUp, PopUpСalculation } from "@/components/Dialog/Popup/PopUp";
import { useState } from "react";
import Link from "next/link";


export default function Drywall() {
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
            <source src="/video/drywall/fon-drywall.mp4" type="video/mp4" />
         </video>

        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>{t("Профессиональные гипсокартонные работы")}</h1>
            <p>{t("Экспертная установка, ремонт и отделка гипсокартона для гладких, безупречных стен и потолков. Качественное мастерство каждый раз.")}</p>
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
                          <Square size={34}/>
                          </div>
                          <h5>{t("Установка гипсокартона")}</h5>
                          <p>{t("Полная установка гипсокартона для новых строительных и ремонтных проектов.")}</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Wrench size={34}/>
                          </div>
                          <h5>{t("Ремонт гипсокартона")}</h5>
                          <p>{t("Экспертный ремонт отверстий, трещин и повреждений от воды для восстановления ваших стен.")}</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <PaintBucket size={34}/>
                          </div>
                          <h5>{t("Шпаклевка и отделка")}</h5>
                          <p>{t("Профессиональная оклейка, шпаклевка и отделка для гладких, готовых к покраске поверхностей.")}</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                            <Layers size={34}/>
                          </div>
                          <h5>{t("Подбор текстуры")}</h5>
                          <p>{t("Бесшовный подбор текстуры для идеального сочетания ремонта с существующими стенами.")}</p>
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
               <Hammer/>
            </div>
            <h3>{t("Экспертные мастера")}</h3>
            <p>{t("Наши специалисты по гипсокартону имеют многолетний опыт создания идеальной отделки.")}</p>
        </div>
        <div className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
              <h3>{t("Качественные материалы")}</h3>
            <p>{t("Мы используем премиальные гипсокартонные материалы и смеси для долговечного качества.")}</p>
        </div>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <CircleCheckBig/>
            </div>
              <h3>{t("Чистая и гладкая отделка")}</h3>
            <p>{t("Профессиональные техники отделки обеспечивают идеально гладкие, готовые к покраске поверхности.")}</p>
        </div>
        </div>
      </section>
     {/*BLOCK-5  звонок для консультации */}
      <section className={classes.container__five}>
          <div className={classes.block__navigation__pages}>
                  <h1>{t("Получите профессиональные гипсокартонные услуги сегодня")}</h1>
                  <p>{t("Качественная установка и ремонт гипсокартона от опытных профессионалов. Свяжитесь с нами для бесплатной оценки.")}</p>
                  <div className={classes.block__btn__navigation}>
                    <Link className={classes.btn__ask} href="tel:+971588125032"><span>{t("call now")}</span></Link>
                  </div>
          </div>
      </section>

    </>
}