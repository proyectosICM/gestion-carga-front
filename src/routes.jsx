import { PanelCarriles } from "./pages/panelCarriles";
import { PanelRegistroCarga } from "./pages/panelRegistrosCarga";


export const routes = [
    { path: "/", component: <PanelCarriles /> },
    { path: "/registro-carga", component: <PanelRegistroCarga /> },
]