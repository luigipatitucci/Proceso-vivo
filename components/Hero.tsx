import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            No se trata solo de entender lo que pasa, sino de procesarlo para que deje de repetirse
          </h1>
          <p className={styles.description}>
            Proceso Vivo integra psicología clínica con trabajo corporal y energético para abordar patrones que se sostienen más allá de la comprensión racional. Un método que trabaja con la persona como sistema vivo.
          </p>
          <div className={styles.actions}>
            <a href="#metodo" className={styles.primaryCta}>
              Conocer el método
            </a>
            <a href="#para-quien" className={styles.secondaryCta}>
              Seguir explorando
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.placeholder}>
            {/* Image will be placed here */}
          </div>
        </div>
      </div>
    </section>
  );
}
