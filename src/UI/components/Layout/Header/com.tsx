import {useUi} from "../../../features/ui/useUI.tsx";
import {VscLayoutSidebarLeft, VscLayoutSidebarRight} from "react-icons/vsc";

export default function Header(){
   const {sidebarOpen,toggle,pageTitle}=useUi()
    return(
        <header className="flex items-center justify-between bg-gray-200 p-4 shadow-sm">

                 <span className={"text-3xl cursor-pointer"}>
                     {sidebarOpen
                         ? <VscLayoutSidebarLeft onClick={()=> toggle()} />
                         : <VscLayoutSidebarRight onClick={()=> toggle()} />
                     }
                 </span>
            <h1 className="font-bold" >
                {pageTitle}
            </h1 >
        </header>
    )
}