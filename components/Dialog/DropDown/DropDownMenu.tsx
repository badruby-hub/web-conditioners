import Link from "next/link";
import { useTranslation } from "react-i18next";

import classes from "./dropDown.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";




type DropDownProps ={
   onItemClick?: ()=> void;
}

export const DropDown = ({onItemClick}: DropDownProps) =>{
   const {t} = useTranslation();
   const pathname = usePathname();
   const [open, setOpen] = useState(false);


   const links = [
    {href: "/conditioners", label: t("ac services") },
    {href: "/painting", label: t("painting works")},
    {href: "/plumbing", label: t("plumbing")},
    {href: "/flooring", label: t("flooring")},
    {href: "/electrical", label: t("electrical")},
]
   return (
          <li
          className={classes.wrapper}
          onClick={()=>setOpen(!open)}
          >
              <div 
              className={`${classes.services} ${classes.link}`}>
            {t("services")}
             <span className={`${classes.chevron} ${open ? classes.open : ""}`}>
                <ChevronDown size={18}/>
             </span>
              </div>
            {open && (<ul className={`${classes.menu}`}>
            {
                links.map(({href,label})=>(
                    <li key={href}>
                       <Link onClick={()=>{setOpen(false); onItemClick?.()}} className={`${pathname === href ? classes.active : ""} ${classes.item}`}  href={href}>{label}</Link>
                    </li>
                    
                ))
            }
            </ul>
            )}
          </li>

   )
}