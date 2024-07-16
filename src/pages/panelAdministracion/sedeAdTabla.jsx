import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { MdAddCircle, MdFactory, MdOutlineNumbers } from "react-icons/md";
import { FaEdit, FaRegUser, FaRoad } from "react-icons/fa";
import { editarElemento, GuardarElementos, ListItems } from "../../hooks/crudHooks";
import { sedesEmpresasURL, sedesURL } from "../../api/apiurls";
import { SlOptions } from "react-icons/sl";
import { ItemSede } from "../../common/itemSede";
import { useNavigate } from "react-router-dom";
import { SedeAdModal } from "./sedeAdModal";

export function SedeAdTabla() {
  const navigation = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [sedesData, setSedesData] = useState([]);
  const [datosaEditar, setDatosAEditar] = useState();
  const empresaIdSelected = localStorage.getItem("empresaIdSelected");

  useEffect(() => { 
    ListItems(`${sedesEmpresasURL}/${empresaIdSelected}`, setSedesData);
  }, []);

  const handleGuardar = (dto) => {
    console.log(empresaIdSelected);
    console.log(dto);
    const requestData = {
      nombre: dto.nombre,
      empresasModel: { id: empresaIdSelected },
    };

    console.log(requestData);
    GuardarElementos(sedesURL, requestData)
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
      empresasModel: {
        id: dto.empresa,
      },
    };

    editarElemento(`${sedesURL}/${dto.id}`, requestData)
      .then(() => {})
      .catch((error) => {
        console.error("Error al guardar el neumático:", error);
      });

    setShowModal(false);
  };

  const btnAgregarSede = () => {
    setDatosAEditar(null);
    setShowModal(true);
  };

  const handleCargarDatos = (dto) => {
    setDatosAEditar(dto);
    setShowModal(true);
  };

  const handleOnClick = (dto) => {
    localStorage.setItem("sedeIdSelected", dto.id);
    navigation("/administracion-carriles");
  };

  return (
    <div className="contenedor">
      <h1 className="text-white">Seleccione una sede para agregar carriles</h1>
      <Button onClick={() => navigation("/administracion")} className="boton-retroceder">
        Atras
      </Button>

      <div className="menu-contenedor">
        <Button variant="success" onClick={() => btnAgregarSede()}>
          <MdAddCircle className="logo" /> Agregar Sede <FaEdit className="logo" />
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
                Nombre de la sede
              </th>
              <th>
                <FaRegUser className="logo" />
                Empresa Asociada
              </th>
              <th>
                <SlOptions className="logo" />
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {sedesData &&
              sedesData.map((dato, index) => (
                <tr key={index}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.empresasModel.nombre}</td>
                  <td>
                    <Button onClick={() => handleOnClick(dato)}>Agregar Carriles</Button> <Button onClick={() => handleCargarDatos(dato)}>Editar Sede</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <SedeAdModal show={showModal} onHide={() => setShowModal(false)} guardar={handleGuardar} editar={handleEditar} datosaEditar={datosaEditar} />
      </div>
    </div>
  );
}
