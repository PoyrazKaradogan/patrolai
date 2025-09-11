import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/ResponsiveNavbar.module.css";

export default function ResponsiveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const translations = {
    tr: { kurumsal: "Kurumsal", iletisim: "İletişim", girisYap: "Giriş Yap" },
    en: { kurumsal: "Corporate", iletisim: "Contact", girisYap: "Login" },
    // diğer diller...
  };

  const t = translations[lang] || translations["tr"];

  const languages = [
    { code: "tr", label: "Türkçe" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "es", label: "Español" },
    { code: "ru", label: "Русский" },
    { code: "fr", label: "Français" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          <img src="/images/logo.png" alt="PatrolsNet Icon" className={styles.logoIcon} />
          <span className={styles.logoText}>PatrolsNet</span>
        </Link>

        <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>☰</div>

        <nav className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
          <Link to="/kurumsal" className={styles.link}>{t.kurumsal}</Link>
          <Link to="/iletisim" className={styles.link}>{t.iletisim}</Link>
          <Link to="/giris" className={`${styles.link} ${styles.login}`}>{t.girisYap}</Link>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className={styles.languageSelect}
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
}