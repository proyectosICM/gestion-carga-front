import React from "react";
import "../styles/generalStyles.css";
import icono from "../images/pista.png";
import { useNavigate } from "react-router-dom";


export function ItemMenu({ dato }) {
  const navigation = useNavigate();

  const handleDetails = (id) => {
    localStorage.setItem("carrilId", id);
    navigation(`/registro-carga`);
  };

  return (
    <div className="item-menu" onClick={() => handleDetails(dato.id)}>
      <h3>Carril {dato.nombre}</h3>
      <h4>Total cargas del dia: 321</h4>
      <img src={icono} alt="Icono" />
    </div>
  );
}
