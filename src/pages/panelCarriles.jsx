import React, { useState } from "react";
import { ItemMenu } from "../common/itemMenu";
import { useListarElementos } from "../hooks/crudHooks";
import { carrilesURL, estadisticaDia, estadisticaSemanaURL } from "../api/apiurls";
import "../styles/generalStyles.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { Graphics } from "../common/graphics/graphics";
import { PanelEstadisticas } from "./panelEstadisticas";

export function PanelCarriles() {
  const [data, setData] = useState();
  const [graphicsData, setGraphicData] = useState(null);

  const [semanaData, setSemanaData] = useState(null);
  const [mostrarEstadisticas, setMostrarEstadisticas] = useState(false);
  localStorage.removeItem("carrilId");
  localStorage.removeItem("carrilNombre");
  useListarElementos(carrilesURL, setData);
  useListarElementos(estadisticaDia, setGraphicData);
  useListarElementos(estadisticaSemanaURL, setSemanaData);

  //console.log(semanaData)

  return (
    <div className="contenedor">
      <h1 style={{ color: "white" }}>Panel carriles</h1>
      <ButtonGroup style={{ width: "80%", margin: "2%" }}>
        <Button variant="primary" style={{ flex: 1 }} onClick={() => setMostrarEstadisticas(false)}>
          Panel
        </Button>
        <Button variant="primary" style={{ flex: 1, marginLeft: "0.5%" }} onClick={() => setMostrarEstadisticas(true)}>
          Estadisticas
        </Button>
      </ButtonGroup>
      <div className="menu-contenedor">
        <div style={{ width: "100%", height: "280px", border: "2px solid black" }}>
          {graphicsData && <Graphics gdata={graphicsData} type="general" gdataLabel={"graph-container"} />}
        </div>

        {mostrarEstadisticas ? (
          <div style={{ width: "100%", height: "280px", border: "2px solid black", overflow: "auto", display: "flex", flexWrap: "wrap" }}>
            {data && data.map((d, index) => <Graphics id={d.id} nombre={d.nombre} gdata={semanaData} type="individual" />)}
          </div>
        ) : (
          data &&
          data.map((dato, index) => {
            return <ItemMenu key={index} dato={dato} />;
          })
        )}
      </div>
    </div>
  );
}
