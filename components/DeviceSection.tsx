'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './DeviceSection.module.css';

type TabKey = 'what' | 'how' | 'why';

interface TabContent {
  key: TabKey;
  label: string;
  title: string;
  text: string;
}

const tabsContent: TabContent[] = [
  {
    key: 'what',
    label: 'Qué hace',
    title: '¿Qué hace el dispositivo?',
    text: 'El dispositivo trabaja a nivel bioenergético, generando un campo que facilita la movilización de lo que está retenido en el cuerpo. No actúa de manera invasiva ni forzada. Acompaña el ritmo de cada persona y solo funciona dentro del encuadre terapéutico.'
  },
  {
    key: 'how',
    label: 'Cómo se usa',
    title: '¿Cómo se usa?',
    text: 'Se utiliza durante las sesiones de forma controlada, acompañada de sostén terapéutico. La profesional ajusta el trabajo según lo que la persona necesita en cada momento. No es algo que la persona use sola ni fuera del encuadre. Requiere acompañamiento constante.'
  },
  {
    key: 'why',
    label: 'Por qué es necesario',
    title: '¿Por qué es necesario?',
    text: 'Porque hay algo en el cuerpo que no siempre se desbloquea solo con la palabra. Este dispositivo permite acceder a ese nivel corporal y energético que completa lo que el trabajo verbal abre, pero no siempre resuelve por sí solo. Es una herramienta dentro de un proceso integral.'
  }
];

const deviceImages = [
  {
    src: '/images/ChatGPT Image 21 abr 2026, 22_40_25.png',
    alt: 'Dispositivo terapéutico utilizado en las sesiones',
    overlay: 'blue'
  },
  {
    src: '/images/ChatGPT Image 21 abr 2026, 22_45_53.png',
    alt: 'Detalle del dispositivo de audioterapia',
    overlay: 'blue'
  },
  {
    src: '/images/ChatGPT Image 21 abr 2026, 22_46_10.png',
    alt: 'Dispositivo de cromoterapia en uso',
    overlay: 'magenta'
  },
  {
    src: '/images/ChatGPT Image 21 abr 2026, 22_47_59.png',
    alt: 'Vista del dispositivo terapéutico',
    overlay: 'green'
  }
];

export default function DeviceSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('what');
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeContent = tabsContent.find(tab => tab.key === activeTab) || tabsContent[0];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.sectionVisible : ''}`}
    >
      {/* Floating decorative shapes */}
      <div className={styles.floatingShape1}></div>
      <div className={styles.floatingShape2}></div>

      <div className={styles.container}>
        <header className={`${styles.header} reveal-fade-up ${isVisible ? 'is-visible' : ''}`}>
          <h2 className={styles.heading}>El dispositivo como herramienta</h2>
          <p className={styles.intro}>
            El trabajo incluye el uso de un dispositivo terapéutico específico. No es una máquina mágica ni un reemplazo del proceso. Es una herramienta que, bien utilizada dentro del encuadre clínico, permite trabajar con lo que el cuerpo sostiene de forma más directa.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Left Column: Image Gallery */}
          <div className={`${styles.galleryColumn} reveal-scale-fade reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            <div className={styles.mainImageWrapper}>
              <div className={styles.mainImage}>
                <Image
                  src={deviceImages[activeImage].src}
                  alt={deviceImages[activeImage].alt}
                  width={800}
                  height={600}
                  className={styles.deviceImage}
                  priority={activeImage === 0}
                />
                <div 
                  className={styles.imageOverlay} 
                  data-overlay={deviceImages[activeImage].overlay}
                ></div>
              </div>
            </div>

            <div className={styles.thumbnails}>
              {deviceImages.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${activeImage === index ? styles.thumbnailActive : ''}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                >
                  <div className={styles.thumbnailInner}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={150}
                      className={styles.thumbnailImage}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Tabbed Content */}
          <div className={`${styles.contentColumn} reveal-fade-left reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            {/* Tabs Navigation */}
            <nav className={styles.tabs}>
              {tabsContent.map((tab) => (
                <button
                  key={tab.key}
                  className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                  aria-current={activeTab === tab.key ? 'true' : undefined}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Tab Content */}
            <div className={styles.tabContent}>
              <h3 className={styles.contentTitle}>{activeContent.title}</h3>
              <p className={styles.contentText}>{activeContent.text}</p>
            </div>
          </div>
        </div>

        {/* Clarification Footer */}
        <div className={styles.clarification}>
          <p className={styles.clarificationText}>
            Este dispositivo <strong>no es un tratamiento autónomo</strong>. No funciona sin el acompañamiento profesional, sin la disposición de la persona, y sin el trabajo paralelo de comprensión y responsabilidad. Es una herramienta dentro de un proceso más amplio, no una solución en sí misma.
          </p>
        </div>
      </div>
    </section>
  );
}
