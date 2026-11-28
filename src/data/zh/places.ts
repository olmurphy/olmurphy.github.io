import type { PlacesContent } from "../en/places";

export const PLACES_CONTENT: PlacesContent = {
  title: "足迹地图",
  subtitle: "我曾生活、求学或旅行过的国家与省市。",
  searchPlaceholder: "搜索全球 240+ 个国家或地区...",
  clearSearchAria: "清除搜索",
  visitedGroupLabel: "已到访国家",
  allCountriesGroupLabel: "全部国家与地区",
  noSearchResults: "未找到匹配的国家或地区。",
  worldLabel: "全球",
  resetLabel: "重置视图",
  visitedBadge: "到访过",
  unvisitedBadge: "暂未到访",
  unvisitedNote:
    "暂未到访此地——可通过上方搜索框探索其他国家，或点击地图上高亮的区域查看详情。",
  allSubdivisionsLabel: "全部地区",
  subdivisionsHeading: "州与省级行政区",
  presentLabel: "至今",
  currentResidenceLabel: "当前常驻",
  visitSingular: "次到访",
  visitPlural: "次到访",
  instructions:
    "在上方搜索任意国家，滚轮或双指缩放地图，或点击高亮国家下钻查看州/省详情。",
  directoryHeading: "已到访国家与地区列表",
  directorySub: "点击任意国家或省市可在地图上定位并查看多次到访时间线",
  viewOnMap: "在地图中查看 →",
  stats: {
    countries: "个国家",
    subdivisions: "个州 / 省级行政区",
    visits: "段旅居与到访记录",
    cities: "座城市",
  },
  countries: [
    {
      isoNumeric: "840",
      name: "美国",
      statusLabel: "成长与求学 · 常住地",
      period: "1999 – 2025",
      summary:
        "在美国长大，本科就读于贝勒大学数学与计算机科学专业，并在纽约开启软件工程师职业生涯。",
      subdivisions: [
        {
          name: "Texas",
          displayName: "德克萨斯州",
          visits: [
            {
              start: "2026年12月",
              end: "2026年12月",
              kind: "trip",
              role: "旅行",
              cities: ["达拉斯"],
              note: "假期经达拉斯重返德克萨斯州。",
            },
            {
              start: "2018年8月",
              end: "2022年5月",
              kind: "stay",
              role: "本科求学",
              cities: ["韦科"],
              note: "贝勒大学数学与计算机科学理学学士（GPA 3.9），担任《数学基础》课程本科助教并入选院长荣誉名单。",
            },
          ],
        },
        {
          name: "New York",
          displayName: "纽约州 (New York)",
          visits: [
            {
              start: "2022年6月",
              end: "2025年9月",
              kind: "stay",
              role: "职业生涯",
              cities: ["纽约市"],
              note: "在 IBM Consulting 担任软件工程师，负责高吞吐企业后端系统与分布式服务。",
            },
          ],
        },
        {
          name: "New Jersey",
          displayName: "新泽西州",
          visits: [
            {
              start: "2024年",
              end: "2025年9月",
              kind: "stay",
              role: "居住",
              cities: ["联合市"],
              note: "迁居上海前居住于哈德逊河畔的联合市。",
            },
          ],
        },
        {
          name: "Georgia",
          displayName: "佐治亚州",
          visits: [
            {
              start: "2025年8月",
              isCurrent: true,
              kind: "stay",
              role: "研究生学习",
              cities: ["亚特兰大"],
              note: "佐治亚理工学院计算机科学硕士项目（机器学习方向）。",
            },
          ],
        },
        {
          name: "California",
          displayName: "加利福尼亚州",
          visits: [
            {
              start: "2026年12月",
              end: "2026年12月",
              kind: "trip",
              role: "旅行",
              cities: ["洛杉矶"],
              note: "到访洛杉矶并经洛杉矶国际机场中转。",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "156",
      name: "中国",
      statusLabel: "当前常驻 · 学习与工作",
      period: "2024年8月，2025年9月 – 至今",
      summary:
        "在北京和上海完成密集汉语学习后，目前定居上海担任 AI 与软件工程师。",
      subdivisionsUrl:
        "https://cdn.jsdelivr.net/gh/longwosion/geojson-map-china@master/china.json",
      subdivisions: [
        {
          name: "上海市",
          displayName: "上海市",
          visits: [
            {
              start: "2025年9月",
              isCurrent: true,
              kind: "stay",
              role: "常驻城市与工作",
              cities: ["上海"],
              note: "常驻城市；于上海交通大学进修两个学期汉语（2025年9月–2026年6月），任职于 Global Business AI (GBizAI)，并加入 Move Crew 跑团。",
            },
          ],
        },
        {
          name: "北京市",
          displayName: "北京市",
          visits: [
            {
              start: "2025年8月",
              end: "2025年8月",
              kind: "trip",
              role: "旅行",
              cities: ["北京"],
              note: "重访北京，徒步长城并参观天坛祈年殿。",
            },
            {
              start: "2024年8月",
              end: "2024年8月",
              kind: "stay",
              role: "语言沉浸",
              cities: ["北京"],
              note: "于北京语言大学参加为期一个月的汉语强化项目。",
            },
          ],
        },
        {
          name: "湖北省",
          displayName: "湖北省",
          visits: [
            {
              start: "2026年10月",
              end: "2026年10月",
              kind: "trip",
              role: "旅行",
              cities: ["宜昌"],
              note: "参观横跨长江的三峡大坝。",
            },
          ],
        },
      ],
    },
  ],
};
