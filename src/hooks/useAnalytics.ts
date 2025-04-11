import { useEffect, useCallback } from 'react';
// import { useLocation } from 'react-router-dom';
import {
  initGA,
  trackPageView,
  trackEvent,
  trackScrollDepth,
  trackDeviceInfo,
  trackError,
} from '../config/analytics';

export const useAnalytics = (measurementId: string) => {
  // const location = useLocation();

  // Initialize GA4
  useEffect(() => {
    initGA(measurementId);
    trackDeviceInfo();
  }, [measurementId]);

  // Track page views
  useEffect(() => {
    trackPageView("/");
  }, []);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackScrollDepth(25);
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackScrollDepth(50);
      } else if (scrollPercent >= 75 && scrollPercent < 90) {
        trackScrollDepth(75);
      } else if (scrollPercent >= 90) {
        trackScrollDepth(90);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      trackError(new Error(event.message));
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  // Track custom events
  const trackCustomEvent = useCallback((
    category: string,
    action: string,
    label?: string,
    value?: number
  ) => {
    trackEvent(category, action, label, value);
  }, []);

  return { trackCustomEvent };
}; 