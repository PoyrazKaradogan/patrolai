import React from "react";
import styles from "../styles/Footer.module.css";
// useLanguage context'inizi buraya aktarabilirsiniz

export default function Footer() {
  const translationsToDisplay = {
    company: "SSC USA Software LLC",
    address: "27001 Waterside Ct, Valencia, California, ABD",
    phone: "📞 +1 661 360 2059",
    email: "📧 info@patrolsnet.com",
    website: "🌐 www.patrolsnet.com",
    motto: "Geleceği kodluyor, teknolojiyi şekillendiriyoruz...",
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <p className={styles.motto}>{translationsToDisplay.motto}</p>
          <p>{translationsToDisplay.address}</p>
          <p>{translationsToDisplay.phone}</p>
          <p>{translationsToDisplay.email}</p>
          <a
            href={`http://${translationsToDisplay.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
            {translationsToDisplay.website}
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        © {currentYear} {translationsToDisplay.company}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}