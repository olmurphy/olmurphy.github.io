import type { PlacesContent } from "../en/places";

export const PLACES_CONTENT: PlacesContent = {
  title: "足迹地图",
  subtitle: "我曾生活、求学或旅行过的国家与省市。",
  instructions: "滚轮或双指缩放、拖拽平移，点击高亮国家可下钻查看州/省详情。",
  resetLabel: "重置视图",
  worldLabel: "全球",
  visitedBadge: "到访过",
  subdivisionsHeading: "州 / 省级行政区",
  countries: [
    {
      isoNumeric: "840",
      name: "美国",
      summary:
        "在美国长大，本科就读于贝勒大学，并在纽约开启软件工程师职业生涯。",
      subdivisions: [
        {
          name: "Texas",
          cities: ["韦科 (Waco)", "达拉斯 (Dallas)"],
          note: "贝勒大学数学与计算机科学理学学士（2018–2022）。",
        },
        {
          name: "New York",
          cities: ["纽约 (New York City)"],
          note: "在 IBM Consulting 担任软件工程师（2022–2025）。",
        },
        {
          name: "New Jersey",
          note: "迁居上海前曾居住于新泽西州。",
        },
        {
          name: "Georgia",
          cities: ["亚特兰大 (Atlanta)"],
          note: "佐治亚理工学院计算机科学硕士项目。",
        },
        {
          name: "California",
          cities: ["洛杉矶 (Los Angeles)"],
        },
      ],
    },
    {
      isoNumeric: "156",
      name: "中国",
      summary: "完成密集汉语学习后，目前定居上海担任 AI 与软件工程师。",
      subdivisionsUrl:
        "https://cdn.jsdelivr.net/gh/longwosion/geojson-map-china@master/china.json",
      subdivisions: [
        {
          name: "上海市",
          cities: ["上海"],
          note: "常驻城市；于上海交通大学进修汉语，任职于 GBizAI，并加入 Move Crew 跑团。",
        },
        {
          name: "北京市",
          cities: ["北京"],
          note: "于北京语言大学参加汉语强化项目，游览长城与天坛。",
        },
        {
          name: "湖北省",
          cities: ["宜昌"],
          note: "参观三峡大坝（2026年10月）。",
        },
      ],
    },
  ],
};
