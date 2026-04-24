'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './MethodSection.module.css';

export default function MethodSection() {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if elements are already in viewport
    const checkVisibility = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (leftRef.current) {
        const rect = leftRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          setLeftVisible(true);
        }
      }
      
      if (rightRef.current) {
        const rect = rightRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          setRightVisible(true);
        }
      }
    };

    // Initial check
    setTimeout(checkVisibility, 100);

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -10% 0px' };

    const leftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLeftVisible(true);
          }
        });
      },
      observerOptions
    );

    const rightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRightVisible(true);
          }
        });
      },
      observerOptions
    );

    if (leftRef.current) leftObserver.observe(leftRef.current);
    if (rightRef.current) rightObserver.observe(rightRef.current);

    // Re-check on hash change
    const handleHashChange = () => {
      setTimeout(checkVisibility, 300);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section id="metodo" className={styles.section}>
      <div className={styles.organicShape} />

      <div className={styles.container}>
        <div className={`${styles.intro} reveal-fade-up ${leftVisible ? 'is-visible' : ''}`}>
          <h2 className={styles.mainHeading}>¿Cómo trabaja el método?</h2>
          <p className={styles.introParagraph}>
            El trabajo integra dos dimensiones complementarias. No se trata de
            etapas separadas ni de técnicas aisladas, sino de un diálogo
            continuo entre comprender y procesar, entre hacer consciente y
            permitir que algo se mueva.
          </p>
        </div>

        <div className={styles.dimensionsWrapper}>
          <div className={styles.dimensionsGrid}>
            <div
              ref={leftRef}
              className={`${styles.dimension} reveal-fade-right ${
                leftVisible ? 'is-visible' : ''
              }`}
            >
              <div className={styles.dimensionInner}>
                <h3 className={styles.dimensionHeading}>
                  Comprender y <span className={styles.wordGreen}>nombrar</span>
                </h3>

                <div className={styles.dimensionContent}>
                  <p className={styles.dimensionParagraph}>
                    Reconocer los patrones que sostienen lo que pasa. Darle
                    palabras a lo que no tenía nombre. Hacer visible lo que
                    antes operaba sin que pudieras verlo.
                  </p>

                  <p className={styles.dimensionParagraph}>
                    No es solamente entender de manera intelectual. Es volver
                    consciente algo que estaba funcionando en automático, y que
                    por eso mismo se repetía.
                  </p>

                  <p className={styles.dimensionParagraph}>
                    Esta dimensión no es un fin en sí misma. Es el punto de
                    partida para que algo pueda moverse de otro modo.
                  </p>
                </div>

                <div className={styles.accentLine} />
              </div>
            </div>

            <div
              ref={rightRef}
              className={`${styles.dimension} ${styles.dimensionRight} reveal-fade-left reveal-delay-2 ${
                rightVisible ? 'is-visible' : ''
              }`}
            >
              <div className={styles.dimensionInner}>
                <h3 className={styles.dimensionHeading}>
                  Procesar y{' '}
                  <span className={styles.wordMagenta}>transformar</span>
                </h3>

                <div className={styles.dimensionContent}>
                  <p className={styles.dimensionParagraph}>
                    Hay cosas que no cambian solo porque las comprendas. Quedan
                    sostenidas en el cuerpo, en capas más profundas de la
                    experiencia, fuera del alcance de la palabra.
                  </p>

                  <p className={styles.dimensionParagraph}>
                    Este trabajo no fuerza ni interpreta. Acompaña lo que está
                    retenido para que pueda procesarse y liberarse
                    orgánicamente, a su propio tiempo.
                  </p>

                  <p className={styles.dimensionParagraph}>
                    En esta dimensión se integran herramientas específicas del
                    método, dentro de un acompañamiento cuidado y profesional,
                    para que algo pueda moverse desde adentro.
                  </p>
                </div>

                <div className={styles.accentLine} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.closing}>
          <p className={styles.closingText}>
            Ambas dimensiones trabajan juntas. No hay transformación real sin
            comprensión, y la comprensión sin procesamiento se queda en la
            superficie. La integración entre ambas es lo que permite que algo
            realmente cambie.
          </p>
        </div>
      </div>
    </section>
  );
}