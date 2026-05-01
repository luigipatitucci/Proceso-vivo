'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface NavLink {
  id: string;
  label: string;
}

const mobileNavLinks: NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'metodo', label: 'Método' },
  { id: 'para-quien', label: 'Es para mí' },
  { id: 'herramientas', label: 'Herramientas' },
  { id: 'profesional', label: 'Quién acompaña' },
  { id: 'servicios', label: 'Formas de trabajo' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      closeMobileMenu();
    }
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
          {mobileNavLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={styles.mobileLink}
            >
              {link.label}
            </button>
          ))}
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
