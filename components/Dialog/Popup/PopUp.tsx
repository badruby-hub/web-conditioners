"use client";
import { RxCross1 } from "react-icons/rx";
import classes from "./popUp.module.css";
import {  Dialog, DialogPanel, DialogTitle, Field, Fieldset, Input, Label, Legend, Select, Textarea } from "@headlessui/react";
import { useTranslation } from "react-i18next";


interface PopUpProps {
    open: boolean;
    onClose: () => void;
}

interface PopUpCalcProps {
    openCalc: boolean;
    onCloseCalc: () => void;

}

export const PopUp = ({open, onClose}: PopUpProps)=> {
     const {t}= useTranslation();

   return   <Dialog open={open} onClose={onClose}>
            <div className={classes.bg__dialog}>
                <DialogPanel className={classes.popUp}>
                     <button className={classes.close__btn} onClick={onClose}>{<RxCross1 size={25}/>}</button>
                    <DialogTitle className={classes.title}>{t("leave request")}</DialogTitle>
                  <Fieldset className={classes.fieldset}>
                    <Field className={`${classes.field__firstName} ${classes.field} `}>
                        <Label>{t("firstName")}</Label>
                        <Input placeholder={t("enterFirstName")}/>
                    </Field>
                    <Field className={`${classes.field__number} ${classes.field} `}>
                        <Label>{t("numberPhone")}</Label>
                        <Input placeholder="+(921) __-___-____"/>
                    </Field>
                    <Field  className={`${classes.field__service} ${classes.field} `}>
                        <Label>{t("select service")}</Label>
                        <div className={classes.block__select}>
                            <Select>
                                <option>{t("conditioners")}</option>
                                <option>{t("repair")}</option>
                                <option>{t("get consultation")}</option>
                                <option>{t("get estimate")}</option>
                            </Select>
                            {/* <ChevronDownIcon/> */}
                        </div>
                    </Field>
                    <Field className={`${classes.field__description} ${classes.field} `}>
                        <Label>{t("description")}</Label>
                        <Textarea rows={5} placeholder={t("describe the task")}/>
                    </Field>
                  </Fieldset>
                  <button className={classes.submit__btn} onClick={onClose}>{t("send")}</button>
                </DialogPanel>
            </div>
        </Dialog>
}



export const PopUpСalculation = ({openCalc, onCloseCalc}: PopUpCalcProps)=> {
     const {t}= useTranslation();

   return   <Dialog open={openCalc} onClose={onCloseCalc}>
            <div className={classes.bg__dialog}>
                <DialogPanel className={classes.popUp}>
                     <button className={classes.close__btn} onClick={onCloseCalc}>{<RxCross1 size={25}/>}</button>
                    <DialogTitle className={classes.title}>{t("leave request")}</DialogTitle>
                  <Fieldset className={classes.fieldset}>
                    <Field className={`${classes.field__firstName} ${classes.field} `}>
                        <Label>{t("firstName")}</Label>
                        <Input placeholder={t("enterFirstName")}/>
                    </Field>
                    <Field className={`${classes.field__number} ${classes.field} `}>
                        <Label>{t("numberPhone")}</Label>
                        <Input placeholder="+(921) __-___-____"/>
                    </Field>
                    <Field  className={`${classes.field__service} ${classes.field} `}>
                        <Label>{t("select service")}</Label>
                        <div className={classes.block__select}>
                            <Select>
                                <option>{t("basic service")}</option>
                                <option>{t("premium service")}</option>
                                <option>{t("installation")}</option>
                            </Select>
                            {/* <ChevronDownIcon/> */}
                        </div>
                    </Field>
                    {/* <Field className={`${classes.field__description} ${classes.field} `}>
                        <Label>{t("description")}</Label>
                        <Textarea rows={5} placeholder={t("describe the task")}/>
                    </Field> */}
                  </Fieldset>
                  <button className={classes.submit__btn} onClick={onCloseCalc}>{t("send")}</button>
                </DialogPanel>
            </div>
        </Dialog>
}