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

const history:History[]= successStoryData;
const slide:Comparison[]= comparisonData;

export default function Repair() {
    return <>
            <section className={`${classes.video_bg}`}>
        <video src="/video/repair/fon-repair.mp4" autoPlay muted loop playsInline webkit-playsinline></video>
        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>Ремонт квартир и отделка интерьеров</h1>
            <p>Преобразите ваше пространство с премиальными услугами ремонта в Дубае</p>
            <button className={classes.btn__ask}><span>Составить смету<RulerDimensionLine size={17}/></span></button>
        </div>
      </section>
      {/* BLOCK-1 */}
      <section className={classes.container__one}>
        <div className={classes.block__zagolovok}>
            <h1>
                Наши услуги по ремонту
            </h1>
            <p>Комплексные решения для вашего интерьера</p>
        </div>
            <div className={classes.section__card__one}>
                       <div className={`${classes.card__premium} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                          <Paintbrush size={34}/>
                          </div>
                          <h5>Покраска и отделка стен</h5>
                          <p>Профессиональные малярные работы с премиальными материалами.
                             Текстурные покрытия, декоративные техники и цветовой консалтинг.</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Hammer size={34}/>
                          </div>
                          <h5>Укладка напольных покрытий</h5>
                          <p>Экспертная укладка плитки, паркета, ламината и винила.
                             Полная подготовка основания и финишная отделка.</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Lightbulb size={34}/>
                          </div>
                          <h5>Электромонтажные работы</h5>
                          <p>Полная установка и модернизация электросистем.
                             Современное освещение, интеграция умного дома и проверка безопасности.</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                            <Droplet size={34}/>
                          </div>
                          <h5>Сантехнические работы</h5>
                          <p>Профессиональная установка сантехники и ремонт.
                             Сантехника для ванной и кухни, водные системы и дренаж.</p>
                       </div>
            </div>
      </section>
       {/*BLOCK-2 слайдер сравнения наших работ*/}
      <section className={classes.container__two}>
        <div className={classes.block__reviews}>
         <div className={classes.block__zagolovok}>
             <h1>
                Наше портфолио
             </h1>
             <p>Посмотрите, какие трансформации мы создаём</p>
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
                Отзывы наших клиентов
             </h1>
             <p>Реальные отзывы довольных клиентов</p>
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
                const [firstName = "", lastName = ""] = hist.author.split(" ");
                const firstNameLat = firstName.charAt(0).toUpperCase();
                const lastNameLat = lastName.charAt(0).toUpperCase();
                return (
                <SwiperSlide key={index}>
                 <div className={classes.block__content__swiper}>
                    <div className={classes.swiper__star}>{[...Array(5)].map((_,i)=>(
                        <Star key={i} stroke="#3f485a" fill="#3f485a"/>
                    ))}</div>
                    <div className={classes.block__text__swiper}>
                    <p className={classes.swiper__text}>"{hist.text}"</p>
                    <div className={classes.block__name__author__swiper}>
                        <div className={classes.swiper__initials}>
                        <p>{firstNameLat}</p>
                        <p>{lastNameLat}</p>
                        </div>
                        <p className={classes.swiper__full__name__author}>{hist.author}</p>
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
                Запросить бесплатную консультацию
             </h1>
             <p>Заполните форму и мы свяжемся с вами в течение 24 часов</p>
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
               Готовы преобразить ваше пространство?
             </h1>
             <p>Получите детальную смету для вашего ремонтного проекта</p>
            </div>
            <button className={classes.btn__smeta}><span><RulerDimensionLine size={17}/>Получить смету</span></button>
         </div>
      </section>
    </>
}