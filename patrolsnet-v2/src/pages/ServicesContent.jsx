import React from "react";
import styles from "../styles/ServicesContent.module.css";
import { useLanguage } from "../context/LanguageContext";


export const translations = [
  {
    id: "security-patrol",
    translations: {
      tr: {
        title: "Güvenlik Devriye ve Görev Yönetimi",
        description: "NFC, QR Code ve GPS gibi alternatiflerle uyumlu çalışan PatrolsNet, belirlenmiş nokta kontrolü yapar, sonuçları kaydeder ve akıllı raporlama sunar."
      },
      en: {
        title: "Security Patrol and Task Management",
        description: "PatrolsNet works with NFC, QR Code, and GPS to perform checkpoint control, record results, and provide smart reporting."
      },
      de: {
        title: "Sicherheitsstreife und Aufgabenverwaltung",
        description: "PatrolsNet arbeitet mit NFC, QR-Code und GPS, um Kontrollpunkte zu überwachen, Ergebnisse zu erfassen und intelligente Berichte bereitzustellen."
      },
      fr: {
        title: "Patrouille de sécurité et gestion des tâches",
        description: "PatrolsNet utilise NFC, QR Code et GPS pour contrôler les points, enregistrer les résultats et fournir des rapports intelligents."
      },
      es: {
        title: "Patrullaje de seguridad y gestión de tareas",
        description: "PatrolsNet funciona con NFC, código QR y GPS para realizar controles de puntos, registrar resultados y ofrecer informes inteligentes."
      },
      ru: {
        title: "Патрулирование и управление задачами",
        description: "PatrolsNet использует NFC, QR-коды и GPS для контроля точек, записи результатов и предоставления интеллектуальных отчетов."
      }
    }
  },
  {
    id: "service-task",
    translations: {
      tr: {
        title: "Hizmet Görev Yönetimi",
        description: "Önceden belirlenmiş işlerin icrası için NFC, QR Code, GPS ile onaylanmış noktaları kullanarak görevleri yerine getirir, kayıt altına alır ve raporlar."
      },
      en: {
        title: "Service Task Management",
        description: "Executes predefined tasks using NFC, QR Code, and GPS checkpoints, records them, and generates reports."
      },
      de: {
        title: "Dienstaufgabenverwaltung",
        description: "Führt vordefinierte Aufgaben mit NFC-, QR-Code- und GPS-Punkten aus, dokumentiert sie und erstellt Berichte."
      },
      fr: {
        title: "Gestion des tâches de service",
        description: "Exécute les tâches prédéfinies via des points NFC, QR Code et GPS, les enregistre et les rapporte."
      },
      es: {
        title: "Gestión de tareas de servicio",
        description: "Ejecuta tareas predefinidas usando puntos NFC, código QR y GPS, las registra y genera informes."
      },
      ru: {
        title: "Управление служебными задачами",
        description: "Выполняет заранее определенные задачи с использованием NFC, QR-кодов и GPS, фиксирует их и создает отчеты."
      }
    }
  },
  {
    id: "personnel-tracking",
    translations: {
      tr: {
        title: "Personel Devam Kontrol Yönetimi",
        description: "Personelin anlık mesaisini takip eder, periyodik raporlamaya dönüştürür, kayıt altına alır ve verimlilik sağlar."
      },
      en: {
        title: "Personnel Attendance Management",
        description: "Tracks real-time shifts, converts them into periodic reports, records data, and improves efficiency."
      },
      de: {
        title: "Personalanwesenheitsverwaltung",
        description: "Verfolgt Echtzeit-Schichten, wandelt sie in regelmäßige Berichte um, dokumentiert Daten und steigert die Effizienz."
      },
      fr: {
        title: "Gestion de la présence du personnel",
        description: "Suit les horaires en temps réel, les transforme en rapports périodiques, enregistre les données et améliore l'efficacité."
      },
      es: {
        title: "Gestión de asistencia del personal",
        description: "Supervisa turnos en tiempo real, los convierte en informes periódicos, registra datos y mejora la eficiencia."
      },
      ru: {
        title: "Управление посещаемостью персонала",
        description: "Отслеживает смены в реальном времени, преобразует их в периодические отчеты, фиксирует данные и повышает эффективность."
      }
    }
  },
  {
    id: "emergency-management",
    translations: {
      tr: {
        title: "Acil Durum ve Afet Yönetimi",
        description: "Tesis, araç ve kişi koruması için tanımlanabilir alarmları yönetir, kullanım sonrası raporlar ve arşivler."
      },
      en: {
        title: "Emergency and Disaster Management",
        description: "Manages customizable alarms for facility, vehicle, and personnel protection, then reports and archives them."
      },
      de: {
        title: "Notfall- und Katastrophenmanagement",
        description: "Verwaltet anpassbare Alarme für Einrichtungen, Fahrzeuge und Personen, berichtet und archiviert sie."
      },
      fr: {
        title: "Gestion des urgences et des catastrophes",
        description: "Gère les alarmes personnalisables pour les installations, les véhicules et les personnes, puis les rapporte et les archive."
      },
      es: {
        title: "Gestión de emergencias y desastres",
        description: "Gestiona alarmas personalizables para instalaciones, vehículos y personal, luego las informa y archiva."
      },
      ru: {
        title: "Управление чрезвычайными ситуациями и катастрофами",
        description: "Управляет настраиваемыми сигналами тревоги для объектов, транспорта и персонала, затем создает отчеты и архивирует их."
      }
    }
  },
  {
    id: "communication-management",
    translations: {
      tr: {
        title: "İletişim Yönetimi",
        description: "Tüm mesaj, uyarı ve yönergeleri tek noktadan yayınlar, kayıt altına alır ve arşivler."
      },
      en: {
        title: "Communication Management",
        description: "Publishes all messages, alerts, and instructions from a single point, records and archives them."
      },
      de: {
        title: "Kommunikationsmanagement",
        description: "Veröffentlicht alle Nachrichten, Warnungen und Anweisungen zentral, zeichnet sie auf und archiviert sie."
      },
      fr: {
        title: "Gestion de la communication",
        description: "Diffuse tous les messages, alertes et instructions depuis un point unique, les enregistre et les archive."
      },
      es: {
        title: "Gestión de la comunicación",
        description: "Publica todos los mensajes, alertas e instrucciones desde un único punto, los registra y los archiva."
      },
      ru: {
        title: "Управление коммуникацией",
        description: "Публикует все сообщения, предупреждения и инструкции из одного центра, записывает и архивирует их."
      }
    }
  },
  {
    id: "push-to-talk",
    translations: {
      tr: {
        title: "Bas Konuş Telsiz",
        description: "Personelin hızlı ve kesintisiz haberleşmesini sağlar, konuşmaları sıraya alır, kayıt yapar ve dinletir."
      },
      en: {
        title: "Push-to-Talk Radio",
        description: "Enables fast and uninterrupted communication, queues conversations, records and replays them."
      },
      de: {
        title: "Push-to-Talk-Funkgerät",
        description: "Ermöglicht schnelle und unterbrechungsfreie Kommunikation, reiht Gespräche ein, zeichnet sie auf und spielt sie ab."
      },
      fr: {
        title: "Talkie-walkie Push-to-Talk",
        description: "Permet une communication rapide et continue, met les conversations en file d'attente, les enregistre et les rejoue."
      },
      es: {
        title: "Radio Push-to-Talk",
        description: "Permite comunicación rápida y continua, organiza las conversaciones, las graba y las reproduce."
      },
      ru: {
        title: "Рация Push-to-Talk",
        description: "Обеспечивает быструю и непрерывную связь, ставит разговоры в очередь, записывает и воспроизводит их."
      }
    }
  },
{
  id: "detection-dof",
  translations: {
    tr: {
      title: "Tespit ve DOF Yönetimi",
      description: "Fotoğraf, video, ses, metin ve konum bilgisiyle tespitleri belgeleyerek arşivler; uygunsuzluk halinde DOF açılmasına yardımcı olur."
    },
    en: {
      title: "Detection and DOF Management",
      description: "Documents detections with photo, video, audio, text, and location; helps open DOF reports when irregularities are found."
    },
    de: {
      title: "Erkennung und DOF-Verwaltung",
      description: "Dokumentiert Erkennungen mit Foto, Video, Audio, Text und Standort; unterstützt das Öffnen von DOF-Berichten bei Unregelmäßigkeiten."
    },
    fr: {
      title: "Détection et gestion DOF",
      description: "Documente les détections avec photo, vidéo, audio, texte et localisation; aide à ouvrir un rapport DOF en cas d'irrégularité."
    },
    es: {
      title: "Detección y gestión DOF",
      description: "Documenta las detecciones con foto, vídeo, audio, texto y ubicación; ayuda a abrir informes DOF ante irregularidades."
    },
    ru: {
      title: "Управление обнаружением и DOF",
      description: "Документирует обнаружения с фото, видео, аудио, текстом и местоположением; помогает открыть отчеты DOF при нарушениях."
    }
  }
},
{
  id: "service-request",
  translations: {
    tr: {
      title: "Servis ve Talep Yönetimi",
      description: "Tüm talepleri belgelerle ilgili birimlere iletir, süreçleri yönetir ve hızlı bilgilendirme sağlar."
    },
    en: {
      title: "Service and Request Management",
      description: "Transfers all requests with documentation to relevant units, manages processes, and provides fast updates."
    },
    de: {
      title: "Service- und Anfragenmanagement",
      description: "Leitet alle Anfragen mit Dokumentation an zuständige Stellen weiter, verwaltet Prozesse und informiert schnell."
    },
    fr: {
      title: "Gestion des services et des demandes",
      description: "Transmet toutes les demandes avec documents aux unités concernées, gère les processus et informe rapidement."
    },
    es: {
      title: "Gestión de servicios y solicitudes",
      description: "Transfiere todas las solicitudes con documentación a las unidades correspondientes, gestiona procesos e informa rápidamente."
    },
    ru: {
      title: "Управление сервисом и запросами",
      description: "Передает все запросы с документацией в соответствующие отделы, управляет процессами и быстро информирует."
    }
  }
},
{
  id: "fall-detection",
  translations: {
    tr: {
      title: "Düşme ve Saldırı Algılama",
      description: "Personelin görev sırasında kontrolsüz düşmesini algılar, güvenliği üst seviyeye çıkarır."
    },
    en: {
      title: "Fall and Attack Detection",
      description: "Detects uncontrolled falls during duty and maximizes safety response."
    },
    de: {
      title: "Sturz- und Angriffsdetektion",
      description: "Erkennt unkontrollierte Stürze während des Einsatzes und maximiert die Sicherheitsreaktion."
    },
    fr: {
      title: "Détection de chute et d'attaque",
      description: "Détecte les chutes incontrôlées pendant le service et optimise la réponse de sécurité."
    },
    es: {
      title: "Detección de caídas y ataques",
      description: "Detecta caídas no controladas durante el servicio y maximiza la respuesta de seguridad."
    },
    ru: {
      title: "Обнаружение падений и нападений",
      description: "Обнаруживает неконтролируемые падения во время службы и усиливает меры безопасности."
    }
  }
},
{
  id: "phone-sms",
  translations: {
    tr: {
      title: "Telefon ve SMS Yönetimi",
      description: "Tüm telefon ve SMS trafiğini cihazdan bağımsız yönetir, doğru zamanda doğru kişiyi arar."
    },
    en: {
      title: "Phone and SMS Management",
      description: "Manages all phone and SMS traffic independently of device, ensuring timely and accurate communication."
    },
    de: {
      title: "Telefon- und SMS-Verwaltung",
      description: "Verwaltet den gesamten Telefon- und SMS-Verkehr unabhängig vom Gerät und sorgt für rechtzeitige Kommunikation."
    },
    fr: {
      title: "Gestion des appels et SMS",
      description: "Gère tout le trafic téléphonique et SMS indépendamment de l'appareil, assurant une communication précise et rapide."
    },
    es: {
      title: "Gestión de llamadas y SMS",
      description: "Gestiona todo el tráfico de llamadas y SMS independientemente del dispositivo, asegurando comunicación precisa y oportuna."
    },
    ru: {
      title: "Управление телефоном и SMS",
      description: "Управляет всей телефонной и SMS-связью независимо от устройства, обеспечивая своевременное общение."
    }
  }
},
{
  id: "service-audit",
  translations: {
    tr: {
      title: "Hizmet Denetimi ve Yönetimi",
      description: "Tüm hizmet ve görevleri denetler gibi yöneterek kaliteyi ve verimliliği artırır."
    },
    en: {
      title: "Service Audit and Management",
      description: "Manages all services and tasks as if auditing, enhancing quality and efficiency."
    },
    de: {
      title: "Serviceprüfung und -verwaltung",
      description: "Verwaltet alle Dienste und Aufgaben wie bei einer Prüfung, um Qualität und Effizienz zu steigern."
    },
    fr: {
      title: "Audit et gestion des services",
      description: "Gère tous les services et tâches comme un audit pour améliorer la qualité et l'efficacité."
    },
    es: {
      title: "Auditoría y gestión de servicios",
      description: "Gestiona todos los servicios y tareas como si fueran auditados, mejorando la calidad y eficiencia."
    },
    ru: {
      title: "Аудит и управление сервисом",
      description: "Управляет всеми услугами и задачами как при аудите, повышая качество и эффективность."
    }
  }
},
{
  id: "smart-reporting",
  translations: {
    tr: {
      title: "Akıllı Raporlama Yönetimi",
      description: "Belirlenmiş periyodik verileri yapay zeka destekli sistemle otomatik olarak raporlar."
    },
    en: {
      title: "Smart Reporting Management",
      description: "Automatically reports predefined periodic data using AI-powered systems."
    },
    de: {
      title: "Intelligente Berichterstattung",
      description: "Erstellt automatisch vordefinierte periodische Berichte mit KI-gestützten Systemen."
    },
    fr: {
      title: "Gestion des rapports intelligents",
      description: "Génère automatiquement des rapports périodiques prédéfinis grâce à des systèmes basés sur l'IA."
    },
    es: {
      title: "Gestión de informes inteligentes",
      description: "Genera automáticamente informes periódicos predefinidos mediante sistemas con inteligencia artificial."
    },
    ru: {
      title: "Управление интеллектуальной отчетностью",
      description: "Автоматически формирует заданные периодические отчеты с помощью систем на базе ИИ."
    }
  }
}
]
export default function ServicesContent() {
  const { lang } = useLanguage();
  const services = translations.map((item) => item.translations[lang] || item.translations["tr"]);

  return (
  <section className={styles.page}>
  {services.map((service, index) => (
    <div key={index} className={styles.module}>
      <img src={`/images/module-${index + 1}.png`} alt={service.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
      </div>
    </div>
  ))}
</section>
  );
}