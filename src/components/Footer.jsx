import React from "react";
import styles from "../styles/Footer.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const translations = {
    tr: {
      company: "SSC USA Software LLC",
      address: "27001 Waterside Ct, Valencia, California, ABD",
      phone: "📞 +1 661 360 2059",
      email: "📧 info@patrolsnet.com",
      website: "🌐 www.patrolsnet.com",
      motto: "Geleceği kodluyor, teknolojiyi şekillendiriyoruz",
    },
    en: {
      company: "SSC USA Software LLC",
      address: "27001 Waterside Ct, Valencia, California, USA",
      phone: "📞 +1 661 360 2059",
      email: "📧 info@patrolsnet.com",
      website: "🌐 www.patrolsnet.com",
      motto: "Coding the future, shaping technology",
    },
    de: {
      company: "SSC USA Software LLC",
      address: "27001 Waterside Ct, Valencia, Kalifornien, USA",
      phone: "📞 +1 661 360 2059",
      email: "📧 info@patrolsnet.com",
      website: "🌐 www.patrolsnet.com",
      motto: "Wir codieren die Zukunft und gestalten Technologie",
    },
    fr: {
      company: "SSC USA Software LLC",
      address: "27001 Waterside Ct, Valencia, Californie, États-Unis",
      phone: "📞 +1 661 360 2059",
      email: "📧 info@patrolsnet.com",
      website: "🌐 www.patrolsnet.com",
      motto: "Nous codons le futur, nous façonnons la technologie",
    },
    ru: {
      company: "SSC USA Software LLC",
      address: "27001 Waterside Ct, Валенсия, Калифорния, США",
      phone: "📞 +1 661 360 2059",
      email: "📧 info@patrolsnet.com",
      website: "🌐 www.patrolsnet.com",
      motto: "Мы кодируем будущее, формируем технологии",
    },
    es: {
      company: "SSC USA Software LLC",
      address: "27001 Waterside Ct, Valencia, California, EE.UU.",
      phone: "📞 +1 661 360 2059",
      email: "📧 info@patrolsnet.com",
      website: "🌐 www.patrolsnet.com",
      motto: "Codificamos el futuro, damos forma a la tecnología",
    },
  };

  const t = translations[lang] || translations["tr"];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <p className={styles.motto}>{t.motto}</p>
          <p>{t.address}</p>
          <p>{t.phone}</p>
          <p>{t.email}</p>
          
          <a
            href={`http://${t.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
            {t.website}
          </a>
           <br />
<a
  href="/brosur.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.pdfLink}
>
  📄 PDF 
</a>
        </div>
      </div>
      <div className={styles.copy}>
        © {currentYear} {t.company}.
      </div>
    </footer>
  );
}