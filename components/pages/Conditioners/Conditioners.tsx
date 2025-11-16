"use client"

import { Calculator, PhoneCall, Settings, Shield, Thermometer, Wind, Zap } from "lucide-react";
import classes from "./conditioners.module.css";

export default function Main() {
    return <>
        <section className={`${classes.video_bg}`}>
        <video poster="/video/conditioners/conditioners.mp4" autoPlay muted loop preload="auto" playsInline webkit-playsinline></video>
        <div className={classes.shadow_bg}></div>
        <div className={classes.video_bg_content}>
            <h1>Установка и ремонт канальных кондиционеров</h1>
            <p>Профессиональные решения климат-контроля для домов и бизнеса в Дубае</p>
            <button className={classes.btn__ask}><span><PhoneCall size={17}/>Вызвать специалиста</span></button>
        </div>
      </section>
      {/* BLOCK-2 */}
      <section className={classes.container__one}>
        <div className={classes.block__zagolovok}>
            <h1>
                Наши услуги 
            </h1>
            <p>Комплексные решения для всех ваших потребностей в кондиционировании</p>
        </div>
            <div className={classes.section__card__one}>
                       <div className={`${classes.card__premium} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                          <Wind size={34}/>
                          </div>
                          <h5>Установка канальных систем</h5>
                          <p>Полная установка канальных систем кондиционирования для жилых и коммерческих объектов.
                             Энергоэффективные решения для вашего пространства.</p>
                       </div>
                       <div className={`${classes.card__fast__service} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Settings size={34}/>
                          </div>
                          <h5>Ремонт и обслуживание</h5>
                          <p>Экспертный ремонт и регулярное обслуживание для поддержания системы в отличном состоянии.
                             Доступно 24/7 для экстренных случаев.</p>
                       </div>
                       <div className={`${classes.card__extended__warranty} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                           <Thermometer size={34}/>
                          </div>
                          <h5>Диагностика систем</h5>
                          <p>Передовые инструменты диагностики для быстрого
                             и эффективного выявления и решения проблем с вашей системой.</p>
                       </div>
                       <div className={`${classes.card__team__experts} ${classes.card__one}`}>
                          <div className={classes.bg_container_svg}>
                            <Zap size={34}/>
                          </div>
                          <h5>Оптимизация энергии</h5>
                          <p>Оптимизация вашей системы для максимальной энергоэффективности,
                             снижая счета за электричество при сохранении идеального комфорта.</p>
                       </div>
            </div>
      </section>
         {/*BLOCK-3*/}

      <section className={classes.container__two}>
        <h1>Преимущества канальных систем</h1>
        {/*секция карточек*/}
        <div className={classes.section__card__two}>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
            <h3>Невидимый дизайн</h3>
            <p>Незаметные потолочные решетки сохраняют эстетику интерьера</p>
        </div>
        <div className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
              <h3>Комфорт во всём доме</h3>
            <p>Равномерная температура по всей вашей собственности</p>
        </div>
        <div className={`${classes.card}`}>
            <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
              <h3>Энергоэффективность</h3>
            <p>Низкие эксплуатационные расходы по сравнению с несколькими сплит-системами</p>
        </div>
        <div className={`${classes.card}`}>
           <div className={classes.bg_container_svg}>
               <Shield/>
            </div>
              <h3>Тихая работа</h3>
            <p>Минимальный шум для спокойной жизни и работы</p>
        </div>
        </div>
      </section>
      {/* BLOCK-4  */}
       <section className={classes.container__three}>
           <h1>
             Тарифные планы
           </h1>
           {/* карточки прайса */}
           <div className={classes.section__card}>
                <article className={classes.price__card}>
                   <header className={classes.header}>
                       <h2>Базовое обслуживание</h2>
                       <p>Основное обслуживание и проверка</p>
                   </header>
                   <ul className={classes.price__features}>
                    <li><Shield/>Полная проверка системы</li>
                    <li><Shield/>Чистка/замена фильтров</li>
                    <li><Shield/>Проверка уровня хладагента</li>
                    <li><Shield/>Базовая диагностика</li>
                    <li><Shield/>Гарантия 30 дней</li>
                   </ul>
                   <footer className={classes.footer}>
                      <button className={classes.price__btn}>
                                 <Calculator size={20}/><span>Расчитать</span>
                      </button>
                   </footer>
                </article>
                <article className={classes.price__card}>
                   <header className={classes.header}>
                       <h2>Премиум обслуживание</h2>
                       <p>Комплексный пакет обслуживания</p>
                   </header>
                   <ul className={classes.price__features}>
                    <li><Shield/>Всё из Базового</li>
                    <li><Shield/>Глубокая очистка системы</li>
                    <li><Shield/>Оптимизация производительности</li>
                    <li><Shield/>Проверка воздуховодов</li>
                    <li><Shield/>Гарантия 6 месяцев</li>
                    <li><Shield/>Приоритетная поддержка</li>
                   </ul>
                   <footer className={classes.footer}>
                      <button className={classes.price__btn}>
                                 <Calculator size={20}/><span>Расчитать</span>
                      </button>
                   </footer>
                </article>
                <article className={classes.price__card}>
                   <header className={classes.header}>
                       <h2>Установка</h2>
                       <p>Полная установка канальной системы</p>
                   </header>
                   <ul className={classes.price__features}>
                    <li><Shield/>Бесплатная консультация</li>
                    <li><Shield/>Индивидуальный проект</li>
                    <li><Shield/>Профессиональная установка</li>
                    <li><Shield/>Тестирование системы</li>
                    <li><Shield/>Гарантия 5 лет</li>
                    <li><Shield/>Поддержка 24/7</li>
                   </ul>
                   <footer className={classes.footer}>
                      <button className={classes.price__btn}>
                                 <Calculator size={20}/><span>Расчитать</span>
                      </button>
                   </footer>
                </article>
           </div>
       </section>

    </>
}