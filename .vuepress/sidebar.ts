import {SidebarConfig4Multiple} from "vuepress/config";

import javaSidebar from './sidebars/backend/javaSidebars';

// @ts-ignore
export default {
    "/docs/后端/Java/": javaSidebar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
