export const FEATURES = {
  /** Toggle visibility of MIT Reality Hack (Jan 2027) */
  showUpcomingMitRealityHack: false,
  /** Toggle visibility of Grants & Fellowships on the Research page */
  showGrantsSection: false,
  /** Toggle visibility of the Group / Advising page in primary navigation */
  showLabGroupPage: false,
  /** Toggle visibility of the Teaching page in primary navigation */
  showTeachingPage: true,
} as const;

export type FeatureFlag = keyof typeof FEATURES;
