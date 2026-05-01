'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ProfessionalSection.module.css';

export default function ProfessionalSection() {
  const [imageVisible, setImageVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    // Check if elements are already in viewport
    const checkVisibility = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          setImageVisible(true);
        }
      }
      
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          setContentVisible(true);
        }
      }
      
      if (quoteRef.current) {
        const rect = quoteRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          setQuoteVisible(true);
        }
      }
    };

    // Initial check
    setTimeout(checkVisibility, 100);

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -10% 0px' };

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisible(true);
          }
        });
      },
      observerOptions
    );

    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContentVisible(true);
          }
        });
      },
      observerOptions
    );

    const quoteObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setQuoteVisible(true);
          }
        });
      },
      observerOptions
    );

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);
    if (quoteRef.current) quoteObserver.observe(quoteRef.current);

    // Re-check on hash change
    const handleHashChange = () => {
      setTimeout(checkVisibility, 300);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      imageObserver.disconnect();
      contentObserver.disconnect();
      quoteObserver.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section id="profesional" className={styles.section}>
      {/* Decorative elements */}
      <div className={styles.decorativeShape1}></div>
      <div className={styles.decorativeShape2}></div>
      <div className={styles.starAccent}>✦</div>

      <div className={styles.container}>
        <h2 className={`${styles.sectionHeading} reveal-fade-up ${imageVisible ? 'is-visible' : ''}`}>¿Quién acompaña este proceso?</h2>
        
        <div className={styles.grid}>
          <div 
            ref={imageRef}
            className={`${styles.imageColumn} reveal-scale-fade ${imageVisible ? 'is-visible' : ''}`}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <div className={styles.accentShape}></div>
                <div className={styles.imageFrame}>
                  <Image
                    src="/images/profile-maria.png"
                    alt="María del Castillo - Psicóloga en integración y bioenergía"
                    width={460}
                    height={575}
                    className={styles.professionalImage}
                    priority
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contentColumn}>
            <div 
              ref={contentRef}
              className={`${styles.professional} reveal-fade-up reveal-delay-2 ${contentVisible ? 'is-visible' : ''}`}
            >
              <h3 className={styles.name}>Lic. María del Castillo</h3>
              <p className={styles.role}>Psicología en Integración y Bioenergía</p>

              <div className={styles.bio}>
                <p className={styles.bioParagraph}>
                  Mi formación comienza en la psicología con orientación psicoanalítica, pero mi práctica fue transformándose con el tiempo.
                </p>
                <p className={styles.bioParagraph}>
                  Comprendí que no todo se resuelve desde la palabra. Hay procesos que necesitan trabajarse también desde el cuerpo, la energía y dimensiones más sutiles de la experiencia.
                </p>
                <p className={styles.bioParagraph}>
                  Desde ahí desarrollo un enfoque propio de psicología integradora y bioenergía, donde convergen la psicología, la filosofía y la dimensión espiritual —sin adherir a ninguna religión— dentro de un encuadre serio y profesional.
                </p>
                <p className={styles.bioParagraph}>
                  Trabajo con personas que ya no buscan solo comprender, sino transformar.
                </p>
                <p className={styles.bioParagraphLast}>
                  La síntesis de todo este recorrido es el Método Proceso Vivo.
                </p>
              </div>

              <blockquote 
                ref={quoteRef}
                className={`${styles.quote} reveal-fade-up reveal-delay-4 ${quoteVisible ? 'is-visible' : ''}`}
              >
                <p className={styles.quoteText}>
                  "No vine a convencer a nadie de mi valor.<br />
                  Vine a reconocerlo primero en mí."
                </p>
              </blockquote>

              <div className={styles.credentials}>
                <p className={styles.credentialItem}>Formación en psicología (UCA)</p>
                <p className={styles.credentialItem}>Especialización en abordajes integrativos</p>
                <p className={styles.credentialItem}>Trabajo con enfoque corporal y energético</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
