import type {IconType} from "react-icons";

export type LayoutNavLink = { path: string; name: string; icon: IconType };

export  type LayoutProps = {
    sideBar: {
        appName:string
        links: LayoutNavLink[]
    }
}