import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.05,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = true,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasBeenVisibleRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasBeenVisibleRef.current) return;

    // Check if element is in viewport
    const checkVisibility = () => {
      if (!element || hasBeenVisibleRef.current) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isInView = rect.top < windowHeight * 0.95 && rect.bottom > windowHeight * 0.05;
      
      if (isInView) {
        setIsVisible(true);
        hasBeenVisibleRef.current = true;
      }
    };

    // Immediate check - critical for hash navigation
    checkVisibility();
    
    // Additional checks with requestAnimationFrame for reliability
    requestAnimationFrame(() => {
      checkVisibility();
      requestAnimationFrame(checkVisibility);
    });

    // Fallback with timeout
    const timer = setTimeout(checkVisibility, 150);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisibleRef.current) {
          setIsVisible(true);
          hasBeenVisibleRef.current = true;
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    // Hash change handler - for navbar anchor clicks
    const handleHashChange = () => {
      requestAnimationFrame(() => {
        checkVisibility();
        setTimeout(checkVisibility, 200);
        setTimeout(checkVisibility, 400);
      });
    };

    // Scroll handler for smooth scrolling completion
    const handleScroll = () => {
      requestAnimationFrame(checkVisibility);
    };

    // Listen to multiple events for maximum reliability
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also check after a delay in case of smooth scroll
    const laterCheck = setTimeout(checkVisibility, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(laterCheck);
      observer.unobserve(element);
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
}

export function useStaggerReveal(itemCount: number, options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.05,
    rootMargin = '0px 0px -10% 0px',
  } = options;

  const containerRef = useRef<HTMLElement>(null);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const hasBeenRevealedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasBeenRevealedRef.current) return;

    const revealItems = () => {
      if (hasBeenRevealedRef.current) return;
      hasBeenRevealedRef.current = true;
      
      // Reveal items with stagger
      Array.from({ length: itemCount }).forEach((_, index) => {
        setTimeout(() => {
          setVisibleIndices(prev => new Set([...prev, index]));
        }, index * 80);
      });
    };

    // Check if element is in viewport
    const checkVisibility = () => {
      if (!container || hasBeenRevealedRef.current) return;
      
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isInView = rect.top < windowHeight * 0.95 && rect.bottom > windowHeight * 0.05;
      
      if (isInView) {
        revealItems();
      }
    };

    // Immediate check
    checkVisibility();
    
    // Additional checks with requestAnimationFrame
    requestAnimationFrame(() => {
      checkVisibility();
      requestAnimationFrame(checkVisibility);
    });

    // Fallback with timeout
    const timer = setTimeout(checkVisibility, 150);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenRevealedRef.current) {
          revealItems();
          observer.unobserve(container);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);

    // Hash change handler
    const handleHashChange = () => {
      requestAnimationFrame(() => {
        checkVisibility();
        setTimeout(checkVisibility, 200);
        setTimeout(checkVisibility, 400);
      });
    };

    // Scroll handler
    const handleScroll = () => {
      requestAnimationFrame(checkVisibility);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const laterCheck = setTimeout(checkVisibility, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(laterCheck);
      observer.unobserve(container);
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [itemCount, threshold, rootMargin]);

  return { containerRef, visibleIndices };
}
