'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FinalCtaSection.module.css';

export default function FinalCtaSection() {
  const [phraseVisible, setPhraseVisible] = useState(false);
  const phraseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = phraseRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPhraseVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.mainHeading} reveal-fade-up ${phraseVisible ? 'is-visible' : ''}`}>¿Qué requiere este proceso?</h2>

        <div className={styles.requirements}>
          <div className={`${styles.requirement} reveal-fade-up reveal-delay-1 ${phraseVisible ? 'is-visible' : ''}`}>
            <h3 className={styles.requirementHeading}>Disposición activa</h3>
            <p className={styles.requirementText}>
              Esto no es algo que te hagan. Es algo que hacés con acompañamiento. Requiere que estés presente, involucrado/a, y disponible para lo que vaya apareciendo.
            </p>
          </div>

          <div className={`${styles.requirement} reveal-fade-up reveal-delay-2 ${phraseVisible ? 'is-visible' : ''}`}>
            <h3 className={styles.requirementHeading}>Tiempo y constancia</h3>
            <p className={styles.requirementText}>
              Los procesos profundos no se resuelven en una sesión ni en un mes. Requieren sostenerse en el tiempo, con paciencia y compromiso real con vos mismo/a.
            </p>
          </div>

          <div className={`${styles.requirement} reveal-fade-up reveal-delay-3 ${phraseVisible ? 'is-visible' : ''}`}>
            <h3 className={styles.requirementHeading}>Apertura a lo desconocido</h3>
            <p className={styles.requirementText}>
              No siempre sabés qué va a aparecer cuando empezás a trabajar de verdad. Requiere estar dispuesto/a a mirar lo que no querías mirar y a moverte de donde estabas.
            </p>
          </div>
        </div>

        {/* Single Emotional Phrase */}

        <div 
          ref={phraseRef}
          className={`${styles.ctaBlock} reveal-fade-up reveal-delay-4 ${phraseVisible ? 'is-visible' : ''}`}
        >
          <p className={styles.ctaIntro}>
            Si sentís que estás en este momento, y algo de lo que leíste resonó con vos, podemos empezar a conversar.
          </p>
          
          <a href="mailto:maria.delcastiloo@gmail.com" className={styles.primaryCta}>
            Escribir para consultar
          </a>
          
          <p className={styles.ctaSupport}>
            Respondemos personalmente cada consulta. No hay prisa, escribí cuando sientas que es el momento.
          </p>
        </div>
      </div>
    </section>
  );
}
