"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Droplet, Hammer, Lightbulb,Paintbrush, RulerDimensionLine, Star } from "lucide-react";
import classes from "./repair.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Split from "@/components/Split/split";
import comparisonData from "@/components/data/Comparison.json";
import { Comparison,History } from "./repair.props";

import successStoryData from "@/components/data/SuccessStory.json";
import Form from "@/components/form/Form";
// import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { PopUp } from "@/components/Dialog/Popup/PopUp";

// const ReactPlayer = dynamic(()=> import("react-player"), {ssr: false});

type Lang = "ru" | "en";

const history:History[]= successStoryData;
const slide:Comparison[]= comparisonData;

export default function Repair() {
   const {t, i18n} = useTranslation();
   const [isOpen, setIsOpen] = useState <boolean> (false);

    return <>
            <section className={`${classes.video_bg}`}>
        {/* <ReactPlayer 
             src="/video/repair/fon-repair-2.mp4"
             playing
             muted
             loop
             playsInline
             width="100%"
             height="100%"
             /> */}
             <video 
             src="/video/repair/fon-repair-2.mp4"
             autoPlay
             muted
             playsInline
             loop
             preload="auto"
            ></video>
        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>{t("apartment renovation")}</h1>
            <p>{t("transform your")}</p>
            <button onClick={()=> setIsOpen(true)} className={classes.btn__ask}><span>{t("get estimate")}<RulerDimensionLine size={17}/></span></button>
        </div>
      </section>
      {/* BLOCK-1 */}
      <section className={classes.container__one}>
         <PopUp open={isOpen} onClose={()=> setIsOpen(false)}/>
        <div className={classes.block__zagolovok}>
            <h1>
               {t("our renovation")}
            </h1>
            <p>{t("complete solutions")}</p>
        </div>
            <div className={classes.section__card__one}>
                       <div className={`${classes.card__premium} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                          <Paintbrush size={34}/>
                          </div>
                          <h5>{t("painting & wall")}</h5>
                          <p>{t("professional painting")}</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Hammer size={34}/>
                          </div>
                          <h5>{t("flooring installation")}</h5>
                          <p>{t("expert installation")}</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Lightbulb size={34}/>
                          </div>
                          <h5>{t("electrical works")}</h5>
                          <p>{t("complete electrical")}</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                            <Droplet size={34}/>
                          </div>
                          <h5>{t("plumbing & fixtures")}</h5>
                          <p>{t("professional plumbing")}</p>
                       </div>
            </div>
      </section>
       {/*BLOCK-2 слайдер сравнения наших работ*/}
      <section className={classes.container__two}>
        <div className={classes.block__reviews}>
         <div className={classes.block__zagolovok}>
             <h1>
                {t("our portfolio")}
             </h1>
             <p>{t("see the transformation we create")}</p>
            </div>
            <div className={classes.block__nav__and__reviews__swiper}>
             <Swiper
             loop={true}
             spaceBetween={50}
             allowTouchMove={false}
             simulateTouch={false}
             pagination={{
                el: ".portfolio-pagination" ,
                clickable: true,
             }}
             navigation={{
                nextEl: ".portfolio-next",
                prevEl: ".portfolio-prev"
            }}
             modules={[Autoplay,Navigation,Pagination]}
             className="flex"
             >
                {slide.map((slide:Comparison, index)=>{
                    return(
                <SwiperSlide key={index}>
                      <Split leftImg={slide.left} rightImg={slide.right}/>
                </SwiperSlide>
                    )
                })}

             </Swiper>
              <div className={classes.block__navigation__swiper}>
                <div className="portfolio-prev">&lt;</div>
                <div className="portfolio-pagination"></div>
                <div className="portfolio-next">&gt;</div>
             </div>
             </div>
        </div>
      </section>
      {/*BLOCK-3 рассказ историй успеха*/}
      <section className={classes.container__three}>
        <div className={classes.block__reviews}>
         <div className={classes.block__zagolovok}>
             <h1>
                {t("what our clients say")}
             </h1>
             <p>{t("real reviews")}</p>
            </div>
            <div className={classes.block__nav__and__reviews__swiper}>
             <Swiper
             loop={true}
             spaceBetween={50}
             autoplay={{
                delay:61500,
                disableOnInteraction:false
             }}
             pagination={{
                el: ".history-pagination" ,
                clickable: true,
             }}
             navigation={{
                nextEl: ".history-next",
                prevEl: ".history-prev"
            }}
             modules={[Autoplay,Navigation,Pagination]}
             className="flex"
             >
              {history.map((hist: History, index)=>{
               const lang = (i18n.language.split(" ")[0] as Lang)
                const [firstName = "", lastName = ""] = hist.author[lang].split(" ");
                const firstNameLat = firstName.charAt(0).toUpperCase();
                const lastNameLat = lastName.charAt(0).toUpperCase();
                return (
                <SwiperSlide key={index}>
                 <div className={classes.block__content__swiper}>
                    <div className={classes.swiper__star}>{[...Array(5)].map((_,i)=>(
                        <Star key={i} stroke="#3f485a" fill="#3f485a"/>
                    ))}</div>
                    <div className={classes.block__text__swiper}>
                    <p className={classes.swiper__text}>"{hist.text[lang]}"</p>
                    <div className={classes.block__name__author__swiper}>
                        <div className={classes.swiper__initials}>
                        <p>{firstNameLat}</p>
                        <p>{lastNameLat}</p>
                        </div>
                        <p className={classes.swiper__full__name__author}>{hist.author[lang]}</p>
                    </div>
                    </div>
                 </div>
                </SwiperSlide>
               );
              })} 
             </Swiper>
              <div className={classes.block__navigation__swiper}>
                <div className="history-prev">&lt;</div>
                <div className="history-pagination"></div>
                <div className="history-next">&gt;</div>
             </div>
             </div>
        </div>
      </section>
        {/*BLOCK-4 запрос на консультацию */}
      <section className={classes.container__four}>
        <div className={classes.block__form}>
         <div className={classes.block__zagolovok}>
             <h1>
                {t("request a free")}
             </h1>
             <p>{t("fill out")}</p>
            </div>
            <div className={classes.block__form}>
             <Form/>
            </div>
        </div>
      </section>
      {/* BLOCK-5 Запрос на составление сметы */}
      <section className={classes.container__five}>
         <div className={classes.block__smeta}>
            <div className={classes.block__zagolovok}>
             <h1>
               {t("ready to transform")}
             </h1>
             <p>{t("get a detailed")}</p>
            </div>
            <button onClick={()=> setIsOpen(true)} className={classes.btn__smeta}><span><RulerDimensionLine size={17}/>{t("get estimate")}</span></button>
         </div>
      </section>
    </>
}