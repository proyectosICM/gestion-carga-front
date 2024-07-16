import React, { useState, useEffect } from "react";
import { ListItems } from "../hooks/crudHooks";
import { sedesURL } from "../api/apiurls";
import { ItemSede } from "../common/itemSede";

export function PanelSedes() {
  const [sedesData, setSedesData] = useState([]);
  const empresaId = localStorage.getItem("empresaId")

  useEffect(() => {
    ListItems(`${sedesURL}`, setSedesData);
  }, []); 

  return (
    <div className="contenedor">
      <h1 className="text-white">Seleccione la sede para ver los registros</h1>
      <div className="menu-contenedor">
        <div style={{width:"80%", height:"280px", border:"2px solid red", margin: "10px 10%"}}>

        </div>
        {sedesData &&
          sedesData.map((dato, index) => (
            <ItemSede key={index} dato={dato} />
          ))}
      </div>
    </div>
  );
}
