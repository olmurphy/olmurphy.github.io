import { HOME_CONTENT as home } from "./home";
import { ABOUT_CONTENT as about } from "./about";
import { RESEARCH_CONTENT as research } from "./research";
import { PUBLICATIONS_CONTENT as publications } from "./publications";
import { PROJECTS_CONTENT as projects } from "./projects";
import { EDUCATION_CONTENT as education } from "./education";
import { TIMELINE_CONTENT as timeline } from "./timeline";
import {
  LIFE_CONTENT as life,
  LIFE_CATEGORIES as lifeCategories,
} from "./life";
import { LEARNING_CONTENT as learning } from "./learning";
import { MEDIA_CONTENT as media } from "./media";
import { TEACHING_CONTENT as teaching } from "./teaching";
import { GROUP_CONTENT as group } from "./group";
import { CONTACT_CONTENT as contact } from "./contact";
import {
  PROFILE_LINKS as profileLinks,
  SOCIAL_LINKS as socialLinks,
  PROFESSIONAL_LINKS as professionalLinks,
} from "./profile";
import type { FeatureFlag } from "@config/features";
import type { CourseStatus } from "./teaching";
import type { LifeCategory } from "./life";
import type { MemberRole } from "./group";
import type { TimelineCategory } from "./timeline";

type PreservedStrings =
  FeatureFlag | CourseStatus | LifeCategory | MemberRole | TimelineCategory;

export const CONTENT = {
  home,
  about,
  research,
  publications,
  projects,
  education,
  timeline,
  life,
  lifeCategories,
  learning,
  media,
  teaching,
  group,
  contact,
  profileLinks,
  socialLinks,
  professionalLinks,
};

type Widen<T> = T extends PreservedStrings
  ? T
  : T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends readonly (infer Item)[]
          ? readonly Widen<Item>[]
          : T extends object
            ? { [Key in keyof T]: Widen<T[Key]> }
            : T;

export type LocaleContent = Widen<typeof CONTENT>;
