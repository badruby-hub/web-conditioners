"use client"

import { Calculator, PhoneCall, Settings, Shield, Thermometer, Wind, Zap } from "lucide-react";
import classes from "./conditioners.module.css";
import { useTranslation } from "react-i18next";
import { PopUp, PopUpСalculation } from "@/components/Dialog/Popup/PopUp";
import { useState } from "react";


export default function Main() {
   const {t} = useTranslation();
   const [isOpen, setIsOpen] = useState <boolean> (false);
   const [isOpenCalc, setIsOpenCalc] = useState <boolean> (false);

    return <>
        <section className={`${classes.video_bg}`}>
        <video  
         poster="https://web-conditioners.vercel.app/video/conditioners/conditioners-poster-fon-2.png"
         autoPlay
         muted
         playsInline
         loop
         preload="auto"
         >
            <source src="https://web-conditioners.vercel.app/video/conditioners/conditioners-2.mp4" type="video/mp4" />
         </video>

        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>{t("ducted ac")}</h1>
            <p>{t("professional climate")}</p>
            <button onClick={()=> setIsOpen(true)} className={classes.btn__ask}><span><PhoneCall size={17}/>{t("request a technician")}</span></button>
        </div>
      </section>
      {/* BLOCK-2 */}
      <section className={classes.container__one}>
         <PopUp open={isOpen} onClose={()=> setIsOpen(false)}/>
         <PopUpСalculation openCalc={isOpenCalc} onCloseCalc={()=> setIsOpenCalc(false)}/>   
        <div className={classes.block__zagolovok}>
            <h1>
                {t("our ac services")} 
            </h1>
            <p>{t("comprehensive solutions")}</p>
        </div>
            <div className={classes.section__card__one}>
                       <div className={`${classes.card__premium} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                          <Wind size={34}/>
                          </div>
                          <h5>{t("ducted ac installation")}</h5>
                          <p>{t("complete installation")}</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Settings size={34}/>
                          </div>
                          <h5>{t("ac repair")}</h5>
                          <p>{t("expert repair")}</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Thermometer size={34}/>
                          </div>
                          <h5>{t("system diagnostics")}</h5>
                          <p>{t("advanced diagnostic")}</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                            <Zap size={34}/>
                          </div>
                          <h5>{t("energy optimization")}</h5>
                          <p>{t("optimize your")}</p>
                       </div>
            </div>
      </section>
         {/*BLOCK-3*/}

      <section className={classes.container__two}>
        <h1>{t("why ducted")}</h1>
        {/*секция карточек*/}
        <div className={classes.section__card__two}>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
            <h3>{t("invisible design")}</h3>
            <p>{t("discreet ceiling")}</p>
        </div>
        <div className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
              <h3>{t("whole home")}</h3>
            <p>{t("consistent temperature")}</p>
        </div>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
              <h3>{t("energy efficient")}</h3>
            <p>{t("lower running")}</p>
        </div>
        <div className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
              <h3>{t("quiet operation")}</h3>
            <p>{t("minimal noise")}</p>
        </div>
        </div>
      </section>
      {/* BLOCK-4  */}
       <section className={classes.container__three}>
           <h1>
             {t("pricing plans")}
           </h1>
           {/* карточки прайса */}
           <div className={classes.section__card}>
                <article className={classes.price__card}>
                   <header className={classes.header}>
                       <h2>{t("basic service")}</h2>
                       <p>{t("essential maintenance")}</p>
                   </header>
                   <ul className={classes.price__features}>
                    <li><Shield/>{t("complete system")}</li>
                    <li><Shield/>{t("filter cleaning")}</li>
                    <li><Shield/>{t("coolant level")}</li>
                    <li><Shield/>{t("basic troubleshooting")}</li>
                    <li><Shield/>{t("30-day")}</li>
                   </ul>
                   <footer className={classes.footer}>
                      <button onClick={()=> setIsOpenCalc(true)} className={classes.price__btn}>
                                 <Calculator size={20}/><span>{t("get quote")}</span>
                      </button>
                   </footer>
                </article>
                <article className={classes.price__card}>
                   <header className={classes.header}>
                       <h2>{t("premium service")}</h2>
                       <p>{t("comprehensive")}</p>
                   </header>
                   <ul className={classes.price__features}>
                    <li><Shield/>{t("everything in basic")}</li>
                    <li><Shield/>{t("deep system")}</li>
                    <li><Shield/>{t("performance optimization")}</li>
                    <li><Shield/>{t("duct inspection")}</li>
                    <li><Shield/>{t("6-month warranty")}</li>
                    <li><Shield/>{t("priority support")}</li>
                   </ul>
                   <footer className={classes.footer}>
                      <button onClick={()=> setIsOpenCalc(true)} className={classes.price__btn}>
                                 <Calculator size={20}/><span>{t("get quote")}</span>
                      </button>
                   </footer>
                </article>
                <article className={classes.price__card}>
                   <header className={classes.header}>
                       <h2>{t("installation")}</h2>
                       <p>{t("complete ducted")}</p>
                   </header>
                   <ul className={classes.price__features}>
                    <li><Shield/>{t("free consultation")}</li>
                    <li><Shield/>{t("custom system")}</li>
                    <li><Shield/>{t("professional installation")}</li>
                    <li><Shield/>{t("system testing")}</li>
                    <li><Shield/>{t("5-year warranty")}</li>
                    <li><Shield/>{t("24/7 support")}</li>
                   </ul>
                   <footer className={classes.footer}>
                      <button onClick={()=> setIsOpenCalc(true)} className={classes.price__btn}>
                                 <Calculator size={20}/><span>{t("get quote")}</span>
                      </button>
                   </footer>
                </article>
           </div>
       </section>

    </>
}