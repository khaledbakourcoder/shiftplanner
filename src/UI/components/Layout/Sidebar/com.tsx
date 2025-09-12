import type { LayoutNavLink } from "../../../pages/Layout/type";
import { SideBarNavElement } from "../../UI";
import { useUi } from "../../../features/ui/useUI.tsx";
import { FaGasPump } from "react-icons/fa";

type Props = {
    links: LayoutNavLink[];
    appName: string;
    className?: string;
};

export default function Sidebar({ links, appName, className }: Props) {
    const { sidebarOpen } = useUi();

    return (
        <aside
            className={`h-full text-gray-100 flex flex-col shadow-2xl transition-all duration-300
        ${sidebarOpen ? "w-64 opacity-100" : "w-0 opacity-0"}
        ${className ?? ""}`}
            aria-hidden={!sidebarOpen}
            style={{
                background: "linear-gradient(180deg, #0B3D2E 0%, #0E5A3C 60%, #0B3D2E 100%)",
            }}
        >
            {/* Branding */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
                <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "#F39200", color: "#0B3D2E" }}
                >
                    <FaGasPump />
                </div>
                <h1 className="text-base font-semibold tracking-wide uppercase text-white">
                    {appName}
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-3 space-y-1">
                {links.map((link) => (
                    <SideBarNavElement
                        key={link.path}
                        path={link.path}
                        icon={link.icon}
                    >
                        {link.name}
                    </SideBarNavElement>
                ))}
            </nav>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-white/10 text-xs text-white/70">
                © {new Date().getFullYear()} {appName}
            </div>
        </aside>
    );
}
