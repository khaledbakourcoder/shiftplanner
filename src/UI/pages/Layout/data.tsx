// src/UI/layoutData.ts
import { CiHome } from "react-icons/ci";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbCalendarTime, TbClipboardList } from "react-icons/tb";
import type {LayoutProps} from "./type.ts";


const LayoutData: LayoutProps = {
    sideBar: {
        appName:"Shiftplanner",
        links: [
            { path: "/",          name: "Start",       icon: CiHome },
            { path: "employees", name: "Mitarbeiter", icon: HiMiniUserGroup },
            { path: "shifts",    name: "Schichten",   icon: TbCalendarTime },
            { path: "plan",      name: "Plan",        icon: TbClipboardList },
        ],
    },
};

export default LayoutData;
