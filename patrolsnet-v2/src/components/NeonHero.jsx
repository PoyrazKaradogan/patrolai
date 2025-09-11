

import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/NeonHero.module.css";
import { useLanguage } from "../context/LanguageContext";
const translations = {
    tr: {
      button: "Özellikler Nelerdir?",
      hint: "Detay için tıkla",
      features: [
        { title: "Mobil Uyumluluk", description: "Android ve iOS cihazlarla tam uyumlu. Anlık bildirim, konum takibi ve sahada kesintisiz iletişim sağlar.", color: "#40C4FF", icon: "📱" },
        { title: "Gelişmiş Arayüz", description: "Modern, hızlı ve kullanıcı dostu. Tüm ekran boyutlarında mükemmel görünüm sunar.", color: "#40C4FF", icon: "🧩" },
        { title: "Bulut Arşivi", description: "Veriler güvenli bulut sisteminde saklanır. Geçmişe dönük analiz ve erişim kolaylığı sağlar.", color: "#40C4FF", icon: "☁️" },
        { title: "Gerçek Zamanlı Takip", description: "GPS ile araç ve personel konumları anlık izlenebilir. Harita entegrasyonu ile rota analizi yapılır.", color: "#40C4FF", icon: "📍" },
        { title: "Yapay Zeka Analitik", description: "Veri analizi, risk tahmini ve görev optimizasyonu için AI destekli sistemler içerir.", color: "#40C4FF", icon: "🧠" },
        { title: "Güvenlik Entegrasyonu", description: "NFC, QR ve biyometrik doğrulama gibi özelliklerle maksimum güvenlik sağlar.", color: "#40C4FF ", icon: "🔒" },
      ],
      closeButton: "Kapat",
    },
    en: {
        button: "What Are The Features?",
        hint: "Click for details",
        features: [
          { title: "Mobile Compatibility", description: "Fully compatible with Android and iOS devices. Provides instant notifications, location tracking, and uninterrupted communication in the field.", color: "#40C4FF", icon: "📱" },
          { title: "Advanced Interface", description: "Modern, fast, and user-friendly. Offers a perfect look on all screen sizes.", color: "#40C4FF", icon: "🧩" },
          { title: "Cloud Archive", description: "Data is stored in a secure cloud system. Provides easy access and retrospective analysis.", color: "#40C4FF", icon: "☁️" },
          { title: "Real-time Tracking", description: "GPS integration allows for real-time tracking of vehicle and personnel locations. Route analysis is done with map integration.", color: "#40C4FF", icon: "📍" },
          { title: "AI Analytics", description: "Includes AI-supported systems for data analysis, risk prediction, and task optimization.", color: "#40C4FF", icon: "🧠" },
          { title: "Security Integration", description: "Provides maximum security with features like NFC, QR, and biometric authentication.", color: "#40C4FF", icon: "🔒" },
        ],
        closeButton: "Close",
      },
    de: {
        button: "Was sind die Funktionen?",
        hint: "Klicken Sie für Details",
        features: [
          { title: "Mobile Kompatibilität", description: "Vollständig kompatibel mit Android- und iOS-Geräten. Bietet sofortige Benachrichtigungen, Standortverfolgung und unterbrechungsfreie Kommunikation im Feld.", color: "#40C4FF", icon: "📱" },
          { title: "Fortschrittliche Benutzeroberfläche", description: "Modern, schnell und benutzerfreundlich. Bietet ein perfektes Aussehen auf allen Bildschirmgrößen.", color: "#40C4FF", icon: "🧩" },
          { title: "Cloud-Archiv", description: "Daten werden in einem sicheren Cloud-System gespeichert. Bietet einfachen Zugriff und retrospektive Analyse.", color: "#40C4FF", icon: "☁️" },
          { title: "Echtzeit-Verfolgung", description: "GPS-Integration ermöglicht die Echtzeit-Verfolgung von Fahrzeug- und Personalstandorten. Routenanalyse wird mit Kartenintegration durchgeführt.", color: "#40C4FF", icon: "📍" },
          { title: "KI-Analytik", description: "Enthält KI-gestützte Systeme für Datenanalyse, Risikovorhersage und Aufgabenoptimierung.", color: "#40C4FF", icon: "🧠" },
          { title: "Sicherheitsintegration", description: "Bietet maximale Sicherheit mit Funktionen wie NFC, QR und biometrischer Authentifizierung.", color: "#40C4FF", icon: "🔒" },
        ],
        closeButton: "Schließen",
      },
    es: {
        button: "¿Cuáles son las características?",
        hint: "Haga clic para detalles",
        features: [
          { title: "Compatibilidad Móvil", description: "Totalmente compatible con dispositivos Android e iOS. Proporciona notificaciones instantáneas, seguimiento de ubicación y comunicación ininterrumpida en el campo.", color: "#40C4FF", icon: "📱" },
          { title: "Interfaz Avanzada", description: "Moderna, rápida y fácil de usar. Ofrece una apariencia perfecta en todos los tamaños de pantalla.", color: "#40C4FF", icon: "🧩" },
          { title: "Archivo en la Nube", description: "Los datos se almacenan en un sistema de nube seguro. Proporciona fácil acceso y análisis retrospectivo.", color: "#40C4FF", icon: "☁️" },
          { title: "Seguimiento en Tiempo Real", description: "La integración de GPS permite el seguimiento en tiempo real de la ubicación de vehículos y personal. El análisis de rutas se realiza con la integración de mapas.", color: "#40C4FF", icon: "📍" },
          { title: "Análisis de IA", description: "Incluye sistemas compatibles con IA para análisis de datos, predicción de riesgos y optimización de tareas.", color: "#40C4FF", icon: "🧠" },
          { title: "Integración de Seguridad", description: "Proporciona máxima seguridad con funciones como NFC, QR y autenticación biométrica.", color: "#40C4FF", icon: "🔒" },
        ],
        closeButton: "Cerrar",
      },
    ru: {
        button: "Какие функции?",
        hint: "Нажмите для деталей",
        features: [
          { title: "Мобильная Совместимость", description: "Полная совместимость с устройствами Android и iOS. Обеспечивает мгновенные уведомления, отслеживание местоположения и бесперебойную связь в полевых условиях.", color: "#40C4FF", icon: "📱" },
          { title: "Продвинутый Интерфейс", description: "Современный, быстрый и удобный для пользователя. Предлагает идеальный внешний вид на всех размерах экрана.", color: "#40C4FF", icon: "🧩" },
          { title: "Облачный Архив", description: "Данные хранятся в безопасной облачной системе. Обеспечивает легкий доступ и ретроспективный анализ.", color: "#40C4FF", icon: "☁️" },
          { title: "Отслеживание в Реальном Времени", description: "Интеграция GPS позволяет отслеживать местоположение транспортных средств и персонала в реальном времени. Анализ маршрутов осуществляется с помощью интеграции карт.", color: "#40C4FF", icon: "📍" },
          { title: "Аналитика ИИ", description: "Включает системы с поддержкой ИИ для анализа данных, прогнозирования рисков и оптимизации задач.", color: "#40C4FF", icon: "🧠" },
          { title: "Интеграция Безопасности", description: "Обеспечивает максимальную безопасность с помощью таких функций, как NFC, QR и биометрическая аутентификация.", color: "#40C4FF", icon: "🔒" },
        ],
        closeButton: "Закрыть",
      },
      fr: {
        button: "Quelles sont les fonctionnalités ?",
        hint: "Cliquez pour les détails",
        features: [
            { title: "Compatibilité Mobile", description: "Entièrement compatible avec les appareils Android et iOS. Fournit des notifications instantanées, un suivi de localisation et une communication ininterrompue sur le terrain.", color: "#40C4FF", icon: "📱" },
            { title: "Interface Avancée", description: "Moderne, rapide et conviviale. Offre une apparence parfaite sur toutes les tailles d'écran.", color: "#40C4FF", icon: "🧩" },
            { title: "Archive Cloud", description: "Les données sont stockées dans un système cloud sécurisé. Permet un accès facile et une analyse rétrospective.", color: "#40C4FF", icon: "☁️" },
            { title: "Suivi en Temps Réel", description: "L'intégration GPS permet le suivi en temps réel de l'emplacement des véhicules et du personnel. L'analyse des itinéraires est effectuée avec l'intégration de la carte.", color: "#40C4FF", icon: "📍" },
            { title: "Analyse IA", description: "Comprend des systèmes supportés par l'IA pour l'analyse des données, la prédiction des risques et l'optimisation des tâches.", color: "#40C4FF", icon: "🧠" },
            { title: "Intégration de Sécurité", description: "Offre une sécurité maximale avec des fonctionnalités telles que NFC, QR et l'authentification biométrique.", color: "#40C4FF", icon: "🔒" },
        ],
        closeButton: "Fermer",
      },
  };

