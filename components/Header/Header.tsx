"use client";
import Link from "next/link";
import classes from "./header.module.css";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import {useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toggleBtn } from "../utils/Button/toggleLanguage";
import { PopOverHeader } from "../Dialog/Popover/PopoverHeader";
import { usePathname } from "next/navigation";
import { DropDown } from "../Dialog/DropDown/DropDownMenu";




export default function NavHeader() {
  const [isScrolled, setIsScrolled] = useState <boolean>(false);
  const [active, setActive] = useState <boolean>(false);


  useEffect(()=>{

      // узнаем окно равна 0 или нет . если равна 0 делаем header прозрачным 
     const handleScroll = () =>{
        if(window.scrollY === 0){
          setIsScrolled(false);
        }else{
          setIsScrolled(true);
        }
     }
        // вызываем функцию, проверить позицию 
      handleScroll(); 

     window.addEventListener("scroll", handleScroll, {passive: true});
     

     return () => window.removeEventListener("scroll",handleScroll);
    
     

  },[]);

  const {t} = useTranslation(); 
  const pathname = usePathname();

  return (
    <header className={`${isScrolled ? classes.header__scrolled : classes.header__transparent} ${classes.header}`}>
      <nav  className={`${classes.nav}`}>
        <Link href="/">
          <div className={classes.block__img}>
            <img src="/logo/home-256.png" alt="Логотип" />
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
            <li><Link className={pathname === "/" ? classes.active : ""} onClick={()=> setActive(false)} href="/">{t("home")}</Link></li>
            <DropDown onItemClick={()=> setActive(false)} />
          <li>
            <Link onClick={()=> setActive(false)} className={pathname === "/contact-us" ? classes.active : ""} href="/contact-us">{t("contact-us")}</Link>
          </li>
            <li>
              <div className={classes.block__btn__navbar}>
                   <button onClick={toggleBtn} className={classes.language__change}><Globe size={20}/>{t("translate")}</button>
                   <PopOverHeader/>
             </div>
      </li>
          </ul>
        </ul>
        {/* основное меню */}
        <ul className={classes.page__navigation}>
          <li>
            <Link className={pathname === "/" ? classes.active : ""} href="/">{t("home")}</Link>
          </li>
            <DropDown/>
          <li>
            <Link className={pathname === "/contact-us" ? classes.active : ""} href="/contact-us">{t("contact-us")}</Link>
          </li>
        </ul>
      <div className={classes.block__btn__learn__and__ask}>
         <button onClick={toggleBtn} className={classes.language__change}><Globe size={20}/>{t("translate")}</button>
          <PopOverHeader/>
      </div>
      </nav>
    </header>
  );
}
