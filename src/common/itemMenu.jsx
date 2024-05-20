import React, { useState } from "react";
import "../styles/generalStyles.css";
import icono from "../images/pista.svg";
import { useNavigate } from "react-router-dom";
import { useListarElementos } from "../hooks/crudHooks";
import { cargaDiariaCarrilURL } from "../api/apiurls";

export function ItemMenu({ dato }) {
  const navigation = useNavigate();
  const [cargasConteo, setCargasConteo] = useState();

  const handleDetails = (dato) => {
    localStorage.setItem("carrilId", dato.id);
    localStorage.setItem("carrilNombre", dato.nombre);
    navigation(`/registro-carga`);
  };

  useListarElementos(`${cargaDiariaCarrilURL}/${dato.id}`, setCargasConteo);
  //console.log(cargasConteo  cargasConteo.cantidad)
  return (
    <div className="item-menu" onClick={() => handleDetails(dato)}>
      <h3>Carril {dato.nombre}</h3>
      <p>Total cargas del dia: {cargasConteo && cargasConteo.cantidad > 0 ? cargasConteo.cantidad : "0"}</p>
      <img src={icono} alt="Icono" style={{ width: "50px", height: "50px" }} />
    </div>
  );
}
