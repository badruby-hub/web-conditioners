// Текст политики конфиденциальности для страницы /privacy (ru / en)

export type PrivacySection = {
    title: string;
    paragraphs?: string[];
    list?: string[];
};

export type PrivacyContent = {
    title: string;
    updated: string;
    intro: string;
    sections: PrivacySection[];
};

const CONTACT_EMAIL = "moduhaus.technical@gmail.com";
const CONTACT_PHONE = "+971588125032";

export const privacy: Record<"ru" | "en", PrivacyContent> = {
    ru: {
        title: "Политика конфиденциальности",
        updated: "Дата последнего обновления: 30 сентября 2026 г.",
        intro:
            "Настоящая Политика конфиденциальности описывает, какие персональные данные MODUHAUS (далее — «мы») получает от посетителей сайта, как мы их используем и защищаем. Отправляя заявку на сайте и отмечая согласие, вы подтверждаете, что ознакомились с этой Политикой и согласны с ней.",
        sections: [
            {
                title: "1. Кто обрабатывает данные",
                paragraphs: [
                    `Оператор персональных данных — MODUHAUS, Дубай, ОАЭ. По любым вопросам о ваших данных пишите на ${CONTACT_EMAIL} или звоните по номеру ${CONTACT_PHONE}.`,
                ],
            },
            {
                title: "2. Какие данные мы собираем",
                list: [
                    "Имя, которое вы указываете в форме заявки.",
                    "Номер телефона.",
                    "Описание задачи или проекта, которое вы вводите в поле «Детали».",
                    "Технические данные: IP-адрес, тип браузера и устройства, страницы, которые вы посещаете. Их собирают файлы cookie и сервисы аналитики (см. раздел 5).",
                ],
                paragraphs: [
                    "Мы не просим и не собираем платёжные данные, паспортные данные и иные особые категории персональных данных через сайт.",
                ],
            },
            {
                title: "3. Зачем мы используем данные",
                list: [
                    "Чтобы связаться с вами по заявке, уточнить детали и рассчитать стоимость работ.",
                    "Чтобы выполнить заказанные работы и согласовать время визита мастера.",
                    "Чтобы оценивать эффективность рекламы и улучшать работу сайта.",
                ],
                paragraphs: ["Мы не продаём ваши персональные данные и не используем их для рассылок без вашего отдельного согласия."],
            },
            {
                title: "4. Правовое основание",
                paragraphs: [
                    "Мы обрабатываем данные на основании вашего согласия, которое вы даёте, отмечая галочку в форме заявки, а также для заключения и исполнения договора на оказание услуг. Обработка ведётся в соответствии с Федеральным декретом-законом ОАЭ № 45 от 2021 года «О защите персональных данных».",
                ],
            },
            {
                title: "5. Файлы cookie и аналитика",
                paragraphs: [
                    "Сайт использует Google Tag Manager и Google Ads. Эти сервисы сохраняют файлы cookie и передают в Google обезличенные данные о посещении и об отправке заявки (конверсии). Подробнее — в политике конфиденциальности Google: https://policies.google.com/privacy.",
                    "Вы можете отключить или удалить cookie в настройках браузера. Сайт при этом продолжит работать.",
                ],
            },
            {
                title: "6. Кому мы передаём данные",
                list: [
                    "Заявка с сайта автоматически передаётся нашим сотрудникам через мессенджер Telegram (Telegram Messenger Inc.).",
                    "Google LLC — для аналитики и рекламы (см. раздел 5).",
                    "Хостинг-провайдеру, на серверах которого размещён сайт.",
                    "Государственным органам — только если этого требует закон.",
                ],
                paragraphs: [
                    "Некоторые из этих сервисов могут хранить данные за пределами ОАЭ. Мы передаём им только тот объём данных, который нужен для указанных целей.",
                ],
            },
            {
                title: "7. Сколько мы храним данные",
                paragraphs: [
                    "Данные заявки хранятся столько, сколько нужно для обработки заявки и выполнения работ, но не дольше 3 лет с момента последнего обращения, если закон не требует более долгого хранения. После этого данные удаляются.",
                ],
            },
            {
                title: "8. Ваши права",
                list: [
                    "Узнать, какие ваши данные мы храним, и получить их копию.",
                    "Исправить неточные данные.",
                    "Потребовать удалить данные.",
                    "Ограничить обработку или возразить против неё.",
                    "Отозвать согласие в любой момент. Отзыв не влияет на законность обработки до момента отзыва.",
                    "Подать жалобу в Управление по данным ОАЭ (UAE Data Office).",
                ],
                paragraphs: [`Чтобы воспользоваться этими правами, напишите на ${CONTACT_EMAIL}. Мы ответим в течение 30 дней.`],
            },
            {
                title: "9. Защита данных",
                paragraphs: [
                    "Сайт работает по защищённому протоколу HTTPS. Доступ к заявкам есть только у сотрудников, которым он нужен для работы.",
                ],
            },
            {
                title: "10. Изменения Политики",
                paragraphs: [
                    "Мы можем обновлять эту Политику. Актуальная версия всегда доступна на этой странице, дата последнего обновления указана вверху.",
                ],
            },
        ],
    },
    en: {
        title: "Privacy Policy",
        updated: "Last updated: 30 September 2026",
        intro:
            "This Privacy Policy explains what personal data MODUHAUS (\"we\") collects from visitors of this website, how we use it and how we protect it. By submitting a request and ticking the consent box, you confirm that you have read and agree to this Policy.",
        sections: [
            {
                title: "1. Who processes your data",
                paragraphs: [
                    `The data controller is MODUHAUS, Dubai, UAE. For any question about your data, email ${CONTACT_EMAIL} or call ${CONTACT_PHONE}.`,
                ],
            },
            {
                title: "2. What data we collect",
                list: [
                    "The name you enter in the request form.",
                    "Your phone number.",
                    "The description of your task or project that you enter in the \"Details\" field.",
                    "Technical data: IP address, browser and device type, pages you visit. Cookies and analytics services collect this data (see section 5).",
                ],
                paragraphs: [
                    "We do not ask for or collect payment details, passport data or other special categories of personal data through the website.",
                ],
            },
            {
                title: "3. Why we use your data",
                list: [
                    "To contact you about your request, clarify details and estimate the cost of work.",
                    "To carry out the ordered work and agree on the technician's visit.",
                    "To measure advertising performance and improve the website.",
                ],
                paragraphs: ["We do not sell your personal data and do not send you marketing messages without your separate consent."],
            },
            {
                title: "4. Legal basis",
                paragraphs: [
                    "We process your data based on the consent you give by ticking the box in the request form, and to enter into and perform a service contract with you. Processing complies with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.",
                ],
            },
            {
                title: "5. Cookies and analytics",
                paragraphs: [
                    "The website uses Google Tag Manager and Google Ads. These services store cookies and send Google anonymised data about your visit and about request submissions (conversions). See Google's privacy policy for details: https://policies.google.com/privacy.",
                    "You can disable or delete cookies in your browser settings. The website will keep working.",
                ],
            },
            {
                title: "6. Who we share data with",
                list: [
                    "Requests from the website are delivered to our staff automatically through Telegram (Telegram Messenger Inc.).",
                    "Google LLC, for analytics and advertising (see section 5).",
                    "The hosting provider whose servers host the website.",
                    "Public authorities, only when the law requires it.",
                ],
                paragraphs: [
                    "Some of these services may store data outside the UAE. We share with them only the data needed for the purposes above.",
                ],
            },
            {
                title: "7. How long we keep data",
                paragraphs: [
                    "We keep request data as long as needed to handle your request and carry out the work, but no longer than 3 years after your last contact with us, unless the law requires longer storage. After that, we delete the data.",
                ],
            },
            {
                title: "8. Your rights",
                list: [
                    "Find out what data we hold about you and get a copy.",
                    "Correct inaccurate data.",
                    "Request deletion of your data.",
                    "Restrict or object to processing.",
                    "Withdraw your consent at any time. Withdrawal does not affect processing carried out before it.",
                    "File a complaint with the UAE Data Office.",
                ],
                paragraphs: [`To use these rights, email ${CONTACT_EMAIL}. We reply within 30 days.`],
            },
            {
                title: "9. Data security",
                paragraphs: [
                    "The website uses HTTPS. Only staff who need requests for their work can access them.",
                ],
            },
            {
                title: "10. Changes to this Policy",
                paragraphs: [
                    "We may update this Policy. The current version is always available on this page, with the last update date shown at the top.",
                ],
            },
        ],
    },
};
