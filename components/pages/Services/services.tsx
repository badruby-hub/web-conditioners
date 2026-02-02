"use client";

import { ChevronRight, Columns3Cog, Droplet, Hammer, Lightbulb, Paintbrush, PhoneIncoming, Wind } from "lucide-react";
import classes from "./services.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Services() {

    const {t, i18n} = useTranslation();

    return <>
     <section className={`${classes.video_bg}`}>
{/* 
             <video 
             poster="https://moduhaus.ae/video/repair/poster-fon-repair-2.png"
             autoPlay
             muted
             playsInline
             loop
             preload="auto"
            >
               <source src="https://moduhaus.ae/video/repair/fon-repair-2.mp4" type="video/mp4" />
            </video>
        <div className={classes.shadow_bg}></div> */}
        <div className={classes.video_bg_content}>
            <h1>{t("our technical")}</h1>
            <p>{t("explore our comprehensive")}</p>
            <Link className={classes.btn__ask} href="tel:+971588125032"><span>{t("call")}<PhoneIncoming size={17}/></span></Link>
        </div>
      </section>
            {/* секция услуг */}
      <section className={classes.container__service}>
         {/* <PopUp open={isOpen} onClose={()=> setIsOpen(false)}/> */}
        <div className={classes.block__zagolovok}>
            <h1>
               {t("our renovation")}
            </h1>
            <p>{t("complete solutions")}</p>
        </div>
            <div className={classes.section__card__one}>
                <Link className={classes.link__card} href="/conditioners">
                       <div className={`${classes.card__premium} ${classes.card__one}`}>
                          <div>
                          <div className={classes.bg_container_svg}>
                          <Wind size={34}/>
                          </div>
                          <h5>{t("ducted ac")}</h5>
                          </div>

                          <p>{t("complete installation")}</p>
                          <div className={classes.btn__more}>
                            <span>{t("learn more")}</span>
                            <ChevronRight className={classes.arrow} size={17}/>
                             </div>
                       </div>
                       </Link>

                       <Link className={classes.link__card} href="/painting">
                        <div className={`${classes.card__premium} ${classes.card__one}`}>
                         <div>
                          <div className={classes.bg_container_svg}>
                          <Paintbrush size={34}/>
                          </div>
                          <h5>{t("painting & wall")}</h5>
                          </div>
                          <p>{t("professional painting")}</p>
                          <div className={classes.btn__more}>
                            <span>{t("learn more")}</span>
                            <ChevronRight className={classes.arrow} size={17}/>
                             </div>
                       </div>
                       </Link>

                       <Link className={classes.link__card} href="/flooring">
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                        <div>
                          <div className={classes.bg_container_svg}>
                           <Hammer size={34}/>
                          </div>
                          <h5>{t("flooring installation")}</h5>
                          </div>
                          <p>{t("expert installation")}</p>
                          <div className={classes.btn__more}>
                            <span>{t("learn more")}</span>
                            <ChevronRight className={classes.arrow} size={17}/>
                             </div>
                       </div>
                       </Link>
                       <Link className={classes.link__card} href="/electrical">
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                        <div>
                          <div className={classes.bg_container_svg}>
                           <Lightbulb size={34}/>
                          </div>
                          <h5>{t("electrical works")}</h5>
                          </div>
                          <p>{t("complete electrical")}</p>
                          <div className={classes.btn__more}>
                            <span>{t("learn more")}</span>
                            <ChevronRight className={classes.arrow} size={17}/>
                             </div>
                       </div>
                       </Link>
                       <Link className={classes.link__card} href="/plumbing">
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                         <div>
                          <div className={classes.bg_container_svg}>
                            <Droplet size={34}/>
                          </div>
                          <h5>{t("plumbing & fixtures")}</h5>
                          </div>
                          <p>{t("professional plumbing")}</p>
                          <div className={classes.btn__more}>
                            <span>{t("learn more")}</span>
                            <ChevronRight className={classes.arrow} size={17}/>
                             </div>
                       </div>
                       </Link>
                       <Link className={classes.link__card} href="#">
                        <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                            <div>
                          <div className={classes.bg_container_svg}>
                            <Columns3Cog size={34}/>
                          </div>
                          <h5>{t("gypsum services")}</h5>
                          </div>
                          <p>{t("gypsum partition")}</p>
                          <div className={classes.btn__more}>
                            <span>{t("learn more")}</span>
                            <ChevronRight className={classes.arrow} size={17}/>
                             </div>
                       </div>
                       </Link>
            </div>
      </section>
      {/*BLOCK-3*/}
      <section className={classes.container__three}>
           <div className={classes.block__img__work}>
            <div className={classes.block__zagolovok}>
             <h1>
                {t("our works")}
             </h1>
             <p>{t("explore our")}</p>
            </div>
            <div className={classes.blocks__img__my__work}>
                <div className={classes.contain__img}>
                    <img src="/portfolio/image-1.jpg" alt="картинка" />
                </div>
                <div className={classes.contain__img}>
                    <img src="/portfolio/image-2.jpeg" alt="картинка" />
                </div>
                <div className={classes.contain__img}>
                    <img src="/portfolio/image-3.jpeg" alt="картинка" />
                </div>
                <div className={classes.contain__img}>
                    <img src="/portfolio/image-4.jpeg" alt="картинка" />
                </div>
                <div className={classes.contain__img}>
                    <img src="/portfolio/image-5.jpg" alt="картинка" />
                </div>
                <div className={classes.contain__img}>
                    <img src="/portfolio/image-6.jpg" alt="картинка" />
                </div>
            </div>
           </div>
      </section>
      {/*BLOCK-4  звонок для консультации */}
      <section className={classes.container__five}>
          <div className={classes.block__navigation__pages}>
                  <h1>{t("get consultation")}</h1>
                  <p>{t("contact us today")}</p>
                  <div className={classes.block__btn__navigation}>
                     <Link  className={classes.btn__ask} href="tel:+971588125032"><span>{t("call")}</span></Link>
                  </div>

          </div>
      </section>
    </>
}