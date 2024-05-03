import React, { useState } from "react";
import { ItemMenu } from "../common/itemMenu";
import { useListarElementos } from "../hooks/crudHooks";
import { carrilesURL } from "../api/apiurls";
import "../styles/generalStyles.css";

export function PanelCarriles() {
  const [data, setData] = useState();

  useListarElementos(carrilesURL, setData);

  return (
    <div className="contenedor">
      <h1 style={{ color: "white" }}>Panel carriles</h1>
      <div className="menu-contenedor">
        {data &&
          data.map((dato, index) => {
            return <ItemMenu key={index} dato={dato} />;
          })}
      </div>
    </div>
  );
}
