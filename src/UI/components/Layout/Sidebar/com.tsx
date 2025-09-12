// Sidebar.tsx
import type { LayoutNavLink } from "../../../pages/Layout/type";
import {SideBarNavElement} from "../../UI";
import {useUi} from "../../../features/ui/useUI.tsx";

type Props = {
    links: LayoutNavLink[];
    appName:string
    className?: string;
};

export default function Sidebar({ links, appName,className }: Props) {
    const {sidebarOpen}=useUi()
    return (
        <aside
            className={`h-full bg-gray-100 shadow-lg overflow-hidden
                  transition-all duration-300
                  ${sidebarOpen ? "w-64 opacity-100" : "w-0 opacity-0"}
                  ${className ?? ""}`}
            aria-hidden={!sidebarOpen}
        >
            <h1 className="text-xl text-center p-3.5 font-bold tracking-wider">{appName}</h1>

            <nav className="p-4 space-y-2">
                {links.map((link) => (
                    <SideBarNavElement key={link.path} path={link.path} icon={link.icon}>
                        {link.name}
                    </SideBarNavElement>
                ))}
            </nav>
        </aside>
    );
}
