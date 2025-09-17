import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/ResponsiveNavbar.module.css";

export default function ResponsiveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  const translations = {
    tr: {
      anasayfa: "Anasayfa",
      kurumsal: "Kurumsal",
      iletisim: "İletişim",
      girisYap: "Giriş Yap",
    },
    en: {
      anasayfa: "Home",
      kurumsal: "Corporate",
      iletisim: "Contact",
      girisYap: "Login",
    },
    de: {
      anasayfa: "Startseite",
      kurumsal: "Unternehmen",
      iletisim: "Kontakt",
      girisYap: "Anmelden",
    },
    fr: {
      anasayfa: "Accueil",
      kurumsal: "Entreprise",
      iletisim: "Contact",
      girisYap: "Connexion",
    },
    ru: {
      anasayfa: "Главная",
      kurumsal: "Корпорация",
      iletisim: "Контакт",
      girisYap: "Войти",
    },
    es: {
      anasayfa: "Inicio",
      kurumsal: "Corporativo",
      iletisim: "Contacto",
      girisYap: "Iniciar sesión",
    },
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
        <Link
  to="/"
  onClick={() => setMenuOpen(false)}
  className={`${styles.link} ${location.pathname === "/" ? styles.active : ""}`}
>
  {t.anasayfa}
</Link>

<Link
  to="/kurumsal"
  onClick={() => setMenuOpen(false)}
  className={`${styles.link} ${location.pathname === "/kurumsal" ? styles.active : ""}`}
>
  {t.kurumsal}
</Link>

<Link
  to="/iletisim"
  onClick={() => setMenuOpen(false)}
  className={`${styles.link} ${location.pathname === "/iletisim" ? styles.active : ""}`}
>
  {t.iletisim}
</Link>

<a
  href="https://mng.patrolsnet.com/Login.aspx"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
  className={`${styles.link} ${styles.login}`}
>
  {t.girisYap}
</a>

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