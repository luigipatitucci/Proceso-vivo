import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.brand}>
          <Image
            src="/images/Logo.png"
            alt="Proceso Vivo"
            width={130}
            height={40}
            className={styles.logo}
            priority
          />
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
