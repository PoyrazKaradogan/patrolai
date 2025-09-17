import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactForm() {
  const { lang } = useLanguage();

  const translations = {
    tr: {
      title: "İletişim Formu",
      subtitle: "Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.",
      name: "Adınız",
      email: "E-posta",
      phone: "Telefon",
      message: "Mesajınız",
      send: "Gönder",
      success: "Mesajınız başarıyla gönderildi.",
      error: "Bir hata oluştu. Lütfen tekrar deneyin.",
    },
    en: {
      title: "Contact Form",
      subtitle: "You can reach us by filling out the form below.",
      name: "Your Name",
      email: "Email",
      phone: "Phone",
      message: "Your Message",
      send: "Send",
      success: "Your message has been sent successfully.",
      error: "Something went wrong. Please try again.",
    },
    de: {
      title: "Kontaktformular",
      subtitle: "Sie können uns über das folgende Formular kontaktieren.",
      name: "Ihr Name",
      email: "E-Mail",
      phone: "Telefon",
      message: "Ihre Nachricht",
      send: "Senden",
      success: "Ihre Nachricht wurde erfolgreich gesendet.",
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    },
    fr: {
      title: "Formulaire de contact",
      subtitle: "Vous pouvez nous joindre en remplissant le formulaire ci-dessous.",
      name: "Votre nom",
      email: "E-mail",
      phone: "Téléphone",
      message: "Votre message",
      send: "Envoyer",
      success: "Votre message a été envoyé avec succès.",
      error: "Une erreur est survenue. Veuillez réessayer.",
    },
    es: {
      title: "Formulario de contacto",
      subtitle: "Puede contactarnos llenando el siguiente formulario.",
      name: "Su nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Su mensaje",
      send: "Enviar",
      success: "Su mensaje ha sido enviado exitosamente.",
      error: "Ha ocurrido un error. Por favor, inténtelo de nuevo.",
    },
    ru: {
      title: "Форма обратной связи",
      subtitle: "Вы можете связаться с нами, заполнив форму ниже.",
      name: "Ваше имя",
      email: "Электронная почта",
      phone: "Телефон",
      message: "Ваше сообщение",
      send: "Отправить",
      success: "Ваше сообщение успешно отправлено.",
      error: "Произошла ошибка. Пожалуйста, попробуйте снова.",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const t = translations[lang] || translations["tr"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(t.success);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>{t.title}</h2>
      <p style={styles.subtitle}>{t.subtitle}</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t.name}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t.email}
          style={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t.phone}
          style={styles.input}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t.message}
          style={{ ...styles.input, ...styles.textarea }}
          required
        ></textarea>
        <button type="submit" style={styles.button}>
          {t.send}
        </button>
        <p style={{ ...styles.status, color: status === t.success ? "#00a86b" : "#d00000" }}>
          {status}
        </p>
      </form>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "64px 24px",
  },
  title: {
    color: "#08384f",
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "2rem",
    marginBottom: "12px",
    textAlign: "center",
  },
  subtitle: {
    color: "#08384f",
    fontSize: "1rem",
    marginBottom: "32px",
    textAlign: "center",
    maxWidth: "600px",
  },
  form: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#ffffff",
    border: "1px solid #08384f",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 0 12px rgba(39, 70, 183, 0.08)",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxSizing: "border-box",
  },
  textarea: {
    minHeight: "120px",
    resize: "vertical",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#08384f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  status: {
    marginTop: "16px",
    textAlign: "center",
    fontSize: "0.9rem",
  },
};