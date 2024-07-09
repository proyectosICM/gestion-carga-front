export const base = "https://samloto.com:4002"
export const baseURL = `${base}/api`;

export const carrilesURL = `${baseURL}/carriles`;

export const registroCargasURL = `${baseURL}/registro-cargas`;

export const registroCargasxCarrilURL = `${registroCargasURL}/registros`;
export const registroCargasxCarrilPageURL = `${registroCargasURL}/registros-page`;

// Estadisticas
export const cargaDiariaCarrilURL = `${registroCargasURL}/carga-diaria-carril`
export const estadisticaDia = `${registroCargasURL}/count-by-carril-and-date`
//export const estadisticaSemanaURL = `${registroCargasURL}/ultimos-7-dias`
export const estadisticaSemanaURL = `${registroCargasURL}/semana-general`

