import styles from './DeviceSection.module.css';

export default function DeviceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>El dispositivo como herramienta</h2>
        
        <div className={styles.intro}>
          <p className={styles.introParagraph}>
            El trabajo incluye el uso de un dispositivo terapéutico específico. No es una máquina mágica ni un reemplazo del proceso. Es una herramienta que, bien utilizada dentro del encuadre clínico, permite trabajar con lo que el cuerpo sostiene de forma más directa.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.visualColumn}>
            <div className={styles.devicePlaceholder}>
              {/* Device image will be placed here */}
            </div>
          </div>

          <div className={styles.contentColumn}>
            <div className={styles.explanation}>
              <div className={styles.block}>
                <h3 className={styles.blockHeading}>¿Qué hace?</h3>
                <p className={styles.blockText}>
                  El dispositivo trabaja a nivel bioenergético, generando un campo que facilita la movilización de lo que está retenido en el cuerpo. No actúa de manera invasiva ni forzada. Acompaña el ritmo de cada persona.
                </p>
              </div>

              <div className={styles.block}>
                <h3 className={styles.blockHeading}>¿Cómo se usa?</h3>
                <p className={styles.blockText}>
                  Se utiliza durante las sesiones de forma controlada, acompañada de sostén terapéutico. La profesional ajusta el trabajo según lo que la persona necesita en cada momento. No es algo que la persona use sola ni fuera del encuadre.
                </p>
              </div>

              <div className={styles.block}>
                <h3 className={styles.blockHeading}>¿Por qué es necesario?</h3>
                <p className={styles.blockText}>
                  Porque hay algo en el cuerpo que no siempre se desbloquea solo con la palabra. Este dispositivo permite acceder a ese nivel corporal y energético que completa lo que el trabajo verbal abre, pero no siempre resuelve por sí solo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.clarification}>
          <p className={styles.clarificationText}>
            Este dispositivo <strong>no es un tratamiento autónomo</strong>. No funciona sin el acompañamiento profesional, sin la disposición de la persona, y sin el trabajo paralelo de comprensión y responsabilidad. Es una herramienta dentro de un proceso más amplio, no una solución en sí misma.
          </p>
        </div>
      </div>
    </section>
  );
}
