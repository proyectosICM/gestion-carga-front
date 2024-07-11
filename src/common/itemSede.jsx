import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useListarElementos } from "../hooks/crudHooks";
import { cargaDiariaCarrilURL, sedesURL } from "../api/apiurls";
import { FaRoad } from "react-icons/fa";

export function ItemSede({ dato }) {
  const navigation = useNavigate();
  const [sedeData, setSedeData] = useState();

  const handleDetails = (dato) => {
    localStorage.setItem("sedeId", dato.id);
    localStorage.setItem("sedeNombre", dato.nombre);
    navigation(`/sede/${dato.nombre}`);
  };

  useListarElementos(`${sedesURL}/${dato.id}`, setSedeData);

  return (
    <div className="item-menu" onClick={() => handleDetails(dato)}>
      <h3>Sede</h3>
      <p>{sedeData && sedeData.nombre ? sedeData.nombre : "--"} </p>
      <FaRoad style={{ width: "50px", height: "50px" }} />
    </div>
  );
}
