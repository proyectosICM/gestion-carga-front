export const formatTiempoCarga = (tiempoCarga) => {
  if (!tiempoCarga || !Array.isArray(tiempoCarga)) {
    return ""; 
  }

  const hours = tiempoCarga[0] || 0;
  const minutes = tiempoCarga[1] || 0;
  const seconds = tiempoCarga[2] || 0;

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
export const formatFecha = (fechaArray) => {
  return `${fechaArray[0]}/${fechaArray[1]}/${fechaArray[2]}`;
};

export const formatHora = (horaArray) => {
  if (!Array.isArray(horaArray) || horaArray.length < 2) {
    return ""; 
  }

  const hora = (horaArray[0] || 0).toString().padStart(2, "0");
  const minutos = (horaArray[1] || 0).toString().padStart(2, "0");
  const segundos = (horaArray[2] || 0).toString().padStart(2, "0");

  return `${hora}:${minutos}:${segundos}`;
};