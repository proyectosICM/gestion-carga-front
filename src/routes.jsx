
import { Login } from "./pages/login/login";
import { Redirect } from "./pages/login/redirect";
import { PanelCarriles } from "./pages/panelCarriles";
import { PanelRegistroCarga } from "./pages/panelRegistrosCarga";
import { PanelSedes } from "./pages/panelSedes";


export const routes = [
    { path: "/login", component: <Login /> },
    { path: "/", component: <PanelSedes /> },
    { path: "/sede/:nombre", component: <PanelCarriles /> },
    { path: "/registro-carga", component: <PanelRegistroCarga /> },
    { path: "/redirect", component: <Redirect /> },

]