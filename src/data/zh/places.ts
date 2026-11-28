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
      isoNumeric: "124",
      name: "加拿大",
      statusLabel: "到访过 · 旅行",
      period: "2025年7月",
      summary: "2025年7月前往加拿大多伦多探望朋友并游览当地。",
      subdivisionsUrl:
        "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/canada.geojson",
      subdivisions: [
        {
          name: "Ontario",
          displayName: "安大略省",
          visits: [
            {
              start: "2025年7月12日",
              end: "2025年7月20日",
              kind: "trip",
              role: "旅行",
              cities: ["多伦多"],
              note: "前往多伦多看望朋友并游览当地。",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "044",
      name: "巴哈马",
      statusLabel: "到访过 · 旅行",
      period: "2024年12月",
      summary: "2024年12月圣诞假期前往巴哈马旅行。",
      subdivisions: [
        {
          name: "New Providence",
          displayName: "新普罗维登斯岛（拿骚）",
          visits: [
            {
              start: "2024年12月22日",
              end: "2024年12月28日",
              kind: "trip",
              role: "圣诞假期旅行",
              cities: ["拿骚"],
              note: "圣诞节期间前往巴哈马度假旅行。",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "428",
      name: "拉脱维亚",
      statusLabel: "到访过 · 旅行",
      period: "2024年7月",
      summary: "2024年7月到访拉脱维亚，在里加度过了一个上午。",
      subdivisions: [
        {
          name: "Riga",
          displayName: "里加",
          visits: [
            {
              start: "2024年7月31日",
              end: "2024年7月31日",
              kind: "trip",
              role: "旅行",
              cities: ["里加"],
              note: "在里加市区漫步游览了一个上午。",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "578",
      name: "挪威",
      statusLabel: "到访过 · 旅行",
      period: "2024年7月",
      summary: "2024年7月前往挪威奥斯陆游览一日。",
      subdivisionsUrl:
        "https://raw.githubusercontent.com/robhop/fylker-og-kommuner/main/Fylker-S.geojson",
      subdivisions: [
        {
          name: "Oslo",
          displayName: "奥斯陆",
          visits: [
            {
              start: "2024年7月30日",
              end: "2024年7月30日",
              kind: "trip",
              role: "旅行",
              cities: ["奥斯陆"],
              note: "在奥斯陆观光游览一日。",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "826",
      name: "英国",
      statusLabel: "到访过 · 旅行",
      period: "2020年2月",
      summary:
        "2020年2月前往英国伦敦与吉尔福德，观看哥哥在吉尔福德演艺学院出演的音乐剧《俄克拉荷马！》。",
      subdivisionsUrl:
        "https://raw.githubusercontent.com/martinjc/UK-GeoJSON/master/json/administrative/eng/lad.json",
      subdivisions: [
        {
          name: "Guildford",
          displayName: "吉尔福德（萨里郡）",
          visits: [
            {
              start: "2020年2月19日",
              end: "2020年2月23日",
              kind: "trip",
              role: "探亲与旅行",
              cities: ["吉尔福德"],
              note: "前往萨里大学吉尔福德演艺学院（Guildford School of Acting），观看哥哥出演的音乐剧《俄克拉荷马！》（Oklahoma!）。",
            },
          ],
        },
        {
          name: "City of London",
          displayName: "伦敦",
          visits: [
            {
              start: "2020年2月19日",
              end: "2020年2月23日",
              kind: "trip",
              role: "旅行",
              cities: ["伦敦"],
              note: "在英国旅行期间游览伦敦。",
            },
          ],
        },
      ],
    },
    {
      isoNumeric: "484",
      name: "墨西哥",
      statusLabel: "到访过 · 旅行",
      period: "2019年3月、2019年12月、2020年3月",
      summary:
        "2019年圣诞节与家人前往洛斯卡沃斯度假，并于2019年和2020年春假期间两次到访边境城市蒂华纳。",
      subdivisionsUrl:
        "https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json",
      subdivisions: [
        {
          name: "Baja California",
          displayName: "下加利福尼亚州",
          visits: [
            {
              start: "2020年3月",
              end: "2020年3月",
              kind: "trip",
              role: "春假旅行",
              cities: ["蒂华纳"],
              note: "疫情全面暴发前夕，春假第二次到访蒂华纳。",
            },
            {
              start: "2019年3月",
              end: "2019年3月",
              kind: "trip",
              role: "春假旅行",
              cities: ["蒂华纳"],
              note: "贝勒大学本科期间春假前往蒂华纳旅行。",
            },
          ],
        },
        {
          name: "Baja California Sur",
          displayName: "南下加利福尼亚州",
          visits: [
            {
              start: "2019年12月23日",
              end: "2019年12月29日",
              kind: "trip",
              role: "圣诞假期旅行",
              cities: ["洛斯卡沃斯"],
              note: "圣诞节期间与家人前往洛斯卡沃斯度假。",
            },
          ],
        },
      ],
    },
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
            {
              start: "2021年4月9日",
              end: "2021年4月11日",
              kind: "trip",
              role: "户外与旅行",
              cities: ["Concan", "Garner State Park"],
              note: "与本科室友及其他朋友前往加纳州立公园（Garner State Park）徒步与周末放松。",
            },
            {
              start: "2020年10月2日",
              end: "2020年10月5日",
              kind: "trip",
              role: "旅行",
              cities: ["Hallsville"],
              note: "前往东德克萨斯州 Hallsville，拜访本科室友 Cade 的家人。",
            },
          ],
        },
        {
          name: "New York",
          displayName: "纽约州",
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
            {
              start: "2025年5月16日",
              end: "2025年5月18日",
              kind: "trip",
              role: "营会与退修",
              cities: ["黑门山"],
              note: "前往圣克鲁兹山脉的黑门山营地参加华人夏令营。",
            },
            {
              start: "2025年5月5日",
              end: "2025年6月1日",
              kind: "stay",
              role: "远程办公与旅行",
              cities: ["旧金山", "圣何塞", "硅谷"],
              note: "在旧金山、圣何塞及硅谷沿线多个城市远程办公与探索近一个月，期间看望朋友并游览湾区。",
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
          name: "广东省",
          displayName: "广东省",
          visits: [
            {
              start: "2026年11月22日",
              end: "2026年11月22日",
              kind: "trip",
              role: "旅行",
              cities: ["深圳"],
              note: "到访深圳，与好友李堃、李堃的妻子及家人相聚。",
            },
            {
              start: "2026年11月19日",
              end: "2026年11月22日",
              kind: "trip",
              role: "旅行",
              cities: ["广州"],
              note: "前往广州游览广州塔，并与好友李堃、李堃的妻子及家人相聚。",
            },
          ],
        },
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
          name: "湖北省",
          displayName: "湖北省",
          visits: [
            {
              start: "2026年10月4日",
              end: "2026年10月4日",
              kind: "trip",
              role: "旅行",
              cities: ["宜昌"],
              note: "前往宜昌参观横跨长江的三峡大坝。",
            },
            {
              start: "2026年10月1日",
              end: "2026年10月5日",
              kind: "trip",
              role: "探亲与旅行",
              cities: ["武汉"],
              note: "国庆假期在武汉拜访伴侣家人并游览当地。",
            },
          ],
        },
        {
          name: "浙江省",
          displayName: "浙江省",
          visits: [
            {
              start: "2026年3月14日",
              end: "2026年3月14日",
              kind: "trip",
              role: "商务考察",
              cities: ["义乌"],
              note: "前往义乌国际商贸城（二区）实地考察跨境电商选品与供应链。",
            },
          ],
        },

        {
          name: "香港特别行政区",
          displayName: "香港特别行政区",
          visits: [
            {
              start: "2026年2月19日",
              end: "2026年2月22日",
              kind: "trip",
              role: "旅行",
              cities: ["香港"],
              note: "前往香港旅游。",
            },
          ],
        },
        {
          name: "澳门特别行政区",
          displayName: "澳门特别行政区",
          visits: [
            {
              start: "2026年2月22日",
              end: "2026年2月22日",
              kind: "trip",
              role: "旅行",
              cities: ["澳门"],
              note: "前往澳门一日游。",
            },
          ],
        },

        {
          name: "江苏省",
          displayName: "江苏省",
          visits: [
            {
              start: "2025年11月15日",
              end: "2025年11月16日",
              kind: "trip",
              role: "旅行",
              cities: ["苏州"],
              note: "周末前往苏州旅游。",
            },
          ],
        },
        {
          name: "山西省",
          displayName: "山西省",
          visits: [
            {
              start: "2024年9月1日",
              end: "2024年9月8日",
              kind: "trip",
              role: "旅行",
              cities: ["太原"],
              note: "与朋友一同前往太原旅行并看望她的家人。",
            },
          ],
        },
        {
          name: "北京市",
          displayName: "北京市",
          visits: [
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
      ],
    },
  ],
};
