import React, { useState } from "react";
import { ItemMenu } from "../common/itemMenu";
import { useListarElementos } from "../hooks/crudHooks";
import { carrilesURL, estadisticaDia, estadisticaSemanaURL } from "../api/apiurls";
import { Button, ButtonGroup } from "react-bootstrap";
import { Graphics } from "../common/graphics/graphics";


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

  return (
    <div className="contenedor">
      <h1 style={{ color: "white" }}>Panel carriles</h1>
      <ButtonGroup className="btn-group">
        <Button variant="primary" className="btn-panel"  onClick={() => setMostrarEstadisticas(false)}>
          Panel
        </Button>
        <Button variant="primary" className="btn-stats"   onClick={() => setMostrarEstadisticas(true)}>
          Estadisticas
        </Button>
      </ButtonGroup>
      <div className="menu-contenedor">
        <div className="graph-panel">
          {graphicsData && <Graphics gdata={graphicsData} type="general" />}
        </div>

        {mostrarEstadisticas ? (
          <div className="graph-container">
            {data && data.map((d, index) => <Graphics key={index} id={d.id} nombre={d.nombre} gdata={semanaData} type="individual" />)}
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
 