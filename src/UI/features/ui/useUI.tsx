import {useAppDispatch,useAppSelector} from "../../app/hooks.ts";
import {setPageTitle, toggleSidebar} from "./UIslice.ts";

export function useUi(){
    const sidebarOpen= useAppSelector(state=> state.ui.sidebarOpen)
    const pageTitle= useAppSelector(state=> state.ui.pageTitle)


    const dispatch=useAppDispatch()



    return{
        sidebarOpen,
        toggle:()=>dispatch(toggleSidebar()),

        pageTitle,
        setPageTitle:(v:string)=>dispatch(setPageTitle(v))
    }

}