'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './GuidedFilterSection.module.css';

interface ResonanceItem {
  id: number;
  text: string;
}

type ViewMode = 'resonance' | 'notForYou';

export default function GuidedFilterSection() {
  const [activeMode, setActiveMode] = useState<ViewMode>('resonance');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const resonanceItems: ResonanceItem[] = [
    {
      id: 1,
      text: 'Sentís que repetís patrones que no querés repetir, incluso cuando ya entendés racionalmente por qué suceden.'
    },
    {
      id: 2,
      text: 'Percibís que hay algo que tu cuerpo registra o sostiene, pero no lográs procesarlo completamente desde la palabra.'
    },
    {
      id: 3,
      text: 'Buscás un espacio que integre lo emocional, lo corporal y una dimensión más profunda de lo que te pasa.'
    },
    {
      id: 4,
      text: 'Estás dispuesto/a a involucrarte activamente en tu proceso, más allá de solo recibir consejos o explicaciones.'
    },
    {
      id: 5,
      text: 'Sentís que necesitás un abordaje que no se quede solo en comprender, sino que trabaje para que algo se mueva realmente.'
    }
  ];

  const notForYouItems: ResonanceItem[] = [
    {
      id: 1,
      text: 'Estás atravesando una crisis aguda o una situación que requiere atención clínica inmediata o de urgencia.'
    },
    {
      id: 2,
      text: 'Tu situación requiere un abordaje psiquiátrico, medicación específica, o un tratamiento médico prioritario que no puede esperar.'
    },
    {
      id: 3,
      text: 'Buscás una solución rápida, inmediata, o una respuesta externa que resuelva lo que sentís sin que tengas que involucrarte profundamente.'
    },
    {
      id: 4,
      text: 'No te sentís en condiciones de sostener un proceso que requiere constancia, presencia y compromiso con vos mismo/a.'
    },
    {
      id: 5,
      text: 'Estás buscando garantías de resultados específicos o promesas de transformación que ningún método terapéutico serio puede ofrecer.'
    }
  ];

  const currentItems = activeMode === 'resonance' ? resonanceItems : notForYouItems;

  // Header reveal animation
  useEffect(() => {
    if (!headerRef.current) return;

    // Check if element is already in viewport
    const checkVisibility = () => {
      const rect = headerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
        setHeaderVisible(true);
      }
    };

    // Initial check
    setTimeout(checkVisibility, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(headerRef.current);

    // Re-check on hash change
    const handleHashChange = () => {
      setTimeout(checkVisibility, 300);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Items reveal animation - reset when mode changes
  useEffect(() => {
    setVisibleItems([]);
    
    const timer = setTimeout(() => {
      currentItems.forEach((item, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, item.id]);
        }, index * 100);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeMode]);

  const handleModeSwitch = (mode: ViewMode) => {
    if (mode !== activeMode) {
      setActiveMode(mode);
      setHoveredItem(null);
    }
  };

  return (
    <section ref={sectionRef} className={styles.section} id="para-quien">
      <div className={styles.decorativeShape1}></div>
      <div className={styles.decorativeShape2}></div>
      
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.mainHeading}>¿Es este el momento para un proceso así?</h2>
          <p className={styles.introParagraph}>
            No todos los caminos son para todos los momentos. Esta sección está para ayudarte 
            a evaluar si lo que ofrece este método resuena con lo que estás atravesando ahora.
          </p>
        </div>

        <div className={styles.contentBlock}>
          {/* Editorial Toggle */}
          <div 
            ref={headerRef}
            className={`${styles.toggleContainer} ${headerVisible ? styles.headerVisible : ''}`}
          >
            <div className={styles.accentStar}>✦</div>
            <nav className={styles.toggleNav} role="tablist">
              <button
                onClick={() => handleModeSwitch('resonance')}
                className={`${styles.toggle} ${activeMode === 'resonance' ? styles.toggleActive : ''}`}
                role="tab"
                aria-selected={activeMode === 'resonance'}
                aria-controls="filter-content"
              >
                <span className={styles.toggleTextMobile}>Resuena</span>
                <span className={styles.toggleTextDesktop}>Puede resonarte si…</span>
              </button>
              <button
                onClick={() => handleModeSwitch('notForYou')}
                className={`${styles.toggle} ${styles.toggleSecondary} ${activeMode === 'notForYou' ? styles.toggleActive : ''}`}
                role="tab"
                aria-selected={activeMode === 'notForYou'}
                aria-controls="filter-content"
              >
                <span className={styles.toggleTextMobile}>No es para vos</span>
                <span className={styles.toggleTextDesktop}>Quizás no es lo que necesitás hoy si…</span>
              </button>
            </nav>
            <p className={styles.toggleSubtext}>
              {activeMode === 'resonance' 
                ? 'Reconocé si alguna de estas experiencias conecta con lo que estás viviendo'
                : 'Es importante identificar cuando el momento no es el adecuado'}
            </p>
          </div>
          
          {/* Dynamic List */}
          <div 
            key={activeMode}
            id="filter-content"
            className={`${styles.listContainer} ${activeMode === 'notForYou' ? styles.secondaryMode : ''}`}
            role="tabpanel"
          >
            <div className={`${styles.itemList} ${headerVisible ? styles.listVisible : ''}`}>
              <div className={`${styles.verticalLine} ${headerVisible ? styles.lineVisible : ''}`}></div>
              
              {currentItems.map((item, index) => (
                <div
                  key={`${activeMode}-${item.id}`}
                  className={`${styles.listItem} ${
                    visibleItems.includes(item.id) ? styles.itemVisible : ''
                  } ${
                    hoveredItem === item.id ? styles.itemActive : ''
                  } ${
                    hoveredItem !== null && hoveredItem !== item.id ? styles.itemFaded : ''
                  }`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onFocus={() => setHoveredItem(item.id)}
                  onBlur={() => setHoveredItem(null)}
                  tabIndex={0}
                  role="article"
                >
                  <span className={styles.itemNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.itemContent}>
                    <p className={styles.itemText}>{item.text}</p>
                    <div className={styles.itemAccent}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.closing}>
          <p className={styles.closingText}>
            Este método no reemplaza un tratamiento médico, psiquiátrico o psicoterapéutico 
            cuando eso es lo que la persona necesita. Es un abordaje complementario e integrativo 
            que trabaja desde otro lugar.
          </p>
        </div>
      </div>
    </section>
  );
}
