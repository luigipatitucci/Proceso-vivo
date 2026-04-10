import styles from './FinalCtaSection.module.css';

export default function FinalCtaSection() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>¿Qué requiere este proceso?</h2>
        
        <div className={styles.intro}>
          <p className={styles.introParagraph}>
            Si llegaste hasta acá y sentís que esto resuena con lo que necesitás, es importante que sepas qué implica empezar este camino. No hay atajos ni fórmulas mágicas. Hay un proceso que se hace paso a paso.
          </p>
        </div>

        <div className={styles.requirements}>
          <div className={styles.requirement}>
            <h3 className={styles.requirementHeading}>Disposición activa</h3>
            <p className={styles.requirementText}>
              Esto no es algo que te hagan. Es algo que hacés con acompañamiento. Requiere que estés presente, involucrado/a, y disponible para lo que vaya apareciendo.
            </p>
          </div>

          <div className={styles.requirement}>
            <h3 className={styles.requirementHeading}>Tiempo y constancia</h3>
            <p className={styles.requirementText}>
              Los procesos profundos no se resuelven en una sesión ni en un mes. Requieren sostenerse en el tiempo, con paciencia y compromiso real con vos mismo/a.
            </p>
          </div>

          <div className={styles.requirement}>
            <h3 className={styles.requirementHeading}>Apertura a lo desconocido</h3>
            <p className={styles.requirementText}>
              No siempre sabés qué va a aparecer cuando empezás a trabajar de verdad. Requiere estar dispuesto/a a mirar lo que no querías mirar y a moverte de donde estabas.
            </p>
          </div>
        </div>

        <div className={styles.closing}>
          <p className={styles.closingText}>
            Si sentís que estás en ese momento, si algo de lo que leíste resonó con lo que estás atravesando, y si estás dispuesto/a a hacer este trabajo, podemos empezar a conversar.
          </p>
        </div>

        <div className={styles.ctaBlock}>
          <a href="mailto:contacto@procesovivo.com" className={styles.primaryCta}>
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
