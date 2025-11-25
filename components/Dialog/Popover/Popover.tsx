import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react"
import { PhoneCall, Send } from "lucide-react"
import { useTranslation } from "react-i18next"

import classes from "./popover.module.css";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";




export const PopOver = () =>{
    const {t} = useTranslation();
    return (
    <Popover className={classes.block__popOver}>
        {({open})=>(
            <>
        <PopoverButton className={classes.btn__ask}>
            <span><PhoneCall size={17}/>{t("contact")}</span>
        </PopoverButton>
          <Transition
            show={open}
            enter={`${classes.transitionEnter}`}
            enterFrom={`${classes.transitionEnterFrom}`}
            enterTo={`${classes.transitionEnterTo}`}
            leave={`${classes.transitionLeave}`}
            leaveFrom={`${classes.transitionLeaveFrom}`}
            leaveTo={`${classes.transitionLeaveTo}`}
          >
        <PopoverPanel className={`${classes.panel}`}>
            <ul  className={`${classes.panel_ul}`}>
                <li className={`${classes.phone_number} ${classes.link}`}><Link href="tel:+971588122046">+&#40;971&#41;58-812-2046</Link></li>
                <li className={`${classes.li_telegram} ${classes.link}`}><Link href="https://t.me/+971588125032" target="_blank" rel="noopener noreferrer"><div className={`${classes.block_telegram} ${classes.block_media_icon}`}><Send size={34} className={`${classes.telegram} ${classes.icon}`}/></div></Link></li>
                <li className={`${classes.li_whatsApp} ${classes.link}`}><Link href="https:wa.me/+971588125032" target="_blank" rel="noopener noreferrer"><div className={`${classes.block_whatsApp} ${classes.block_media_icon}`}><FaWhatsapp color="green" size={34} className={`${classes.whatsApp} ${classes.icon}`} /></div></Link></li>
            </ul>
        </PopoverPanel>
        </Transition>
        </>
    )}
    </Popover>)
}