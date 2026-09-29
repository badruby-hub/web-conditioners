"use client";

import classes from "./privacy.module.css";
import { useTranslation } from "react-i18next";
import { privacy } from "@/components/data/privacy";


export default function Privacy() {
    const { i18n } = useTranslation();
    const lang = i18n.language?.startsWith("ru") ? "ru" : "en";
    const content = privacy[lang];

    return <section className={classes.container__privacy}>
        <div className={classes.block__privacy}>
            <h1>{content.title}</h1>
            <p className={classes.updated}>{content.updated}</p>
            <p className={classes.intro}>{content.intro}</p>

            {content.sections.map((section) => (
                <article key={section.title} className={classes.article}>
                    <h2>{section.title}</h2>
                    {section.list && (
                        <ul>
                            {section.list.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    )}
                    {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
                </article>
            ))}
        </div>
    </section>
}
