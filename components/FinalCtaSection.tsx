'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FinalCtaSection.module.css';

type RequirementKey = 'active' | 'time' | 'openness';

interface Requirement {
  key: RequirementKey;
  label: string;
  heading: string;
  text: string;
}

const requirements: Requirement[] = [
  {
    key: 'active',
    label: 'Disposición activa',
    heading: 'Disposición activa',
    text: 'Esto no es algo que te hagan. Es algo que hacés con acompañamiento. Requiere que estés presente, involucrado/a, y disponible para lo que vaya apareciendo.'
  },
  {
    key: 'time',
    label: 'Tiempo y constancia',
    heading: 'Tiempo y constancia',
    text: 'Los procesos profundos no se resuelven en una sesión ni en un mes. Requieren sostenerse en el tiempo, con paciencia y compromiso real con vos mismo/a.'
  },
  {
    key: 'openness',
    label: 'Apertura a lo desconocido',
    heading: 'Apertura a lo desconocido',
    text: 'No siempre sabés qué va a aparecer cuando empezás a trabajar de verdad. Requiere estar dispuesto/a a mirar lo que no querías mirar y a moverte de donde estabas.'
  }
];

export default function FinalCtaSection() {
  const [phraseVisible, setPhraseVisible] = useState(false);
  const [activeRequirement, setActiveRequirement] = useState<RequirementKey>('active');
  const phraseRef = useRef<HTMLDivElement>(null);
  const hasBeenVisibleRef = useRef(false);

  useEffect(() => {
    const element = phraseRef.current;
    if (!element || hasBeenVisibleRef.current) return;

    // Check if element is in viewport
    const checkVisibility = () => {
      if (!element || hasBeenVisibleRef.current) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isInView = rect.top < windowHeight * 0.95 && rect.bottom > windowHeight * 0.05;
      
      if (isInView) {
        setPhraseVisible(true);
        hasBeenVisibleRef.current = true;
      }
    };

    // Check if navigated directly to #contacto
    const isContactoHash = window.location.hash === '#contacto';
    
    // Immediate checks - critical for hash navigation
    if (isContactoHash) {
      checkVisibility();
    }
    
    // Additional checks with requestAnimationFrame
    requestAnimationFrame(() => {
      checkVisibility();
      requestAnimationFrame(checkVisibility);
    });

    // Fallback timeouts
    const timer1 = setTimeout(checkVisibility, 100);
    const timer2 = setTimeout(checkVisibility, 200);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasBeenVisibleRef.current) {
            setPhraseVisible(true);
            hasBeenVisibleRef.current = true;
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(element);

    // Hash change handler - for navbar anchor clicks
    const handleHashChange = () => {
      if (window.location.hash === '#contacto') {
        requestAnimationFrame(() => {
          checkVisibility();
          setTimeout(checkVisibility, 150);
          setTimeout(checkVisibility, 300);
          setTimeout(checkVisibility, 500);
        });
      }
    };

    // Scroll handler
    const handleScroll = () => {
      requestAnimationFrame(checkVisibility);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Later check for smooth scroll completion
    const laterCheck = setTimeout(checkVisibility, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(laterCheck);
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeContent = requirements.find(req => req.key === activeRequirement) || requirements[0];

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.mainHeading} reveal-fade-up ${phraseVisible ? 'is-visible' : ''}`}>¿Qué requiere este proceso?</h2>

        {/* Mobile selector */}
        <div className={styles.mobileSelector}>
          {requirements.map((req, index) => (
            <button
              key={req.key}
              className={`${styles.selectorButton} ${activeRequirement === req.key ? styles.selectorButtonActive : ''}`}
              onClick={() => setActiveRequirement(req.key)}
              aria-label={`Ver ${req.label}`}
            >
              <span className={styles.selectorNumber}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.selectorLabel}>{req.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile single card view */}
        <div className={styles.mobileRequirement}>
          <div 
            key={activeRequirement}
            className={`${styles.requirement} ${styles.requirementMobile}`}
          >
            <h3 className={styles.requirementHeading}>{activeContent.heading}</h3>
            <p className={styles.requirementText}>{activeContent.text}</p>
          </div>
        </div>

        {/* Desktop cards view */}
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
