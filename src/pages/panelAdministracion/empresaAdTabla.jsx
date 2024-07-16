import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { EmpresaAdModal } from "./empresaAdModal";
import { editarElemento, GuardarElementos, ListItems } from "../../hooks/crudHooks";
import { empresasURL } from "../../api/apiurls";
import { CiWarning } from "react-icons/ci";
import { MdAddCircle, MdFactory, MdOutlineNumbers } from "react-icons/md";
import { FaEdit, FaRegUser } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { CgMenuGridO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export function EmpresaAdTabla() {
  const navigation = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [datosaEditar, setDatosAEditar] = useState();
  const [empresasData, setEmpresasData] = useState([]);

  useEffect(() => {
    ListItems(`${empresasURL}`, setEmpresasData);
  }, []);

  const handleGuardar = (dto) => {
    const requestData = {
      nombre: dto.nombre,
      username: dto.username,
      password: dto.password,
    };

    GuardarElementos(empresasURL, requestData)
      .then(() => {
        ListItems(`${empresasURL}`, setEmpresasData);
      })
      .catch((error) => {
        console.error("Error al guardar la empresa:", error);
      });
    setShowModal(false);
  };

  const handleEditar = (dto) => {
    console.log(dto);
    const requestData = {
      nombre: dto.nombre,
      username: dto.username,
      password: dto.password,
    };

    editarElemento(`${empresasURL}/${dto.id}`, requestData)
      .then(() => {})
      .catch((error) => {
        console.error("Error al guardar el neumático:", error);
      });
    setShowModal(false);
  };

  const btnAgregarEmpresa = () => {
    setDatosAEditar(null);
    setShowModal(true);
  };

  const handleCargarDatos = (dto) => {
    setDatosAEditar(dto);
    setShowModal(true);
  };

  const handleOnClick = (dto) => {
    localStorage.setItem("empresaIdSelected", dto.id);
    navigation("/administracion-sede");
  };

  return (
    <div className="contenedor">
      <div className="menu-contenedor">
        <Button variant="success" onClick={() => btnAgregarEmpresa()}>
          <MdAddCircle className="logo" /> Agregar Empresa <FaEdit className="logo" />
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
                Nombre de la empresa
              </th>
              <th>
                <FaRegUser className="logo" />
                Usuario de acceso
              </th>
              <th>
                <SlOptions className="logo" />
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {empresasData &&
              empresasData.map((dato, index) => (
                <tr key={index}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.username}</td>
                  <td>
                    <Button style={{ margin: "auto 10px" }} onClick={() => handleOnClick(dato)}>
                      <CgMenuGridO className="logo" />
                      Ver Sedes <FaEdit className="logo" />
                    </Button>
                    <Button variant="warning" style={{ margin: "auto 10px" }} onClick={() => handleCargarDatos(dato)}>
                      <CiWarning className="logo" /> Cambiar Credenciales <FaEdit className="logo" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <EmpresaAdModal
          show={showModal}
          onHide={() => setShowModal(false)}
          datosaEditar={datosaEditar}
          guardar={handleGuardar}
          editar={handleEditar}
        />
      </div>
    </div>
  );
}
