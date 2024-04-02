import {SidebarConfig4Multiple} from "vuepress/config";

import compositionPrinciple from "./sidebars/fundmental/compositionPrinciple";
// @ts-ignore
export default {
    //基本功
    "/docs/基本功/计算机组成原理/": compositionPrinciple,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
