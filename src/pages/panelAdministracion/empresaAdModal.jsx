import React, { useState } from "react";
import { Modal, Button, FormCheck } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const EmpresaSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es requerido"),
  username: Yup.string().required("El nombre de usuario es requerido"),
});

export function EmpresaAdModal({ show, onHide, guardar, editar, datosaEditar }) {
  const [changePassword, setChangePassword] = useState(false);


  const initialValues = {
    id: datosaEditar ? datosaEditar.id : null,
    nombre: datosaEditar ? datosaEditar.nombre : "",
    username: datosaEditar ? datosaEditar.username : "",
    password: "",
  };

  const handleSave = (values) => {
    if (datosaEditar) {
      editar(values);
      Swal.fire({
        icon: "success",
        title: "Empresa Editada con éxito",
        confirmButtonText: "Aceptar",
      });
    } else {
      guardar(values);
      Swal.fire({
        icon: "success",
        title: "Empresa agregada con éxito",
        confirmButtonText: "Aceptar",
      });
    }

    onHide();
  };


  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Empresa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={EmpresaSchema}
            onSubmit={(values) => {
              handleSave(values);
            }}
          >
            {({ values }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="nombre">Nombre</label>
                  <Field type="text" name="nombre" className="form-control" />
                  <ErrorMessage name="nombre" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="username">Nombre de Usuario</label>
                  <Field type="text" name="username" className="form-control" />
                  <ErrorMessage name="username" component="div" className="text-danger" />
                </div>

                {!datosaEditar ? (
                  <div className="mb-3">
                    <label htmlFor="password">Contraseña</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                ) : (
                  <div className="mb-3">
                    <FormCheck
                      type="checkbox"
                      id="changePassword"
                      label="¿Cambiar contraseña?"
                      checked={changePassword}
                      onChange={(e) => setChangePassword(e.target.checked)}
                    />
                    {changePassword && (
                      <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                      </div>
                    )}
                  </div>
                )}

                <Button type="submit" variant="primary">
                  Guardar
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
