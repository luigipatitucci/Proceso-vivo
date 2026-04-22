'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={`${styles.eyebrow} reveal-fade-up ${isVisible ? 'is-visible' : ''}`}>
            MÉTODO PROCESO VIVO
          </span>
          <h1 className={`${styles.headline} reveal-fade-up reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            No se trata solo de entender{' '}
            <span className={styles.break}>lo que pasa,</span>{' '}
            sino de procesarlo{' '}
            <span className={styles.emphasis}>para que deje de repetirse</span>
          </h1>
          <p className={`${styles.description} reveal-fade-up reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            Cuando entender no alcanza, es momento de integrar. Un proceso que trabaja 
            sobre patrones profundos: en el cuerpo, en la psique, en lo que no se dice 
            pero se sostiene.
          </p>
          <div className={`${styles.actions} reveal-fade-up reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            <a href="#metodo" className={styles.primaryCta}>
              Conocer el método
            </a>
            <a href="#para-quien" className={styles.secondaryCta}>
              ¿Es para mí?
            </a>
          </div>
        </div>
        <div className={`${styles.visual} reveal-scale-fade reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          <div className={styles.visualComposition}>
            <div className={styles.organicShape1}></div>
            <div className={styles.organicShape2}></div>
            <div className={styles.organicShape3}></div>
            <div className={styles.textureLayer}></div>
            <div className={styles.accentLine}></div>
            <div className={styles.gradientOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
