import { LIFE_CONTENT as englishLife } from "../en/life";
import type { LifeContent, LifeCategoryMeta } from "../en/life";

export const LIFE_CATEGORIES: readonly LifeCategoryMeta[] = [
  { id: "places", label: "旅行" },
  { id: "active", label: "运动" },
  { id: "making", label: "创作" },
  { id: "everyday", label: "日常" },
];

const photoTranslations: Record<
  string,
  {
    alt: string;
    caption: string;
    meta: string;
    captionParts?: LifeContent["photos"][number]["captionParts"];
  }
> = {
  "Spending time with Li Kun and his family in Guangzhou": {
    alt: "在广州与李堃及其家人相聚",
    caption: "在广州拜访李堃及其家人",
    meta: "广州 · 2026年11月",
    captionParts: [
      { text: "在广州拜访" },
      {
        text: "李堃",
        href: "https://www.linkedin.com/in/mac-li-16789b175/",
      },
      { text: "及其家人" },
    ],
  },
  "View of the Three Gorges Dam spanning the Yangtze River in Hubei, China": {
    alt: "中国湖北横跨长江的三峡大坝",
    caption:
      "三峡大坝——全球最大的水电站，32 台主力机组总装机容量达 22,500 兆瓦",
    meta: "湖北宜昌 · 2026年10月",
  },
  "Group photo after a Sunday morning run with Move Crew run club in Shanghai":
    {
      alt: "在上海与 Move Crew 跑团完成周日晨跑后的合影",
      caption: "与 Move Crew 的周日跑步",
      meta: "上海 · 2026年6月",
    },
  "Evening skyline view along the Bund in Shanghai with Daniel Kaijzer and Iris":
    {
      alt: "与 Daniel Kaijzer 和 Iris 在上海外滩欣赏夜景",
      caption: "与 Daniel Kaijzer 和 Iris 共赏外滩夜景",
      meta: "上海 · 2026年3月",
      captionParts: [
        { text: "与 " },
        {
          text: "Daniel Kaijzer",
          href: "https://www.linkedin.com/in/danielkaijzer/",
        },
        { text: " 和 Iris 共赏外滩夜景" },
      ],
    },
  "View along the Great Wall of China winding over green mountain ridges near Beijing":
    {
      alt: "北京附近蜿蜒于青山之上的长城景色",
      caption: "语言沉浸学习期间徒步长城",
      meta: "北京 · 2024年8月",
    },
  "Hall of Prayer for Good Harvests at the Temple of Heaven in Beijing": {
    alt: "北京天坛祈年殿",
    caption: "语言沉浸学习期间参观天坛",
    meta: "北京 · 2024年8月",
  },
  "Celebrating Hendry's birthday in New York City": {
    alt: "在纽约市为 Hendry 庆祝生日",
    caption: "在纽约为 Hendry 庆祝生日",
    meta: "纽约市 · 2024年",
    captionParts: [
      { text: "在纽约为 " },
      {
        text: "Hendry",
        href: "https://www.linkedin.com/in/hendrychendrawan/",
      },
      { text: " 庆祝生日" },
    ],
  },
};

export const LIFE_CONTENT: LifeContent = {
  title: "生活随记",
  subtitle: "实验室之外的影像：旅途、运动、创作与日常生活。",
  intro:
    "工作和课程之外，我大多在周末与 Move Crew 沿上海滨江跑步、骑公路车，或折腾硬件与 3D 打印作品。这些照片记录了沿途的城市、训练日常与朋友。",
  photos: englishLife.photos.map((photo) => {
    const translations = photoTranslations[photo.alt];
    if (!translations) {
      throw new Error(`Missing Chinese life photo translation: ${photo.alt}`);
    }
    return {
      ...photo,
      ...translations,
    };
  }),
};
