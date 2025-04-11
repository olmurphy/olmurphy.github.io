import ReactGA from 'react-ga4';

// Initialize GA4 with your measurement ID
export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId, {
    gaOptions: {
      siteSpeedSampleRate: 100, // Track 100% of page loads for performance metrics
    },
    gtagOptions: {
      send_page_view: true,
      anonymize_ip: true,
    },
  });
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track user interactions
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  console.log('Tracking event inside analytics.ts:', { category, action, label, value });
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Track user timing
export const trackTiming = (category: string, variable: string, value: number, label?: string) => {
  ReactGA.send({
    hitType: 'timing',
    timingCategory: category,
    timingVar: variable,
    timingValue: value,
    timingLabel: label,
  });
};

// Track user scroll depth
export const trackScrollDepth = (depth: number) => {
  ReactGA.send({
    hitType: 'event',
    eventCategory: 'Scroll Depth',
    eventAction: 'scroll',
    eventLabel: `${depth}%`,
  });
};

// Track user engagement
export const trackEngagement = (type: string, duration: number) => {
  ReactGA.send({
    hitType: 'event',
    eventCategory: 'User Engagement',
    eventAction: type,
    eventValue: duration,
  });
};

// Track user demographics (if available)
export const trackUserDemographics = (age?: number, gender?: string) => {
  ReactGA.send({
    hitType: 'event',
    eventCategory: 'User Demographics',
    eventAction: 'demographics',
    eventLabel: `Age: ${age}, Gender: ${gender}`,
  });
};

// Track user device information
export const trackDeviceInfo = () => {
  const deviceInfo = {
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    userAgent: navigator.userAgent,
    language: navigator.language,
  };

  ReactGA.send({
    hitType: 'event',
    eventCategory: 'Device Info',
    eventAction: 'device_details',
    eventLabel: JSON.stringify(deviceInfo),
  });
};

// Track user errors
export const trackError = (error: Error, fatal: boolean = false) => {
  ReactGA.send({
    hitType: 'event',
    eventCategory: 'Error',
    eventAction: error.name,
    eventLabel: error.message,
    nonInteraction: true,
  });
}; 