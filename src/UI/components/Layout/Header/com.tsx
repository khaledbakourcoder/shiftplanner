import { useUi } from "../../../features/ui/useUI.tsx";
import {
    VscLayoutSidebarLeft,
    VscLayoutSidebarRight,
} from "react-icons/vsc";

export default function Header() {
    const { sidebarOpen, toggle, pageTitle } = useUi();

    return (
        <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3 shadow-sm">
            {/* Left: Back + Sidebar Toggle */}
            <div className="flex items-center gap-3">
                {/* Zurück-Pfeil */}


                {/* Sidebar Toggle */}
                <button
                    onClick={() => toggle()}
                    className="text-gray-600 hover:text-[#F39200] transition text-2xl"
                >
                    {sidebarOpen ? <VscLayoutSidebarLeft /> : <VscLayoutSidebarRight />}
                </button>
            </div>

            {/* Center: Page Title */}
            <h1 className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
                {pageTitle}
            </h1>

            {/* Right: Placeholder für User/Actions */}
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0E5A3C] text-white text-sm font-bold">
                    U
                </div>
            </div>
        </header>
    );
}
