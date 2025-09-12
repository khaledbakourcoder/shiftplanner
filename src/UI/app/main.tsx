import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import routes from "../route/main.route.tsx";
import {Provider} from "react-redux";
import {store} from "./store.ts";



createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <StrictMode>
            <RouterProvider router={routes} />
        </StrictMode>,
    </Provider>


)
