import React from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/Upcontent.module.css";

export default function Upcontent() {
  const { lang } = useLanguage();

const translations = {
  tr: {
    title: "Neden PatrolsNet?",
    items: [
      { heading: "Görev Takibi", text: "Personel görevlerini anlık takip edin, yönetin ve raporlayın." },
      { heading: "Olay Bildirimi", text: "Görev sırasında olayları fotoğraf ve konumla bildirin." },
    ],
  },
  en: {
    title: "Why PatrolsNet?",
    items: [
      { heading: "Task Tracking", text: "Monitor, manage and report personnel tasks in real time." },
      { heading: "Incident Reporting", text: "Report incidents with photos and location during tasks." },
    ],
  },
  de: {
    title: "Warum PatrolsNet?",
    items: [
      { heading: "Aufgabenverfolgung", text: "Verfolgen und verwalten Sie Aufgaben in Echtzeit." },
      { heading: "Ereignismeldung", text: "Melden Sie Vorfälle mit Fotos und Standort." },
    ],
  },
  fr: {
    title: "Pourquoi PatrolsNet ?",
    items: [
      { heading: "Suivi des tâches", text: "Surveillez et gérez les tâches en temps réel." },
      { heading: "Signalement d'incidents", text: "Signalez les incidents avec photos et localisation." },
    ],
  },
  es: {
    title: "¿Por qué PatrolsNet?",
    items: [
      { heading: "Seguimiento de tareas", text: "Monitorea y gestiona tareas en tiempo real." },
      { heading: "Reporte de incidentes", text: "Reporta incidentes con fotos y ubicación." },
    ],
  },
  ar: {
    title: "لماذا PatrolsNet؟",
    items: [
      { heading: "تتبع المهام", text: "راقب المهام وأدرها في الوقت الحقيقي." },
      { heading: "الإبلاغ عن الحوادث", text: "أبلغ عن الحوادث بالصور والموقع." },
    ],
  },
  ru: {
    title: "Почему PatrolsNet?",
    items: [
      { heading: "Отслеживание задач", text: "Контролируйте задачи в реальном времени." },
      { heading: "Сообщение о происшествиях", text: "Сообщайте о событиях с фото и геолокацией." },
    ],
  },
  ja: {
    title: "なぜPatrolsNet？",
    items: [
      { heading: "タスク追跡", text: "リアルタイムでタスクを監視・管理します。" },
      { heading: "インシデント報告", text: "写真と位置情報でインシデントを報告。" },
    ],
  },
  zh: {
    title: "为什么选择 PatrolsNet？",
    items: [
      { heading: "任务跟踪", text: "实时监控和管理任务。" },
      { heading: "事件报告", text: "通过照片和位置报告事件。" },
    ],
  },
};
  const content = translations[lang] || translations["tr"];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{content.title}</h2>
      <div className={styles.grid}>
        {content.items.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.heading}>{item.heading}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}