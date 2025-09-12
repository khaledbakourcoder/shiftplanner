// src/UI/route/main.route.tsx
import { createHashRouter } from "react-router-dom";
import {Layout, HomePage, EmployeesPage, ShiftsPage, PlanPage} from "../pages";



const routes = createHashRouter([
    {
        path: "/",
        element: < Layout/>,     // Layout
        children: [

            { index: true, element: <HomePage /> },  // / zeigt Home
            { path: "employees", element:<EmployeesPage/> }, // Beispiel-Route
            { path: "shifts", element:<ShiftsPage/> }, // Beispiel-Route
            { path: "plan", element:<PlanPage/> }, // Beispiel-Route
        ],
    },
]);

export default routes;
