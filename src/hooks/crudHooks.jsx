import axios from "axios";
import { useCallback, useEffect } from "react";

export function useListarElementos(url, setDatos) {
    const ListarDatos = useCallback(async () => {
      const results = await axios.get(url);
      setDatos(results.data);
    }, [url, setDatos]);
  
    useEffect(() => {
      const intervalId = setInterval(ListarDatos, 1000);
      ListarDatos();
      return () => {
        clearInterval(intervalId);
      };
    });
  } 