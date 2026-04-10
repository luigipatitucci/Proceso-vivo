import styles from './MethodSection.module.css';

export default function MethodSection() {
  return (
    <section id="metodo" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.mainHeading}>¿Cómo trabaja el método?</h2>
          <p className={styles.introParagraph}>
            Proceso Vivo aborda a la persona como un sistema vivo donde lo mental, lo emocional, lo corporal y lo energético están integrados. El trabajo se sostiene en dos niveles complementarios que dialogan entre sí durante todo el proceso.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.level}>
            <div className={styles.levelHeader}>
              <h3 className={styles.levelHeading}>Nivel estructural</h3>
              <p className={styles.levelSubtitle}>Psicología clínica</p>
            </div>
            <div className={styles.levelContent}>
              <p className={styles.levelParagraph}>
                Desde la psicología clínica, trabajamos para identificar y comprender los patrones que sostienen el malestar: de dónde vienen, cómo se repiten, qué función cumplen.
              </p>
              <p className={styles.levelParagraph}>
                Este nivel permite tomar conciencia de lo que está pasando, nombrar lo que antes no tenía nombre, y empezar a hacer responsable a la persona de su propio proceso.
              </p>
              <p className={styles.levelParagraph}>
                No se trata solo de entender. Se trata de que esa comprensión sea un punto de partida para poder transformar.
              </p>
            </div>
          </div>

          <div className={styles.level}>
            <div className={styles.levelHeader}>
              <h3 className={styles.levelHeading}>Nivel corporal y energético</h3>
              <p className={styles.levelSubtitle}>Trabajo sobre el cuerpo</p>
            </div>
            <div className={styles.levelContent}>
              <p className={styles.levelParagraph}>
                Muchas veces lo que sostiene un patrón no está solo en lo que pensamos, sino en lo que el cuerpo registra y sostiene sin que lo sepamos conscientemente.
              </p>
              <p className={styles.levelParagraph}>
                Este nivel trabaja con la dimensión corporal y energética de lo que está pasando, para que lo que quedó retenido pueda procesarse y liberarse de manera orgánica.
              </p>
              <p className={styles.levelParagraph}>
                Aquí es donde entra el trabajo con un dispositivo terapéutico específico que acompaña este proceso de manera controlada y profesional.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.closing}>
          <p className={styles.closingText}>
            Ambos niveles trabajan juntos. La integración entre lo que se comprende y lo que se procesa corporalmente es lo que permite que algo realmente se mueva, en lugar de quedarse solo en la idea de cambiar.
          </p>
        </div>
      </div>
    </section>
  );
}
