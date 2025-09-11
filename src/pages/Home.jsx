import React, { useRef } from "react";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCards";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const featuresRef = useRef(null);

  const handleScrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ResponsiveNavbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Dijital Devriyeleriniz İçin Akıllı Çözümler</h1>
            <p className={styles.subtitle}>
              PatrolsNet ile güvenlik operasyonlarınızı dijitalleştirin, izleyin ve yönetin.
            </p>
            <button className={styles.cta} onClick={handleScrollToFeatures}>
              Özellikler Nelerdir?
            </button>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/telefon.png" alt="PatrolsNet Uygulama Görseli" />
          </div>
        </section>

        <section className={styles.features} ref={featuresRef}>
          <h2 className={styles.sectionTitle}>Öne Çıkan Özellikler</h2>
          <div className={styles.grid}>
            <FeatureCard />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}