"use client";
import Link from "next/link";
import classes from "./header.module.css";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import {useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toggleBtn } from "../utils/Button/toggleLanguage";
import { PopOver } from "../Dialog/Popover/Popover";
import { usePathname } from "next/navigation";




export default function NavHeader() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState <boolean>(false);
  // useEffect(()=>{

  //   const handleScroll =() =>{
  //     let h = window.scrollY > 86.4;
  //     if(h) {
  //      setIsScrolled(true);
  //     }else{
  //       setIsScrolled(false)
  //     }
  //   }
  //    handleScroll();
     
  //    window.addEventListener("scroll", handleScroll);
     

  //    return () => window.removeEventListener("scroll", handleScroll);


  // },[]);

  const {t} = useTranslation();
  const pathname = usePathname();

  return (
    <header   className={`${classes.header}`}>
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
            <li><Link className={pathname === "/conditioners" ? classes.active : ""} onClick={()=> setActive(false)} href="conditioners">{t("conditioners")}</Link></li>
            <li><Link className={pathname === "/repair" ? classes.active : ""}  onClick={()=> setActive(false)} href="repair">{t("repair")}</Link></li>
            <li>
              <div className={classes.block__btn__navbar}>
                   <button onClick={toggleBtn} className={classes.language__change}><Globe size={20}/>{t("translate")}</button>
                   <PopOver/>
             </div>
      </li>
          </ul>
        </ul>
        {/* основное меню */}
        <ul className={classes.page__navigation}>
          <li>
            <Link className={pathname === "/" ? classes.active : ""} href="/">{t("home")}</Link>
          </li>
          <li>
            <Link className={pathname === "/conditioners" ? classes.active : ""} href="conditioners">{t("conditioners")}</Link>
          </li>
          <li>
            <Link className={pathname === "/repair" ? classes.active : ""} href="repair">{t("repair")}</Link>
          </li>
        </ul>
      <div className={classes.block__btn__learn__and__ask}>
         <button onClick={toggleBtn} className={classes.language__change}><Globe size={20}/>{t("translate")}</button>
          <PopOver/>
      </div>
      </nav>
    </header>
  );
}
