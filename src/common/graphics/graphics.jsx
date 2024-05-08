import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Button } from "react-bootstrap";
import "../../styles/generalStyles.css";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function Graphics({ gdata, type, id }) {
  if (!gdata || gdata.length === 0) {
    // Si gdata es null, undefined o una lista vacía, muestra un mensaje o realiza alguna acción alternativa
    return <div>No hay datos disponibles para graficar.</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Total de cargas`,
      },
    },
  };

  let labels, data;
  let containerClassName;
  if (type === "general") {
    // Tipo "general": Mostrar etiquetas basadas en gdataLabel y datos basados en gdata
    labels = gdata.map((data) => `Carril ${data.carrilId}`);
    data = gdata.map((data) => data.cantidad);
    containerClassName = "graph-container";
  } else if (type === "individual") {
    const carrilData = gdata.find((item) => item.carrilId === id);

    if (!carrilData) {
        return <div>No se encontraron datos para el carril con ID {id}.</div>;
    }

    labels = carrilData.dias.map((dia) => `${dia.fecha[2]}/${dia.fecha[1]}/${dia.fecha[0]}`);
    data = carrilData.dias.map((dia) => dia.cantidad);
    containerClassName = "graph-container-item";
}

  const dataI = {
    labels: labels,
    datasets: [
      {
        label: `Cantidad de cargas realizadas ${id}`,
        data: data,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={dataI} className={containerClassName} />
    </div>
  );
}
