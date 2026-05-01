'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FloatingSectionNav.module.css';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'para-quien', label: '¿Es para mí?' },
  { id: 'metodo', label: 'Método' },
  { id: 'herramientas', label: 'Herramientas' },
  { id: 'profesional', label: 'Quién acompaña' },
  { id: 'servicios', label: 'Formas de trabajo' },
  { id: 'contacto', label: 'Contacto' },
];

export default function FloatingSectionNav() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const collapseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Fade in after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll detection for auto-expand
    const handleScroll = () => {
      // Expand on scroll
      setIsExpanded(true);

      // Clear existing timeouts
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (collapseTimeoutRef.current) {
        clearTimeout(collapseTimeoutRef.current);
      }

      // Set new collapse timeout (2.5 seconds after scroll stops)
      collapseTimeoutRef.current = setTimeout(() => {
        setIsExpanded(false);
      }, 2500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (collapseTimeoutRef.current) {
        clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // IntersectionObserver to detect active section
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

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

      // Close mobile menu after selection
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    // Clear any pending collapse timeout
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    // Collapse after a short delay when mouse leaves
    collapseTimeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 1500);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`${styles.desktopNav} ${isVisible ? styles.visible : ''} ${
          isExpanded ? styles.expanded : ''
        }`}
        aria-label="Navegación de secciones"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className={styles.navList}>
          {sections.map((section) => (
            <li key={section.id} className={styles.navItem}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`${styles.navButton} ${
                  activeSection === section.id ? styles.active : ''
                }`}
                aria-label={`Ir a ${section.label}`}
                aria-current={activeSection === section.id ? 'true' : 'false'}
              >
                <span className={styles.dot}></span>
                <span className={styles.label}>{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isVisible ? styles.visible : ''}`}>
        <button
          onClick={toggleMobileMenu}
          className={styles.mobileToggle}
          aria-label="Abrir menú de secciones"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className={styles.menuIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className={styles.mobileToggleText}>Menú</span>
        </button>

        {isMobileMenuOpen && (
          <>
            <div
              className={styles.mobileOverlay}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            ></div>
            <div className={styles.mobileMenu}>
              <div className={styles.mobileMenuHeader}>
                <span className={styles.mobileMenuTitle}>Secciones</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={styles.mobileCloseButton}
                  aria-label="Cerrar menú"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
              <ul className={styles.mobileMenuList}>
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`${styles.mobileMenuItem} ${
                        activeSection === section.id ? styles.active : ''
                      }`}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}
