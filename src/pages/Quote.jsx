import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import MailForm from "../components/MailForm";
import ContactCard from "../components/ContactCard";
import MapEmbed from "../components/MapEmbed";
import styles from "../styles/Quote.module.css";

export default function Quote() {
  useEffect(() => {
    document.title = "PatrolsNet | İletişim";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className={styles.wrapper}>
        <div className={styles.grid}>
          {/* Sol alan: Form */}
          <div className={styles.left}>
            <MailForm />
          </div>

          {/* Sağ alan: İletişim kartı + harita */}
          <div className={styles.right}>
            <div className={styles.card}>
              <ContactCard />
            </div>
            <div className={`${styles.card} ${styles.map}`}>
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}