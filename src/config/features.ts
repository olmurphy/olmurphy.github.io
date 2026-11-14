export const FEATURES = {
  /** Toggle visibility of MIT Reality Hack (Jan 2027) once accepted */
  showUpcomingMitRealityHack: false,
} as const;

export type FeatureFlag = keyof typeof FEATURES;
