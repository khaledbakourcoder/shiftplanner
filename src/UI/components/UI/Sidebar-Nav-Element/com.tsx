import { Link } from "react-router-dom";
import type { IconType } from "react-icons";
import React from "react";
import {useUi} from "../../../features/ui/useUI.tsx";

type Props = {
    children: React.ReactNode ;
    path: string;
    icon: IconType;          // z. B. FaHome
    className?: string;
};


export default function SideBarNavElement({ children, path, icon: Icon, className }: Props) {
  const {setPageTitle}=useUi()
    return (
        <Link
            to={path}
            className={`block rounded px-3 py-2 hover:bg-primary-500 hover:text-neutral-50 transition${
                className ? ` ${className}` : ""
            }`}
            onClick={()=>setPageTitle(children as string)}
        >
      <span className="inline-flex items-center gap-2">
        <Icon className="h-5 w-5" />
        <span>{children}</span>
      </span>
        </Link>
    );
}
