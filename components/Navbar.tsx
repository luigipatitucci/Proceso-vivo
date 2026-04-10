import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.brand}>
          Proceso Vivo
        </a>
        
        <div className={styles.links}>
          <a href="#metodo" className={styles.link}>
            El método
          </a>
          <a href="#profesional" className={styles.link}>
            Quién acompaña
          </a>
          <a href="#contacto" className={styles.linkCta}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
