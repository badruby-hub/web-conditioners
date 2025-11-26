"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import reviewsData from "../data/Reviews.json";
import classes from "./main.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import Link from "next/link";
import { Reviews } from "./main.props";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { PopUp } from "../Dialog/Popup/PopUp";

type Lang = "ru" | "en";

const reviews: Reviews[] = reviewsData; 




export default function Main() {
    const {t, i18n} = useTranslation();
    const [isOpen, setIsOpen] = useState <boolean> (false);
    return <>
       {/*video bg*/}
      <section className={`${classes.video_bg}`}>
             <video 
               poster="https://web-conditioners.vercel.app/video/video-poster-bg-fon-2.png"
               autoPlay
               muted
               playsInline
               loop
               preload="auto"
               >
                <source src="https://web-conditioners.vercel.app/video/video-bg-fon-2.mp4" type="video/mp4" />
               </video>
        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>moduhaus</h1>
            <p>{t("modern")}</p>
            <button onClick={()=> setIsOpen(true)} className={classes.btn__ask}><span>{t("get consultation")}</span></button>
        </div>
      </section>
           {/*BLOCK-1*/}
      <section className={classes.container__one}>
       <PopUp open={isOpen} onClose={()=> setIsOpen(false)}/>
        <h1>{t("about")}<span>Moduhaus</span></h1>
        <p className={classes.block__p__one}>
          {t("we are")}
        </p>
        <p className={classes.block__p__two}>
           {t("our mission")}
        </p>
        {/*секция карточек*/}
        <div className={classes.section__card}>
        <div className={`${classes.card__count__project} ${classes.card}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-award w-10 h-10 mx-auto mb-4 text-[hsl(var(--primary))]" aria-hidden="true">
             <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
             <circle cx="12" cy="8" r="6" />
            </svg>
            <h3>500+</h3>
            <p>{t("500+")}</p>
        </div>
        <div className={`${classes.card__satisfied__client} ${classes.card}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-users w-10 h-10 mx-auto mb-4 text-[hsl(var(--primary))]" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <path d="M16 3.128a4 4 0 0 1 0 7.744" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
            </svg>
              <h3>98%</h3>
            <p>{t("98% happy")}</p>
        </div>
        <div className={`${classes.card__experience} ${classes.card}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-sparkles w-10 h-10 mx-auto mb-4 text-[hsl(var(--primary))]" aria-hidden="true">
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              <path d="M20 2v4" />
              <path d="M22 4h-4" />
                <circle cx="4" cy="20" r="2" />
            </svg>
              <h3>10+</h3>
            <p>{t("years experience")}</p>
        </div>
        <div className={`${classes.card__guarantee} ${classes.card}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-shield w-10 h-10 mx-auto mb-4 text-[hsl(var(--primary))]" aria-hidden="true">
                 <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
              <h3>5y</h3>
            <p>{t("warranty")}</p>
        </div>
        </div>
      </section>
      {/*BLOCK-2*/}
      <section className={classes.container__two}>
            <h1>
                {t("why choose us")} 
            </h1>
            <div className={classes.section__card__two}>
                       <div className={`${classes.card__premium} ${classes.card__two}`}>
                          <div className={classes.bg_container_svg}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-award w-10 h-10 mx-auto mb-4 text-[hsl(var(--primary))]" aria-hidden="true">
                               <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                               <circle cx="12" cy="8" r="6" />
                              </svg>
                          </div>
                          <h5>{t("premium quality")}</h5>
                          <p>{t("we use only")}</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__two}`}>
                          <div className={classes.bg_container_svg}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                   className="lucide lucide-clock w-8 h-8 text-white" aria-hidden="true">
                                <path d="M12 6v6l4 2" />
                                <circle cx="12" cy="12" r="10" />
                                </svg>

                          </div>
                          <h5>{t("fast service")}</h5>
                          <p>{t("quick response")}</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__two}`}>
                          <div className={classes.bg_container_svg}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                  className="lucide lucide-shield w-10 h-10 mx-auto mb-4 text-[hsl(var(--primary))]" aria-hidden="true">
                               <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                              </svg>
                          </div>
                          <h5>{t("extended warranty")}</h5>
                          <p>{t("comprehensive warranty")}</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__two}`}>
                          <div className={classes.bg_container_svg}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                   className="lucide lucide-wrench w-8 h-8 text-white" aria-hidden="true">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
                              </svg>
                          </div>
                          <h5>{t("expert team")}</h5>
                          <p>{t("certified professionals")}</p>
                       </div>
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
      {/*BLOCK-4 слайдер*/}
      <section className={classes.container__four}>
        <div className={classes.block__reviews}>
         <div className={classes.block__zagolovok}>
             <h1>
                {t("what our clients say")}
             </h1>
             <p>{t("real feedback")}</p>
            </div>
            <div className={classes.block__nav__and__reviews__swiper}>
             <Swiper
             loop={true}
             spaceBetween={50}
             autoplay={{
                delay:2500,
                disableOnInteraction:false
             }}
             pagination={{
                el: ".my-pagination" ,
                clickable: true,
             }}
             navigation={{
                nextEl: ".my-next",
                prevEl: ".my-prev"
            }}
             modules={[Autoplay,Navigation,Pagination]}
             className="flex"
             >
              {reviews.map((review: Reviews, index)=>{
                const lang = (i18n.language.split("-")[0] as Lang)
                const [firstName = "", lastName = ""] = review.author[lang].split(" ");
                const firstNameLat = firstName.charAt(0).toUpperCase();
                const lastNameLat = lastName.charAt(0).toUpperCase();
                return (
                <SwiperSlide key={index}>
                 <div className={classes.block__content__swiper}>
                    <div className={classes.swiper__star}>{[...Array(5)].map((_,i)=>(
                        <Star key={i} stroke="#3f485a" fill="#3f485a"/>
                    ))}</div>
                    <div className={classes.block__text__swiper}>
                    <p className={classes.swiper__text}>"{review.text[lang]}"</p>
                    <div className={classes.block__name__author__swiper}>
                        <div className={classes.swiper__initials}>
                        <p>{firstNameLat}</p>
                        <p>{lastNameLat}</p>
                        </div>
                        <p className={classes.swiper__full__name__author}>{review.author[lang]}</p>
                    </div>
                    </div>
                 </div>
                </SwiperSlide>
               );
              })} 
             </Swiper>
              <div className={classes.block__navigation__swiper}>
                <div className="my-prev">&lt;</div>
                <div className="my-pagination"></div>
                <div className="my-next">&gt;</div>
             </div>
             </div>
        </div>
      </section>
{/*BLOCK-5  навигация для перехода на страницы */}
      <section className={classes.container__five}>
          <div className={classes.block__navigation__pages}>
                  <h1>{t("get consultation")}</h1>
                  <p>{t("contact us today")}</p>
                  <div className={classes.block__btn__navigation}>
                     <Link href="/conditioners" className={`${classes.btn__page__conditioner} ${classes.btn__pages}`}><span>{t("ac services")}</span></Link>
                     <Link href="/repair" className={`${classes.btn__page__repair} ${classes.btn__pages}`}><span>{t("renovation services")}</span></Link>
                  </div>

          </div>
      </section>
    </>
}






