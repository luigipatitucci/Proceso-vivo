'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.brand}>
          <Image
            src="/images/logo.png"
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

        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <a href="#metodo" className={styles.mobileLink} onClick={closeMobileMenu}>
            El método
          </a>
          <a href="#profesional" className={styles.mobileLink} onClick={closeMobileMenu}>
            Quién acompaña
          </a>
          <a href="#contacto" className={styles.mobileLink} onClick={closeMobileMenu}>
            Contacto
          </a>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
