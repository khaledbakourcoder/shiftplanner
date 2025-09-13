
// src/UI/components/Layout.tsx
import {  Outlet } from "react-router-dom";
import {Header, Sidebar, SmallWindowWrapper} from "../../components/Layout";

import LayoutData from "./data.tsx";
import {useUi} from "../../features/ui/useUI.tsx";


export default function MainPage() {
    const {sideBar}=LayoutData
const {smallWindowIsOpen,smallWindowContent}=useUi()
    return (
        <div className="flex h-screen overflow-hidden ">
            {/* Small window */}
            {smallWindowIsOpen &&  <SmallWindowWrapper>{smallWindowContent}</SmallWindowWrapper>}


            {/* SIDEBAR */}
            <Sidebar links={sideBar.links}  appName={sideBar.appName}  />

            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Header/>
                {/* Page Content */}
                <main className="flex-1 overflow-auto p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
