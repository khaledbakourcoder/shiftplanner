import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    toggleSidebar,
    setPageTitle as setPageTitleAction,
    openSmallWindow as openSmallWindowAction,
    closeSmallWindow as closeSmallWindowAction,
    setSmallWindowContent,
} from "./UIslice"; // <- auf korrekten Dateinamen achten!
import type { ReactNode } from "react";

export function useUi() {
    const dispatch = useAppDispatch();

    const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen);
    const pageTitle = useAppSelector((state) => state.ui.pageTitle);
    
    const smallWindow = useAppSelector((state) => state.ui.smallWindow);
    const smallWindowIsOpen= smallWindow.open
    const smallWindowContent= smallWindow.content


    const toggle = useCallback(() => {
        dispatch(toggleSidebar());
    }, [dispatch]);

    const setTitle = useCallback((v: string) => {
        dispatch(setPageTitleAction(v));
    }, [dispatch]);

    // content ist optional: öffnet auch ein leeres Fenster, wenn nichts übergeben wird
    const openSmallWindow = useCallback((content?: ReactNode) => {
        // falls dein Slice eine Payload erwartet, kannst du content ?? null übergeben
        dispatch(openSmallWindowAction(content ?? null));
    }, [dispatch]);

    const closeSmallWindow = useCallback(() => {
        dispatch(closeSmallWindowAction());
    }, [dispatch]);

    const changeSmallWindow = useCallback((content: ReactNode) => {
        dispatch(setSmallWindowContent(content));
    }, [dispatch]);

    return {
        sidebarOpen,
        toggle,

        pageTitle,
        setPageTitle: setTitle,

        smallWindowContent,
        smallWindowIsOpen,
        openSmallWindow,
        closeSmallWindow,
        changeSmallWindow,
    };
}
