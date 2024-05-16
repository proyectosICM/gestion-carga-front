export const formatTiempoCarga = (tiempoCarga) => {
  if (!tiempoCarga || !Array.isArray(tiempoCarga)) {
    return ""; // Retorna una cadena vacía si no se proporciona un valor válido
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
  const hora = horaArray[0];
  const minutos = horaArray[1].toString().padStart(2, "0");
  const segundos = horaArray[2].toString().padStart(2, "0");
  return `${hora}:${minutos}:${segundos}`;
};