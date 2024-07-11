import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export function ListItems(url, setData) {
  const fetchData = async () => {
    try {
      const token = await localStorage.getItem("token");
      const response = await axios.get(`${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}

export function useListarElementos(url, setDatos) {
  const ListarDatos = useCallback(async () => {
    const token = await localStorage.getItem("token");
    const results = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
      const token = await localStorage.getItem("token");
      const response = await axios.get(`${url}?page=${pageNumber}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
