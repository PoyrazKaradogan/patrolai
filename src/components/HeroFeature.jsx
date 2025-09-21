import React from "react";

function HeroFeature() {
  const styles = {
    heroFeature: {
      width: "100%",
      overflow: "hidden",
      background: "#0943a0ff",
      color: "#fff",
      padding: "8rem 0",
      borderTop: "1px solid #333",
      borderBottom: "1px solid #333",
    },
    scrollBanner: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      position: "relative",
    },
    scrollContent: {
      display: "inline-block",
      paddingLeft: "100%",
      animation: "scrollLeft 20s linear infinite",
      fontSize: "clamp(2rem, 2vw, 2.4rem)",
      letterSpacing: "0.05em",
    },
    span: {
      display: "inline-block",
    },
  };

  return (
    <section style={styles.heroFeature}>
      <div style={styles.scrollBanner}>
        <div style={styles.scrollContent}>
          <span style={styles.span}>
           PATROLSNET - AI DESTEKLİ GÜVENLİK YÖNETİM SİSTEMİ &nbsp; &nbsp; &nbsp;
          </span>
        </div>
      </div>

      {/* Keyframe tanımı için style etiketi */}
      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </section>
  );
}

export default HeroFeature;