import styles from './ProfessionalSection.module.css';

export default function ProfessionalSection() {
  return (
    <section id="profesional" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>¿Quién acompaña este proceso?</h2>
        
        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <div className={styles.imagePlaceholder}>
              {/* Professional portrait will be placed here */}
            </div>
          </div>

          <div className={styles.contentColumn}>
            <div className={styles.professional}>
              <h3 className={styles.name}>[Nombre de la profesional]</h3>
              <p className={styles.role}>Psicóloga Clínica</p>

              <div className={styles.bio}>
                <p className={styles.bioParagraph}>
                  Mi formación está en psicología clínica, pero mi manera de trabajar se fue transformando cuando comprendí que no todas las personas necesitan solo entender lo que les pasa. Algunas necesitan procesarlo desde otro lugar.
                </p>
                <p className={styles.bioParagraph}>
                  Proceso Vivo nació de esa búsqueda: integrar el abordaje clínico con un trabajo más profundo sobre el cuerpo y la energía, sin perder la seriedad del encuadre terapéutico.
                </p>
                <p className={styles.bioParagraph}>
                  Trabajo con personas que sienten que algo se repite, que necesitan más que consejos o interpretaciones, y que están dispuestas a hacer un recorrido activo y comprometido con ellas mismas.
                </p>
              </div>

              <blockquote className={styles.quote}>
                <p className={styles.quoteText}>
                  "No se trata de convencer a nadie de nada. Se trata de acompañar a quien está listo para hacer un trabajo real consigo mismo."
                </p>
              </blockquote>

              <div className={styles.credentials}>
                <p className={styles.credentialItem}>Psicóloga clínica (UBA)</p>
                <p className={styles.credentialItem}>Especialización en psicoterapia corporal integrativa</p>
                <p className={styles.credentialItem}>Formación en abordajes somáticos y trabajo energético</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
