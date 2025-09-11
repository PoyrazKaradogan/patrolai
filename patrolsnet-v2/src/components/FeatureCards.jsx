import React, { useState } from "react";
import styles from "../styles/FeatureCards.module.css";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  tr: {
    arrow: "➤",
    features: [
      { icon: "/images/icon-mobile.png", title: "Mobil Uyumluluk", description: "Android ve iOS cihazlarla tam uyumlu. Anlık bildirim, konum takibi ve sahada kesintisiz iletişim sağlar." },
      { icon: "/images/icon-interface.png", title: "Gelişmiş Arayüz", description: "Modern, hızlı ve kullanıcı dostu. Tüm ekran boyutlarında mükemmel görünüm sunar." },
      { icon: "/images/icon-cloud.png", title: "Bulut Arşivi", description: "Veriler güvenli bulut sisteminde saklanır. Geçmişe dönük analiz ve erişim kolaylığı sağlar." },
      { icon: "/images/icon-gps.png", title: "Gerçek Zamanlı Takip", description: "GPS ile araç ve personel konumları anlık izlenebilir. Harita entegrasyonu ile rota analizi yapılır." },
      { icon: "/images/icon-ai.png", title: "Yapay Zeka Analitik", description: "Veri analizi, risk tahmini ve görev optimizasyonu için AI destekli sistemler içerir." },
      { icon: "/images/icon-security.png", title: "Güvenlik Entegrasyonu", description: "NFC, QR ve biyometrik doğrulama gibi özelliklerle maksimum güvenlik sağlar." },
    ],
  },
  en: {
    arrow: "➤",
    features: [
      { icon: "/images/icon-mobile.png", title: "Mobile Compatibility", description: "Fully compatible with Android and iOS devices. Provides instant notifications, location tracking, and uninterrupted communication in the field." },
      { icon: "/images/icon-interface.png", title: "Advanced Interface", description: "Modern, fast, and user-friendly. Offers a perfect look on all screen sizes." },
      { icon: "/images/icon-cloud.png", title: "Cloud Archive", description: "Data is stored in a secure cloud system. Provides easy access and retrospective analysis." },
      { icon: "/images/icon-gps.png", title: "Real-time Tracking", description: "GPS integration allows for real-time tracking of vehicle and personnel locations. Route analysis is done with map integration." },
      { icon: "/images/icon-ai.png", title: "AI Analytics", description: "Includes AI-supported systems for data analysis, risk prediction, and task optimization." },
      { icon: "/images/icon-security.png", title: "Security Integration", description: "Provides maximum security with features like NFC, QR, and biometric authentication." },
    ],
  },
  // Diğer diller buraya eklenecek
};

export default function FeatureCards() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { lang } = useLanguage();
  const t = translations[lang] || translations["tr"];

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {t.features.map((feature, index) => (
        <div
          key={index}
          className={`${styles.card} ${flippedIndex === index ? styles.flipped : ""}`}
          onClick={() => handleFlip(index)}
        >
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <div className={styles.iconWrapper}>
                <img src={feature.icon} alt={feature.title} className={styles.icon} />
                <span className={styles.arrow}>{t.arrow}</span>
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
            </div>
            <div className={styles.cardBack}>
              <p className={styles.description}>{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}