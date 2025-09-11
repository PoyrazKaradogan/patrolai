import React from "react";


export default function HeroFeature() {
  const handleScroll = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-feature">
      <div className="grid">
        <div className="text">
          <h1>Özellikle Nelerden</h1>
          <p>
            Akıllı yazılım çözümleriyle iş süreçlerinizi hızlandırın. Dijital dönüşümde bir adım öne geçin.
          </p>
          <button onClick={handleScroll}>Hemen Başla</button>
        </div>
        <div className="visual">
          <img src="/images/feature-visual.png" alt="Özellik görseli" />
        </div>
      </div>

      <style>{`
        .hero-feature {
          padding: 96px 64px;
          background: #0f0f0f;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
          gap: 64px;
        }

        .text h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-family: 'Orbitron', sans-serif;
          color: #ffcbfc;
          margin-bottom: 24px;
        }

        .text p {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          line-height: 1.8;
          color: #e0e0e0;
          margin-bottom: 32px;
        }

        .text button {
          padding: 12px 24px;
          font-size: 1rem;
          background: #ffcbfc;
          color: #0f0f0f;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .text button:hover {
          background: #f0a0e0;
          transform: translateY(-2px);
        }

        .visual img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(255, 203, 252, 0.4);
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .visual {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}