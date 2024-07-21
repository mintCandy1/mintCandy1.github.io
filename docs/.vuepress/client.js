import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";

// 引入想要使用的图标


import {
    FaFortAwesome,
    FaSatelliteDish,
    FaTag,
    OiRocket,
    RiLinkM,
    RiGithubFill,
    RiLinkedinBoxFill,
    RiFacebookBoxFill,
    RiTwitterFill,
    RiZhihuLine,
    HiMail,
    FaPaw,
    AiCv,
    AiGoogleScholarSquare,
    RiBookReadLine, MdBookmarkborder
} from "oh-vue-icons/icons";

addIcons(
    RiBookReadLine,
    MdBookmarkborder,
    FaFortAwesome,
    FaSatelliteDish,
    FaTag,
    OiRocket,
    RiLinkM,
    RiGithubFill,
    RiLinkedinBoxFill,
    RiFacebookBoxFill,
    RiTwitterFill,
    RiZhihuLine,
    HiMail,
    FaPaw,
    AiCv,
    AiGoogleScholarSquare
);

export default defineClientConfig({});
