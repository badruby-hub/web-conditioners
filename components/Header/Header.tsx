"use client";
import Link from "next/link";
import classes from "./header.module.css";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { Globe, PhoneCall } from "lucide-react";

export default function NavHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(()=>{

    const handleScroll =() =>{
      let h = window.scrollY > 86.4;
      if(h) {
       setIsScrolled(true);
      }else{
        setIsScrolled(false)
      }
    }
     handleScroll();
     
     window.addEventListener("scroll", handleScroll);
     

     return () => window.removeEventListener("scroll", handleScroll);


  },[]);
  return (
    <header   className={`${classes.header} ${isScrolled ? classes.head__fixed : ""}`}>
      <nav  className={`${classes.nav}`}>
        <Link href="/">
          <div className={classes.block__img}>
            <img src="/logo/black/home-256.png" alt="Логотип" />
          </div>
        </Link>
        {/* бургер меню */}
        <ul className={classes.btn__menu__burger}>
          <li
            className={`${classes.icons__burger__menu}`}
            onClick={() => {
              setActive(!active);
            }}
          >
            {active ? <RxCross1 /> : <RxHamburgerMenu />}
          </li>
          <ul className={`${active ? classes.container__navbar__active : classes.container__navbar}`}>
            <li><Link href="/">Главная</Link></li>
            <li><Link href="conditioners">Кондиционеры</Link></li>
            <li><Link href="repair">Ремонт</Link></li>
            <li>
              <div className={classes.block__btn__navbar}>
                   <button className={classes.language__change}><Globe size={20}/>RU</button>
                   <button className={classes.btn__ask}><span><PhoneCall size={17}/>Связаться</span></button>
             </div>
      </li>
          </ul>
        </ul>
        {/* основное меню */}
        <ul className={classes.page__navigation}>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="conditioners">Кондиционеры</Link>
          </li>
          <li>
            <Link href="repair">Ремонт</Link>
          </li>
        </ul>
      <div className={classes.block__btn__learn__and__ask}>
         <button className={classes.language__change}><Globe size={20}/>RU</button>
         <button className={classes.btn__ask}><span><PhoneCall size={17}/>Связаться</span></button>
      </div>
      </nav>

    </header>
  );
}
