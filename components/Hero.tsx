'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Check if element is already in viewport
    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    // Initial check for direct navigation
    setTimeout(checkVisibility, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(element);

    // Re-check on hash change
    const handleHashChange = () => {
      setTimeout(checkVisibility, 300);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
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
          <div className={styles.heroImageComposition}>
            <div className={styles.heroAccentShape}></div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/header-image.png"
                alt="Proceso Vivo - Psicología en Integración"
                width={900}
                height={1050}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, (max-width: 1280px) 40vw, 42vw"
                className={styles.heroImage}
                priority
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
