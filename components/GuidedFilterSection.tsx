import styles from './GuidedFilterSection.module.css';

export default function GuidedFilterSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.mainHeading}>¿Es este el momento para un proceso así?</h2>
          <p className={styles.introParagraph}>
            No todos los caminos son para todos los momentos. Esta sección está para ayudarte a evaluar si lo que ofrece este método resuena con lo que estás atravesando ahora.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.block}>
            <h3 className={styles.blockHeading}>Puede resonarte si…</h3>
            <div className={styles.content}>
              <p className={styles.item}>
                Sentís que repetís patrones que no querés repetir, incluso cuando ya entendés racionalmente por qué suceden.
              </p>
              <p className={styles.item}>
                Percibís que hay algo que tu cuerpo registra o sostiene, pero no lográs procesarlo completamente desde la palabra.
              </p>
              <p className={styles.item}>
                Buscás un espacio que integre lo emocional, lo corporal y una dimensión más profunda de lo que te pasa.
              </p>
              <p className={styles.item}>
                Estás dispuesto/a a involucrarte activamente en tu proceso, más allá de solo recibir consejos o explicaciones.
              </p>
              <p className={styles.item}>
                Sentís que necesitás un abordaje que no se quede solo en comprender, sino que trabaje para que algo se mueva realmente.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockHeading}>Quizás no es lo que necesitás hoy si…</h3>
            <div className={styles.content}>
              <p className={styles.item}>
                Estás atravesando una crisis aguda o una situación que requiere atención clínica inmediata o de urgencia.
              </p>
              <p className={styles.item}>
                Tu situación requiere un abordaje psiquiátrico, medicación específica, o un tratamiento médico prioritario que no puede esperar.
              </p>
              <p className={styles.item}>
                Buscás una solución rápida, inmediata, o una respuesta externa que resuelva lo que sentís sin que tengas que involucrarte profundamente.
              </p>
              <p className={styles.item}>
                No te sentís en condiciones de sostener un proceso que requiere constancia, presencia y compromiso con vos mismo/a.
              </p>
              <p className={styles.item}>
                Estás buscando garantías de resultados específicos o promesas de transformación que ningún método terapéutico serio puede ofrecer.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.closing}>
          <p className={styles.closingText}>
            Este método no reemplaza un tratamiento médico, psiquiátrico o psicoterapéutico cuando eso es lo que la persona necesita. Es un abordaje complementario e integrativo que trabaja desde otro lugar. Si tenés dudas sobre si es lo adecuado para tu situación, es válido consultar con tu profesional de confianza antes de decidir.
          </p>
        </div>
      </div>
    </section>
  );
}
