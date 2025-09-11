import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/ContactCard.module.css";


const translations = {
  tr: {
    title: "İletişim Bilgileri",
    address: "27001 Waterside Ct, Valencia, California, ABD",
    phone: "+1 661 360 2059",
    email: "info@patrolsnet.com",
    website: "www.patrolsnet.com",
  },
  en: {
    title: "Contact Information",
    address: "27001 Waterside Ct, Valencia, California, USA",
    phone: "+1 661 360 2059",
    email: "info@patrolsnet.com",
    website: "www.patrolsnet.com",
  },
  de: {
    title: "Kontaktinformationen",
    address: "27001 Waterside Ct, Valencia, Kalifornien, USA",
    phone: "+1 661 360 2059",
    email: "info@patrolsnet.com",
    website: "www.patrolsnet.com",
  },
  fr: {
    title: "Informations de contact",
    address: "27001 Waterside Ct, Valencia, Californie, États-Unis",
    phone: "+1 661 360 2059",
    email: "info@patrolsnet.com",
    website: "www.patrolsnet.com",
  },
  es: {
    title: "Información de contacto",
    address: "27001 Waterside Ct, Valencia, California, EE.UU.",
    phone: "+1 661 360 2059",
    email: "info@patrolsnet.com",
    website: "www.patrolsnet.com",
  },
  ru: {
    title: "Контактная информация",
    address: "27001 Waterside Ct, Валенсия, Калифорния, США",
    phone: "+1 661 360 2059",
    email: "info@patrolsnet.com",
    website: "www.patrolsnet.com",
  },
};

export default function ContactCard() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations["tr"];

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{t.title}</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.icon}>📍</span> {t.address}
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>📞</span> {t.phone}
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>📧</span>{" "}
          <a href={`mailto:${t.email}`} className={styles.link}>
            {t.email}
          </a>
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>🌐</span>{" "}
          <a href={`http://${t.website}`} className={styles.link}>
            {t.website}
          </a>
        </li>
      </ul>
    </div>
  );
}