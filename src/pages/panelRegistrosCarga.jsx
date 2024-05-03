import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import "../styles/generalStyles.css";

export function PanelRegistroCarga() {
  const navigation = useNavigate();

  return (
    <div className="contenedor">
      <Button variant="primary" className="boton-retroceder" onClick={() => navigation("/")}>
        Atras
      </Button>
      <Table variant="dark" striped bordered hover>
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
          <tr>
            <td>1</td>
            <td>Ejemplo 1</td>
            <td>Descripción 1</td>
            <td>Descripción 1</td>
            <td>Descripción 1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ejemplo 2</td>
            <td>Descripción 2</td>
            <td>Descripción 1</td>
            <td>Descripción 1</td>
          </tr>
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </Table>
    </div>
  );
}
