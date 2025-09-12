import { useEffect, useMemo } from "react";
import { TiDelete } from "react-icons/ti";
import { useUi } from "../../../features/ui/useUI";

type Props = {
    title?: string;
    children?: React.ReactNode;
    dismissible?: boolean;
    size?: "sm" | "md" | "lg";
    /** optional: eigener Footer (z. B. Buttons) */
    footer?: React.ReactNode;
};

export default function SmallWindowWrapper({
                                               title,
                                               children,
                                               footer,
                                               dismissible = true,
                                               size = "md",
                                           }: Props) {
    const { closeSmallWindow } = useUi();

    // ESC schließt
    useEffect(() => {
        if (!dismissible) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeSmallWindow();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [dismissible, closeSmallWindow]);

    const maxW = useMemo(() => {
        switch (size) {
            case "sm":
                return "max-w-md";
            case "lg":
                return "max-w-3xl";
            default:
                return "max-w-xl";
        }
    }, [size]);

    return (
        <section
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "sw-title" : undefined}
        >
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-[1px] ${
                    dismissible ? "cursor-pointer" : ""
                } animate-fade-in`}
                onClick={() => dismissible && closeSmallWindow()}
            />

            {/* Panel */}
            <div
                className={`relative w-full ${maxW} mx-4 rounded-2xl bg-white shadow-2xl ring-1 ring-black/5
                    animate-scale-in overflow-hidden`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b">
                    <h2 id="sw-title" className="text-base font-semibold text-gray-900">
                        {title ?? ""}
                    </h2>
                    <button
                        onClick={() => dismissible && closeSmallWindow()}
                        className={`p-2 rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 ${
                            dismissible ? "" : "opacity-50 pointer-events-none"
                        }`}
                        aria-label="Schließen"
                        title="Schließen"
                    >
                        <TiDelete className="text-xl" />
                    </button>
                </div>

                {/* Body (scrollbar nur hier) */}
                <div className="px-5 py-5 max-h-[65vh] overflow-y-auto">
                    {children}
                </div>

                {/* Footer (sticky) */}
                {footer && (
                    <div className="sticky bottom-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-t px-5 py-4">
                        {footer}
                    </div>
                )}
            </div>
        </section>
    );
}

/* Tailwind animations (z. B. in globals.css hinzufügen)
@keyframes fade-in{from{opacity:0}to{opacity:1}}
@keyframes scale-in{from{opacity:0; transform:scale(.98)}to{opacity:1; transform:scale(1)}}
.animate-fade-in{animation:fade-in .15s ease-out both}
.animate-scale-in{animation:scale-in .18s ease-out both}
*/
