import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, FormCheck, Modal } from "react-bootstrap";
import * as Yup from "yup";
import Swal from "sweetalert2";

const SedeSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es requerido"),
});

export function CarrilesAdModal({ show, onHide, guardar, editar, datosaEditar }) {
  const initialValues = {
    id: datosaEditar ? datosaEditar.id : null,
    nombre: datosaEditar ? datosaEditar.nombre : "",
  };

  const handleSave = (values) => {
    if (datosaEditar) {
      editar(values);
      Swal.fire({
        icon: "success",
        title: "Sede Editada con éxito",
        confirmButtonText: "Aceptar",
      });
    } else {
      guardar(values);
      Swal.fire({
        icon: "success",
        title: "Sede agregada con éxito",
        confirmButtonText: "Aceptar",
      });
    }

    onHide();
  };
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Sede</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={SedeSchema}
            onSubmit={(values) => {
              handleSave(values);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="nombre">Nombre</label>
                  <Field type="text" name="nombre" className="form-control" />
                  <ErrorMessage name="nombre" component="div" className="text-danger" />
                </div>
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
