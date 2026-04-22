import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
}

export function useStaggerReveal(itemCount: number, options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.2,
    rootMargin = '0px',
  } = options;

  const containerRef = useRef<HTMLElement>(null);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal items with stagger
          Array.from({ length: itemCount }).forEach((_, index) => {
            setTimeout(() => {
              setVisibleIndices(prev => new Set([...prev, index]));
            }, index * 80); // 80ms delay between items
          });
          observer.unobserve(container);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
      observer.disconnect();
    };
  }, [itemCount, threshold, rootMargin]);

  return { containerRef, visibleIndices };
}