export default function NeonHero() {
  const [showCards, setShowCards] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsRef = useRef(null);
  const { lang } = useLanguage();
  const t = translations[lang] || translations["tr"];

  const handleShowCards = () => {
    setShowCards(!showCards);
    setActiveIndex(null);
  };

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (showCards && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(`.${styles.card}`);
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add(styles.show);
        }, i * 150);
      });
    }
  }, [showCards]);

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={`${styles.imageBlock} ${showCards ? styles.shrinked : ""}`}>
          <img
            src="/images/telefon.png"
            alt="PatrolsNet mobil uygulama"
            className={styles.image}
          />
          <button onClick={handleShowCards} className={styles.button}>
            {showCards ? t.closeButton : (
              <>
                {t.button} <span className={styles.arrow}>→</span>
              </>
            )}
          </button>
        </div>

        {showCards && (
          <div ref={cardsRef} className={`${styles.cardGrid} ${styles.active}`}>
            {t.features.map((feature, index) => (
           <div
  key={index}
  className={`${styles.card} ${activeIndex === index ? styles.open : styles.closed}`}
  style={{ boxShadow: `0 0 12px ${feature.color}` }}
  onClick={() => toggleCard(index)}
>
  <div className={styles.cardTitle}>{feature.title}</div>

  {activeIndex !== index && (
    <div className={styles.cardPrompt}>Detay için tıkla</div>
  )}

  {activeIndex === index && (
    <>
      <div className={styles.cardIcon}>{feature.icon}</div>
      <div className={styles.cardDescription}>{feature.description}</div>
      <div className={styles.cardHint}>{t.hint}</div>
    </>
  )}
</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}