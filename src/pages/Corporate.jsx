import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import styles from "../styles/Corporate.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Corporate() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = "PatrolsNet | Corporate";
    window.scrollTo(0, 0);
  }, []);

const translations = {
  tr: {
    title: "Kurumsal Vizyonumuz",
    subtitle: "Dijital dönüşümle güvenlikte tam görünürlük, görevde tam denetim.",
    visionTitle: "Vizyonumuz",
    visionText: "Dijital dönüşümün gücünü kullanarak, güvenlik ve görev yönetiminde tam görünürlük ve denetlenebilirlik sağlamak.",
    missionTitle: "Misyonumuz",
    missionText: "Sahada görevli personelin, merkezde yöneticilerin tüm süreçleri anlık takip edebilmesini sağlamak. Sürekli iyileştirme ve veriyle yönetim.",
    valuesTitle: "Değerlerimiz",
    values: [
      "🔐 Güvenlikte dijitalleşme",
      "📊 Şeffaf ve denetlenebilir süreçler",
      "📍 Konumlu ve görsel arşivleme",
      "📱 Mobil ve web uyumlu arayüz",
      "♻️ Sürekli iyileştirme ve DÖF yönetimi",
      "🏢 Kurumsal prestij ve operasyonel verimlilik",
    ],
    contact: "Bizimle İletişime Geçin",
  },
  en: {
    title: "Our Corporate Vision",
    subtitle: "Full visibility in security, full control in operations through digital transformation.",
    visionTitle: "Our Vision",
    visionText: "Harnessing the power of digital transformation to ensure full visibility and auditability in security and task management.",
    missionTitle: "Our Mission",
    missionText: "Empowering field staff and central managers to monitor all processes in real time. Continuous improvement and data-driven management.",
    valuesTitle: "Our Values",
    values: [
      "🔐 Digitalization in security",
      "📊 Transparent and auditable processes",
      "📍 Location-based and visual archiving",
      "📱 Mobile and web-compatible interface",
      "♻️ Continuous improvement and CAPA management",
      "🏢 Corporate prestige and operational efficiency",
    ],
    contact: "Contact Us",
  },
  de: {
    title: "Unsere Unternehmensvision",
    subtitle: "Digitale Transformation für volle Sichtbarkeit in der Sicherheit und volle Kontrolle im Einsatz.",
    visionTitle: "Unsere Vision",
    visionText: "Die Kraft der digitalen Transformation nutzen, um volle Transparenz und Überprüfbarkeit im Sicherheits- und Aufgabenmanagement zu gewährleisten.",
    missionTitle: "Unsere Mission",
    missionText: "Einsatzkräfte und zentrale Führungskräfte befähigen, alle Prozesse in Echtzeit zu überwachen. Kontinuierliche Verbesserung und datengesteuerte Steuerung.",
    valuesTitle: "Unsere Werte",
    values: [
      "🔐 Digitalisierung in der Sicherheit",
      "📊 Transparente und überprüfbare Prozesse",
      "📍 Standortbezogene und visuelle Archivierung",
      "📱 Mobil- und Web-kompatible Oberfläche",
      "♻️ Kontinuierliche Verbesserung und CAPA-Management",
      "🏢 Unternehmensprestige und operative Effizienz",
    ],
    contact: "Kontaktieren Sie uns",
  },
  fr: {
    title: "Notre vision d'entreprise",
    subtitle: "Transformation numérique pour une visibilité totale en sécurité et un contrôle complet des opérations.",
    visionTitle: "Notre vision",
    visionText: "Exploiter la puissance de la transformation numérique pour garantir une transparence et une auditabilité totales dans la gestion de la sécurité et des tâches.",
    missionTitle: "Notre mission",
    missionText: "Permettre au personnel sur le terrain et aux responsables centraux de suivre tous les processus en temps réel. Amélioration continue et gestion basée sur les données.",
    valuesTitle: "Nos valeurs",
    values: [
      "🔐 Numérisation de la sécurité",
      "📊 Processus transparents et auditables",
      "📍 Archivage visuel et géolocalisé",
      "📱 Interface compatible mobile et web",
      "♻️ Amélioration continue et gestion CAPA",
      "🏢 Prestige institutionnel et efficacité opérationnelle",
    ],
    contact: "Nous contacter",
  },
  ru: {
    title: "Наша корпоративная концепция",
    subtitle: "Цифровая трансформация для полной прозрачности в безопасности и полного контроля в операциях.",
    visionTitle: "Наша цель",
    visionText: "Использование цифровых технологий для обеспечения полной прозрачности и возможности аудита в управлении безопасностью и задачами.",
    missionTitle: "Наша миссия",
    missionText: "Обеспечить сотрудникам на местах и руководителям центра возможность отслеживать все процессы в реальном времени. Постоянное совершенствование и управление на основе данных.",
    valuesTitle: "Наши ценности",
    values: [
      "🔐 Цифровизация безопасности",
      "📊 Прозрачные и проверяемые процессы",
      "📍 Геолокация и визуальное архивирование",
      "📱 Совместимость с мобильными и веб-интерфейсами",
      "♻️ Постоянное улучшение и управление CAPA",
      "🏢 Корпоративный престиж и операционная эффективность",
    ],
    contact: "Связаться с нами",
  },
  es: {
    title: "Nuestra visión corporativa",
    subtitle: "Transformación digital para visibilidad total en seguridad y control completo en operaciones.",
    visionTitle: "Nuestra visión",
    visionText: "Aprovechar el poder de la transformación digital para garantizar transparencia y auditabilidad en la gestión de seguridad y tareas.",
    missionTitle: "Nuestra misión",
    missionText: "Permitir al personal de campo y a los gerentes centrales monitorear todos los procesos en tiempo real. Mejora continua y gestión basada en datos.",
    valuesTitle: "Nuestros valores",
    values: [
      "🔐 Digitalización en seguridad",
      "📊 Procesos transparentes y auditables",
      "📍 Archivado visual y con geolocalización",
      "📱 Interfaz compatible con móvil y web",
      "♻️ Mejora continua y gestión CAPA",
      "🏢 Prestigio corporativo y eficiencia operativa",
    ],
    contact: "Contáctanos",
  },
};
  const t = translations[lang] || translations["tr"];

  return (
    <Layout>
      {/* Hero görsel alanı */}
      <section className={styles.hero}>
        <img src="/images/corporate-hero.png" alt="" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className={styles.gridSection}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>{t.visionTitle}</h2>
          <p className={styles.cardText}>{t.visionText}</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>{t.missionTitle}</h2>
          <p className={styles.cardText}>{t.missionText}</p>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionHeading}>{t.valuesTitle}</h2>
        <ul className={styles.valuesList}>
          {t.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <a href="/iletisim" className={styles.ctaButton}>{t.contact}</a>
      </section>
    </Layout>
  );
}