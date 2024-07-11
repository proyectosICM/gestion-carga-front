import React, { useState, useEffect } from "react";
import { ListItems } from "../hooks/crudHooks";
import { sedesURL } from "../api/apiurls";
import { ItemSede } from "../common/itemSede";

export function PanelSedes() {
  const [sedesData, setSedesData] = useState([]);

  useEffect(() => {
    ListItems(`${sedesURL}`, setSedesData);
  }, []);

  return (
    <div className="contenedor">
      <h1>Escoja una sede</h1>
      <h2>Sedes</h2>
      <div className="menu-contenedor">
        {sedesData &&
          sedesData.map((dato, index) => (
            <ItemSede key={index} dato={dato} />
          ))}
      </div>
    </div>
  );
}
