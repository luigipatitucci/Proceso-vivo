import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Image
              src="/images/logo-footer.png"
              alt="Proceso Vivo"
              width={190}
              height={45}
              className={styles.logo}
            />
            <p className={styles.tagline}>
              Un espacio para procesar lo que se repite, desde un lugar de responsabilidad y conciencia.
            </p>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.contactHeading}>Contacto</h4>
            <a href="mailto:maria.delcastiloo@gmail.com" className={styles.contactLink}>
              maria.delcastiloo@gmail.com
            </a>
            <a href="tel:+5491112345678" className={styles.contactLink}>
              +54 9 11 1234-5678
            </a>
          </div>

          <div className={styles.navigation}>
            <h4 className={styles.navHeading}>Navegación</h4>
            <nav className={styles.navLinks}>
              <a href="#metodo" className={styles.navLink}>El método</a>
              <a href="#profesional" className={styles.navLink}>Quién acompaña</a>
              <a href="#contacto" className={styles.navLink}>Contacto</a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Proceso Vivo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
