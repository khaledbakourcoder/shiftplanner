
// src/UI/components/Layout.tsx
import {  Outlet } from "react-router-dom";
import {Header,Sidebar} from "../../components/Layout";

import LayoutData from "./data.tsx";


export default function Page() {
    const {sideBar}=LayoutData

    return (
        <div className="flex h-screen">


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
    );
}
