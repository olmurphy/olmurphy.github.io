import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';

interface AnalyticsContextType {
  trackEvent: (category: string, action: string, label?: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode; measurementId: string }> = ({
  children,
  measurementId,
}) => {
  const { trackCustomEvent } = useAnalytics(measurementId);

  const trackEvent = useCallback(
    (category: string, action: string, label?: string, value?: number) => {
      console.log('Tracking event:', { category, action, label, value });
      trackCustomEvent(category, action, label, value);
    },
    [trackCustomEvent]
  );

  const value = useMemo(() => ({ trackEvent }), [trackEvent]);

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
}; 