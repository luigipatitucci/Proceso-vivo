'use client';

import { useState } from 'react';
import styles from './ToolsSection.module.css';

export default function ToolsSection() {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const toggleTool = (toolName: string) => {
    setExpandedTool(expandedTool === toolName ? null : toolName);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Herramientas dentro del proceso</h2>
          <p className={styles.intro}>
            El Método Proceso Vivo utiliza herramientas específicas para acompañar 
            el trabajo terapéutico. Estas ayudan a regular el sistema nervioso, 
            abrir registros más sutiles y favorecer la integración de lo que se trabaja 
            en sesión.
          </p>
        </header>

        <div className={styles.toolsGrid}>
          {/* Audiotherapy Block */}
          <article
            className={`${styles.toolBlock} ${expandedTool === 'audio' ? styles.expanded : ''}`}
            onClick={() => toggleTool('audio')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTool('audio');
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={expandedTool === 'audio'}
          >
            <div className={styles.toolVisual} aria-hidden="true">
              <div className={styles.visualPlaceholder}>
                <span className={styles.iconAudio}>♪</span>
              </div>
            </div>
            
            <div className={styles.toolContent}>
              <h3 className={styles.toolTitle}>Audioterapia</h3>
              <p className={styles.toolDescription}>
                Regulación del sistema nervioso a través del sonido. Ayuda a reducir 
                la ansiedad, calmar el ruido mental y acompañar procesos emocionales 
                sin sobrecarga.
              </p>
              
              <div className={styles.expandedContent}>
                <p className={styles.expandedText}>
                  La audioterapia en Proceso Vivo funciona como una herramienta de 
                  acompañamiento al trabajo verbal. No reemplaza la palabra: la fortalece. 
                  Ayuda a que lo trabajado en sesión no quede solo en lo mental, sino que 
                  se registre también en el cuerpo. Favorece la relajación profunda, mejora 
                  el descanso, y sostiene la conexión interna sin explicarlo todo con la mente.
                </p>
              </div>

              <span className={styles.expandCue} aria-hidden="true">
                {expandedTool === 'audio' ? '−' : '+'}
              </span>
            </div>
          </article>

          {/* Chromotherapy Block */}
          <article
            className={`${styles.toolBlock} ${expandedTool === 'chromo' ? styles.expanded : ''}`}
            onClick={() => toggleTool('chromo')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTool('chromo');
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={expandedTool === 'chromo'}
          >
            <div className={styles.toolVisual} aria-hidden="true">
              <div className={styles.visualPlaceholder}>
                <span className={styles.iconChromo}>◉</span>
              </div>
            </div>
            
            <div className={styles.toolContent}>
              <h3 className={styles.toolTitle}>Cromoterapia</h3>
              <p className={styles.toolDescription}>
                Regulación a través de la luz y el color. Los colores son frecuencias 
                que el cerebro percibe y que influyen en estados emocionales, mentales 
                y corporales.
              </p>
              
              <div className={styles.expandedContent}>
                <p className={styles.expandedText}>
                  La cromoterapia en Proceso Vivo trabaja con luz como estímulo regulador 
                  del sistema nervioso. Cada color puede acompañar procesos distintos: 
                  activación, calma, enfoque, integración. No es magia ni pseudociencia. 
                  Es una herramienta que ayuda al sistema a calmarse, organizarse y 
                  encontrar un nuevo balance interno.
                </p>
              </div>

              <span className={styles.expandCue} aria-hidden="true">
                {expandedTool === 'chromo' ? '−' : '+'}
              </span>
            </div>
          </article>
        </div>

        <footer className={styles.footer}>
          <p className={styles.clarification}>
            Estas herramientas no reemplazan el trabajo terapéutico. Lo acompañan, 
            lo sostienen, lo profundizan. El proceso sigue siendo el centro.
          </p>
        </footer>
      </div>
    </section>
  );
}
