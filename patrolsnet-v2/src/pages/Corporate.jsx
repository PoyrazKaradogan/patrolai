import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import styles from "../styles/Corporate.module.css";

export default function Corporate() {
  useEffect(() => {
    document.title = "PatrolsNet | Kurumsal";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className={styles.hero}>
        <h1 className={styles.title}>Kurumsal Vizyonumuz</h1>
        <p className={styles.subtitle}>
          Dijital dönüşümle güvenlikte tam görünürlük, görevde tam denetim.
        </p>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Vizyonumuz</h2>
          <p className={styles.cardText}>
            Dijital dönüşümün gücünü kullanarak, güvenlik ve görev yönetiminde tam görünürlük ve denetlenebilirlik sağlamak.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Misyonumuz</h2>
          <p className={styles.cardText}>
            Sahada görevli personelin, merkezde yöneticilerin tüm süreçleri anlık takip edebilmesini sağlamak. Sürekli iyileştirme ve veriyle yönetim.
          </p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2 className={styles.sectionHeading}>Değerlerimiz</h2>
        <ul className={styles.valuesList}>
          <li>🔐 Güvenlikte dijitalleşme</li>
          <li>📊 Şeffaf ve denetlenebilir süreçler</li>
          <li>📍 Konumlu ve görsel arşivleme</li>
          <li>📱 Mobil ve web uyumlu arayüz</li>
          <li>♻️ Sürekli iyileştirme ve DÖF yönetimi</li>
          <li>🏢 Kurumsal prestij ve operasyonel verimlilik</li>
        </ul>
      </section>

      <section className={styles.ctaSection}>
        <a href="/iletisim" className={styles.ctaButton}>Bizimle İletişime Geçin</a>
      </section>
    </Layout>
  );
}