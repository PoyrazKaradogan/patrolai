import React, { useEffect, useState } from "react";
import styles from "../styles/HeroSection.module.css";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const translations = {
  tr: {
    slogan: "Dijital Kontrol, Güçlü Yönetim",
    subtitle:
      "Her noktada kontrol, her an görünürlük.<br />Mobil ve web tabanlı görev yönetimiyle sahada tam hakimiyet.",
    video: "Tanıtım Videosunu İzle",
    demo: "Demo Talep Et",
  },
  en: {
    slogan: "Digital Control, Powerful Management",
    subtitle:
      "Full control at every point, full visibility at every moment.<br />Mobile and web-based task management for total field dominance.",
    video: "Watch Promo Video",
    demo: "Request Demo",
  },
  de: {
    slogan: "Digitale Kontrolle, starke Verwaltung",
    subtitle:
      "Volle Kontrolle an jedem Punkt, volle Sichtbarkeit jederzeit.<br />Mobile und webbasierte Aufgabenverwaltung für volle Feldhoheit.",
    video: "Promo-Video ansehen",
    demo: "Demo anfordern",
  },
  fr: {
    slogan: "Contrôle numérique, gestion puissante",
    subtitle:
      "Contrôle total à chaque point, visibilité complète à tout moment.<br />Gestion des tâches mobile et web pour une maîtrise totale du terrain.",
    video: "Regarder la vidéo promo",
    demo: "Demander une démo",
  },
  ru: {
    slogan: "Цифровой контроль, мощное управление",
    subtitle:
      "Полный контроль в каждой точке, полная видимость в любой момент.<br />Мобильное и веб-управление задачами для полного контроля на местах.",
    video: "Смотреть промо-видео",
    demo: "Запросить демонстрацию",
  },
  es: {
    slogan: "Control Digital, Gestión Poderosa",
    subtitle:
      "Control total en cada punto, visibilidad completa en todo momento.<br />Gestión de tareas móvil y web para dominio total del terreno.",
    video: "Ver video promocional",
    demo: "Solicitar demo",
  },
};

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations["tr"];
  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDemoClick = () => {
    navigate("/iletisim");
  };

  const handleVideoClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className={styles.hero}>
        <img
          src="/images/hero.png"
          alt="Hero Görseli"
          className={styles.heroImage}
        />
        <div className={styles.overlay}>
          <div className={styles.textBlock}>
            <h1 className={`${styles.title} ${animate ? styles.animate : ""}`}>
              {t.slogan}
            </h1>
            <p
              className={styles.subtitle}
              dangerouslySetInnerHTML={{ __html: t.subtitle }}
            />
            <div className={styles.actions}>
              <button onClick={handleVideoClick} className={styles.primaryBtn}>
                {t.video}
              </button>
              <button onClick={handleDemoClick} className={styles.secondaryBtn}>
                {t.demo}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Video */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={handleCloseModal}>×</button>
            <video
              controls
              autoPlay
              className={styles.modalVideo}
              poster="/images/video-poster.jpg"
            >
              <source src="/images/video.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>
        </div>
      )}
    </>
  );
}