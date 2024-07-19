import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaEdit, FaRegUser } from "react-icons/fa";
import { MdAddCircle, MdFactory, MdOutlineNumbers } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { editarElemento, GuardarElementos, ListItems } from "../../hooks/crudHooks";
import { carrilesEmpresasURL, carrilesURL, sedesEmpresasURL } from "../../api/apiurls";
import { CarrilesAdModal } from "./carrilesAdModal";

export function CarrilesAdTabla() {
  const navigation = useNavigate();

  const [carrilesData, setCarrilesData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const sedeIdSelected = localStorage.getItem("sedeIdSelected");
  const [datosaEditar, setDatosAEditar] = useState();

  useEffect(() => {
    ListItems(`${carrilesEmpresasURL}/${sedeIdSelected}`, setCarrilesData);
  }, []);


  const handleGuardar = (dto) => {
    console.log(dto);
    const requestData = {
      nombre: dto.nombre,
      sedesModel: { id: sedeIdSelected },
    };

    console.log(requestData);
    GuardarElementos(carrilesURL, requestData)
      .then(() => {
        //ListItems(`${sedesURL}`, setSedesData);
      })
      .catch((error) => {
        console.error("Error al guardar la sede:", error);
      });
    setShowModal(false);
  };

  const handleEditar = (dto) => {
    const requestData = {
      nombre: dto.nombre,
      sedesModel: { id: sedeIdSelected },
    };

    editarElemento(`${carrilesURL}/${dto.id}`, requestData)
      .then(() => {})
      .catch((error) => {
        console.error("Error al guardar el neumático:", error);
      });

    setShowModal(false);
  };

  const btnAgregarCarril = () => {
    setDatosAEditar(null);
    setShowModal(true);
  };

  const handleCargarDatos = (dto) => {
    setDatosAEditar(dto);
    setShowModal(true);
  };

  return (
    <div className="contenedor">
      <Button onClick={() => navigation("/administracion-sede")} className="boton-retroceder">
        Atras
      </Button>

      <div className="menu-contenedor">
        <Button variant="success"  onClick={() => btnAgregarCarril()}>
          <MdAddCircle className="logo" /> Agregar Carril <FaEdit className="logo" />
        </Button>
        <Table variant="dark" striped bordered hover style={{ margin: "10px" }}>
          <thead>
            <tr>
              <th>
                <MdOutlineNumbers className="logo" />
                Id
              </th>
              <th>
                <MdFactory className="logo" />
                Nombre del carril
              </th>
              <th>
                <FaRegUser className="logo" />
                Carril al que pertenece
              </th>
              <th>
                <SlOptions className="logo" />
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {carrilesData &&
              carrilesData.map((dato, index) => (
                <tr key={index}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.sedesModel.nombre}</td>
                  <td>
                    <Button onClick={()=> handleCargarDatos(dato)}>Editar nombre de carril</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <CarrilesAdModal show={showModal} onHide={() => setShowModal(false)} datosaEditar={datosaEditar} guardar={handleGuardar} editar={handleEditar} />
      </div>
    </div>
  );
}
