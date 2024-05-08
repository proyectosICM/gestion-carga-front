export const formatTiempoCarga = (tiempoCarga) => {
    const hours = Math.floor(tiempoCarga / 3600);
    const minutes = Math.floor((tiempoCarga % 3600) / 60);
    const seconds = Math.floor(tiempoCarga % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  export const formatFecha = (fechaArray) => {
    return `${fechaArray[0]}/${fechaArray[1]}/${fechaArray[2]}`;
  };
  
  export const formatHora = (horaArray) => {
    return `${horaArray[0]}:${horaArray[1]}:${horaArray[2]}`;
  };
  