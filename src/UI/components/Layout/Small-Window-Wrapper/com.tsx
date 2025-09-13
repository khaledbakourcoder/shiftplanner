import React from "react";
import {useUi} from "../../../features/ui/useUI.tsx";

type Props = {
    children: React.ReactNode;
};

export default function SmallWindowWrapper({ children }: Props) {
 const {closeSmallWindow}=useUi()
    return (
        <section
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
        >
            {/* Overlay */}
            <div
                onClick={() => closeSmallWindow()}
                className="absolute inset-0 bg-black/60 backdrop-blur-[1px] animate-fade-in"
            />

            {/* Panel */}
            <div
                className="relative w-full max-w-screen-md mx-4 rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-scale-in overflow-hidden"
            >
                <div className=" max-h-[65vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </section>
    );
}
