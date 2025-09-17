import { useLanguage } from "../context/LanguageContext";

const translations = {
  tr: { title: "Konum Haritası" },
  en: { title: "Location Map" },
  de: { title: "Standortkarte" },
  fr: { title: "Carte de localisation" },
  es: { title: "Mapa de ubicación" },
  ru: { title: "Карта местоположения" },
};

export default function MapEmbed() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations["tr"];

  return (
    <section className="map-wrapper">
      <h3 className="map-title">{t.title}</h3>
      <div className="map-frame">
        <iframe
          title="Ümraniye Konum Haritası"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12059.123456789!2d29.123456!3d41.023456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf123456789%3A0xabcdef123456789!2sÜmraniye%2C%20İstanbul!5e0!3m2!1str!2str!4v1691234567890"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <style>{`
        .map-wrapper {
          background-color: #fff;
          border: 1px solid #d0d4e4;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
        }

        .map-title {
          font-family: 'Segoe UI', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: #08384f;
          margin: 0;
          text-align: left;
        }

        .map-frame {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
        }

        .map-frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}