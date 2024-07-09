import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export function useListarElementos(url, setDatos) {
  const ListarDatos = useCallback(async () => {
    const results = await axios.get(url);
    console.log("SI")
    setDatos(results.data);
  }, [url, setDatos]);

  useEffect(() => {
    const intervalId = setInterval(ListarDatos, 3000);
    ListarDatos();
    return () => {
      clearInterval(intervalId);
    };
  }, []);
}

export function useListarElementosPaginados(url, pageNumber) {
  const [datos, setDatos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async (pageNumber) => {
    try {
      const response = await axios.get(`${url}?page=${pageNumber}`);
      setDatos(response.data.content);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.number);
    } catch (error) {
      console.error("Error listing items", error);
    }
  };

  useEffect(() => {
    fetchData(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData(pageNumber);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return { datos, totalPages, currentPage, setCurrentPage, fetchData };
}
