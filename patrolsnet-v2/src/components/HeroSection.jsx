import React, { useEffect, useState } from "react";
import styles from "../styles/HeroSection.module.css";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: { slogan: "Digital Control, Powerful Management" },
  de: { slogan: "Digitale Kontrolle, starke Verwaltung" },
  tr: { slogan: "Dijital Kontrol, Güçlü Yönetim" },
  es: { slogan: "Control Digital, Gestión Poderosa" },
  ru: { slogan: "Цифровой контроль, мощное управление" },
  fr: { slogan: "Contrôle numérique, gestion puissante" },
};

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations["tr"];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 5000); // her 5 saniyede bir tetiklenir

    return () => clearInterval(interval); // component unmount olduğunda temizle
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={`${styles.title} ${animate ? styles.animate : ""}`}>
            {t.slogan}
          </h1>
        </div>
      </div>
    </section>
  );
}