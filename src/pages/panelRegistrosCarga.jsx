import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import "../styles/generalStyles.css";
import { useListarElementos, useListarElementosPaginados } from "../hooks/crudHooks";
import { carrilesURL, registroCargasxCarrilPageURL } from "../api/apiurls";
import { formatFecha, formatHora, formatTiempoCarga } from "../hooks/formatUtils";
import { PaginacionUtils } from "../hooks/paginacionUtils";

export function PanelRegistroCarga() {
  const carrilId = localStorage.getItem("carrilId");
  const carrilNombre = localStorage.getItem("carrilNombre");
  const navigation = useNavigate();

  //useListarElementos(`${registroCargasxCarrilURL}/${carrilId}`, setData);

 
  const [pageNumber, setPageNumber] = useState(0);

  const { datos, totalPages, currentPage, setCurrentPage, fetchData } = useListarElementosPaginados(
    `${registroCargasxCarrilPageURL}/${carrilId}`,
    pageNumber
  );


  return (
    <div className="contenedor">
      <Button variant="primary" className="boton-retroceder" onClick={() => navigation("/")}>
        Atras
      </Button>
      <div className="menu-contenedor">
        <h1 style={{ color: "white" }}>Carril {carrilNombre}</h1>
        <Table variant="dark" striped bordered hover style={{ margin: "2%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Dia</th>
              <th>Hora de inicio</th>
              <th>Hora de Fin</th>
              <th>Tiempo carga</th>
            </tr>
          </thead>
          <tbody>
            {datos &&
              datos.map((dato, index) => {
                return (
                  <tr key={index}>
                    <td>{dato.id}</td>
                    <td>{formatFecha(dato.diaCarga)}</td>
                    <td>{formatHora(dato.horaInicio)}</td>
                    <td>{formatHora(dato.horaFin)}</td>
                    <td>{formatTiempoCarga(dato.tiempoCarga)}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <PaginacionUtils setPageNumber={setPageNumber} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
