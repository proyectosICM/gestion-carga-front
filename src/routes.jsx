
import { Login } from "./pages/login/login";
import { Redirect } from "./pages/login/redirect";
import { CarrilesAdTabla } from "./pages/panelAdministracion/carrilesAdTabla";
import { EmpresaAdTabla } from "./pages/panelAdministracion/empresaAdTabla";
import { SedeAdTabla } from "./pages/panelAdministracion/sedeAdTabla";
import { PanelCarriles } from "./pages/panelCarriles";
import { PanelRegistroCarga } from "./pages/panelRegistrosCarga";
import { PanelSedes } from "./pages/panelSedes";


export const routes = [
    { path: "/login", component: <Login /> },
    { path: "/", component: <PanelSedes /> },
    { path: "/sede", component: <PanelCarriles /> },

    { path: "/registro-carga", component: <PanelRegistroCarga /> },
    { path: "/redirect", component: <Redirect /> },


    // ADMINISTRACCION
    { path: "/administracion", component: <EmpresaAdTabla /> },
    { path: "/administracion-sede", component: <SedeAdTabla /> },
    { path: "/administracion-carriles", component: <CarrilesAdTabla /> },

]