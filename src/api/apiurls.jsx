//export const base = "https://samloto.com:4002";
export const base = "http://localhost:7087"

export const baseURL = `${base}/api`;

export const loginURL = `${base}/login`; 

// Empresas
export const empresasURL = `${baseURL}/empresas`;
export const empresasInfoURL = `${empresasURL}/info`;

// Sedes
export const sedesURL = `${baseURL}/sedes`;
export const sedesEmpresasURL = `${sedesURL}/xempresa`;

// Carriles
export const carrilesURL = `${baseURL}/carriles`;
export const carrilesSedeURL = `${carrilesURL}/sede`;

export const registroCargasURL = `${baseURL}/registro-cargas`;

export const registroCargasxCarrilURL = `${registroCargasURL}/registros`;
export const registroCargasxCarrilPageURL = `${registroCargasURL}/registros-page`;

// Estadisticas
export const cargaDiariaCarrilURL = `${registroCargasURL}/carga-diaria-carril`
export const estadisticaDia = `${registroCargasURL}/count-by-carril-and-date`
//export const estadisticaSemanaURL = `${registroCargasURL}/ultimos-7-dias`
export const estadisticaSemanaURL = `${registroCargasURL}/semana-general`

