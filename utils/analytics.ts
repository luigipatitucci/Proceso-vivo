/**
 * Google Analytics event tracking utility
 * 
 * Safely tracks custom events using gtag.
 * Compatible with Next.js App Router and SSR.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      params?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

interface TrackEventParams {
  eventName: string;
  category?: string;
  label?: string;
  value?: number;
  customParams?: Record<string, any>;
}

/**
 * Track a custom Google Analytics event
 * 
 * @param eventName - The name of the event (e.g., 'click_whatsapp')
 * @param category - Event category (e.g., 'engagement')
 * @param label - Event label (e.g., 'floating_button')
 * @param value - Optional numeric value for the event
 * @param customParams - Optional additional parameters
 * 
 * @example
 * trackEvent('click_whatsapp', 'engagement', 'floating_button')
 */
export function trackEvent(
  eventName: string,
  category?: string,
  label?: string,
  value?: number,
  customParams?: Record<string, any>
): void {
  // Check if we're in the browser and gtag is available
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    // Silently return in SSR or when gtag is not loaded
    return;
  }

  try {
    const params: Record<string, any> = {
      ...(category && { event_category: category }),
      ...(label && { event_label: label }),
      ...(value !== undefined && { value }),
      ...customParams,
    };

    window.gtag('event', eventName, params);
    
    // Optional: log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 GA Event:', { eventName, ...params });
    }
  } catch (error) {
    // Fail silently to avoid breaking user experience
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracking event:', error);
    }
  }
}

/**
 * Alternative API with object parameter for better readability
 */
export function trackEventWithParams({
  eventName,
  category,
  label,
  value,
  customParams,
}: TrackEventParams): void {
  trackEvent(eventName, category, label, value, customParams);
}
