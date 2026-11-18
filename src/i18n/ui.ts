import type { Locale } from "./config";
import type { NavGroup } from "@config/site";

export interface UiStrings {
  siteName: string;
  tagline: string;
  skipToContent: string;
  primaryNavAria: string;
  mobileNavAria: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  menuButton: string;
  closeButton: string;
  appearanceLabel: string;
  darkMode: string;
  lightMode: string;
  themeToggleAria: string;
  languageSwitchLabel: string;
  languageSwitchAria: string;
  navGroups: Record<NavGroup, string>;
  navLabels: Record<string, string>;
  footerSocialHeading: string;
  footerProfessionalHeading: string;
  scanWithWechat: string;
}

export const UI: Record<Locale, UiStrings> = {
  en: {
    siteName: "Owen Li Murphy",
    tagline: "Deep learning · Computational biology · Multi-agent systems",
    skipToContent: "Skip to content",
    primaryNavAria: "Primary navigation",
    mobileNavAria: "Mobile navigation",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    menuButton: "Menu",
    closeButton: "Close",
    appearanceLabel: "Appearance",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    themeToggleAria: "Switch between light and dark mode",
    languageSwitchLabel: "中文",
    languageSwitchAria: "切换到简体中文",
    navGroups: {
      Overview: "Overview",
      Work: "Work",
      Background: "Background",
    },
    navLabels: {
      "/": "Home",
      "/about": "About",
      "/timeline": "Timeline",
      "/life": "Life",
      "/research": "Research",
      "/publications": "Publications",
      "/projects": "Projects",
      "/teaching": "Teaching",
      "/group": "Group",
      "/education": "Education & Experience",
      "/learning": "Learning",
      "/media": "Media",
      "/contact": "Contact",
    },
    footerSocialHeading: "Social",
    footerProfessionalHeading: "Professional",
    scanWithWechat: "Scan with WeChat",
  },
  zh: {
    siteName: "Owen Li Murphy · 李晓党",
    tagline: "深度学习 · 计算生物学 · 多智能体系统",
    skipToContent: "跳至正文",
    primaryNavAria: "主导航",
    mobileNavAria: "移动端导航",
    openMenuLabel: "打开导航菜单",
    closeMenuLabel: "关闭导航菜单",
    menuButton: "菜单",
    closeButton: "关闭",
    appearanceLabel: "外观模式",
    darkMode: "深色模式",
    lightMode: "浅色模式",
    themeToggleAria: "切换浅色与深色模式",
    languageSwitchLabel: "EN",
    languageSwitchAria: "Switch to English",
    navGroups: {
      Overview: "概览",
      Work: "科研与项目",
      Background: "背景经历",
    },
    navLabels: {
      "/": "首页",
      "/about": "关于我",
      "/timeline": "时间线",
      "/life": "生活随记",
      "/research": "研究方向",
      "/publications": "论文发表",
      "/projects": "工程与科研项目",
      "/teaching": "教学经历",
      "/group": "课题组",
      "/education": "教育与工作经历",
      "/learning": "自主研习",
      "/media": "媒体与科普",
      "/contact": "联系方式",
    },
    footerSocialHeading: "社交平台",
    footerProfessionalHeading: "学术与职业主页",
    scanWithWechat: "微信扫码关注",
  },
};
