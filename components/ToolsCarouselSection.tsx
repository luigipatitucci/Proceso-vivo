'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ToolsCarouselSection.module.css';

interface Tool {
  id: string;
  title: string;
  text: string;
  colorTheme: 'blue' | 'magenta';
}

const tools: Tool[] = [
  {
    id: 'audio',
    title: 'Audioterapia',
    text: 'El sonido como vía de regulación. Un espacio donde el sistema nervioso puede soltar tensión y reorganizarse sin esfuerzo.',
    colorTheme: 'blue',
  },
  {
    id: 'chromo',
    title: 'Cromoterapia',
    text: 'La luz y el color como lenguaje del cuerpo. Estímulos sutiles que abren registros emocionales más allá de la palabra.',
    colorTheme: 'magenta',
  },
];

export default function ToolsCarouselSection() {
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

  return (
    <section 
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Herramientas dentro del proceso</h2>
          <p className={styles.intro}>
            El Método Proceso Vivo utiliza herramientas específicas para acompañar el trabajo terapéutico. 
            Estas ayudan a regular el sistema nervioso, abrir registros más sutiles y favorecer la integración 
            de lo que se trabaja en sesión.
          </p>
        </header>

        <div className={styles.toolsGrid}>
          {tools.map((tool) => (
            <article
              key={tool.id}
              className={`${styles.card} ${styles[`theme-${tool.colorTheme}`]}`}
            >
              <div className={styles.visualArea}>
                {tool.colorTheme === 'blue' && (
                  <>
                    <div className={styles.waveLayer}></div>
                    <div className={styles.waveLayer2}></div>
                  </>
                )}
                {tool.colorTheme === 'magenta' && (
                  <>
                    <div className={styles.gradientOrb}></div>
                    <div className={styles.gradientOrb2}></div>
                  </>
                )}
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{tool.title}</h3>
                <p className={styles.cardText}>{tool.text}</p>
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.footerBlock}>
          <div className={styles.footerAccent}></div>
          <p className={styles.footerText}>
            Estas herramientas no reemplazan el trabajo terapéutico. Lo acompañan, lo sostienen, lo profundizan.
          </p>
        </footer>
      </div>
    </section>
  );
}
