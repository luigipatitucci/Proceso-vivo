'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ServicesSection.module.css';

interface Service {
  id: string;
  colorTheme: 'magenta' | 'blue' | 'green';
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  previewFeatures: string[];
  allFeatures: string[];
  note?: string;
}

const services: Service[] = [
    {
      id: 'initial',
      colorTheme: 'magenta',
      title: 'Sesión Inicial',
      subtitle: 'Un primer espacio de escucha',
      shortDescription: 'Una sesión de orientación para organizar lo que está pasando e identificar el patrón central.',
      fullDescription: 'Una sesión de orientación para organizar lo que está pasando, identificar el patrón o bloqueo central, y definir una primera dirección de trabajo.',
      previewFeatures: [
        'Escucha y organización de lo que se trae',
        'Identificación del patrón o bloqueo principal'
      ],
      allFeatures: [
        'Escucha y organización de lo que se trae',
        'Identificación del patrón o bloqueo principal',
        'Orientación sobre el siguiente paso',
        'Clarificación de qué tipo de acompañamiento necesitás'
      ],
      note: 'No incluye acompañamiento posterior ni profundización del proceso completo.'
    },
    {
      id: 'core',
      colorTheme: 'blue',
      title: 'Método Proceso Vivo',
      subtitle: 'Proceso estructurado',
      shortDescription: 'El método central. 4 sesiones estructuradas que trabajan en niveles emocional, mental y energético.',
      fullDescription: 'El método central. Un proceso de 4 sesiones estructuradas que trabaja en niveles emocional, mental y energético, con inicio, desarrollo y cierre claramente definidos.',
      previewFeatures: [
        '4 sesiones con estructura definida',
        'Trabajo emocional, mental y energético'
      ],
      allFeatures: [
        '4 sesiones con estructura definida',
        'Trabajo emocional, mental y energético',
        'Inicio, desarrollo y cierre integrados',
        'El vínculo se sostiene dentro de cada sesión',
        'Proceso completo y autónomo'
      ]
    },
    {
      id: 'deep',
      colorTheme: 'green',
      title: 'Proceso Profundo',
      subtitle: 'Con acompañamiento extendido',
      shortDescription: 'El mismo método estructurado, con acompañamiento adicional entre sesiones.',
      fullDescription: 'El mismo método estructurado de 4 sesiones, con acompañamiento adicional entre sesiones para sostener el proceso en momentos de mayor complejidad emocional.',
      previewFeatures: [
        'Misma estructura que el método base',
        'Soporte adicional entre sesiones'
      ],
      allFeatures: [
        'Misma estructura que el método base',
        'Soporte adicional entre sesiones',
        'Para procesos que requieren mayor sostén',
        'Acompañamiento en momentos de crisis o desestabilización',
        'Mayor contención durante el trabajo profundo'
      ]
    }
  ];

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<string[]>([]);
  const cardRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    services.forEach((service) => {
      const element = cardRefs.current[service.id];
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => 
                prev.includes(service.id) ? prev : [...prev, service.id]
              );
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className={styles.section} id="servicios">
      {/* Floating decorative elements */}
      <div className={styles.floatingShape1}></div>
      <div className={styles.floatingShape2}></div>
      <div className={styles.floatingShape3}></div>

      <div className={styles.container}>
        <header className={`${styles.header} reveal-fade-up ${visibleCards.length > 0 ? 'is-visible' : ''}`}>
          <h2 className={styles.heading}>Formas de entrar al proceso</h2>
          <p className={styles.intro}>
            No todos necesitan el mismo nivel de profundidad o acompañamiento. 
            Estos son los diferentes modos de trabajo disponibles.
          </p>
        </header>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const isExpanded = expandedCard === service.id;
            const isVisible = visibleCards.includes(service.id);

            return (
              <article
                key={service.id}
                ref={(el) => { cardRefs.current[service.id] = el; }}
                className={[
                  styles.serviceCard,
                  styles[`card${service.colorTheme.charAt(0).toUpperCase() + service.colorTheme.slice(1)}`],
                  'reveal-stagger-item',
                  isExpanded ? styles.cardExpanded : '',
                  isVisible ? 'is-visible' : ''
                ].filter(Boolean).join(' ')}
              >
                {/* Decorative background elements */}
                <div className={styles.cardBackground}>
                  <div className={styles.cardGradient}></div>
                  <div className={styles.cardAccent}></div>
                </div>

                {/* Card Content */}
                <div className={styles.cardInner}>
                  {/* Base visible content - always shown */}
                  <div className={styles.cardBase}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                    </div>

                    <p className={styles.serviceDescription}>
                      {service.shortDescription}
                    </p>

                    <ul className={styles.featureList}>
                      {service.previewFeatures.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className={styles.featureItem}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable content - only shown when active */}
                  {isExpanded && (
                    <div className={styles.cardExpandedContent}>
                      <p className={styles.serviceDescriptionExpanded}>
                        {service.fullDescription}
                      </p>

                      <ul className={styles.featureList}>
                        {service.allFeatures.slice(service.previewFeatures.length).map((feature, idx) => (
                          <li 
                            key={idx} 
                            className={styles.featureItem}
                            style={{ 
                              transitionDelay: `${idx * 0.05}s` 
                            }}
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {service.note && (
                        <p className={styles.serviceNote}>{service.note}</p>
                      )}
                    </div>
                  )}

                  <div className={styles.cardFooter}>
                    <button
                      className={styles.toggleButton}
                      onClick={() => toggleCard(service.id)}
                      aria-expanded={isExpanded}
                      aria-label={isExpanded ? 'Ocultar detalles' : 'Ver detalles'}
                    >
                      {isExpanded ? 'Ocultar detalles' : 'Ver detalles'}
                      <span className={styles.buttonIcon} aria-hidden="true">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Estas no son paquetes comerciales. Son niveles distintos de involucramiento 
            con el mismo proceso, según lo que cada persona necesite en su momento.
          </p>
        </footer>
      </div>
    </section>
  );
}
