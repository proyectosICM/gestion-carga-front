import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { empresasInfoURL } from "../../api/apiurls";
import { ListItems } from "../../hooks/crudHooks";

export function Redirect() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const username = localStorage.getItem("username");

  // LogoutToken();
  useEffect(() => {
    ListItems(`${empresasInfoURL}/${username}`, setData);
  }, [username]);

  useEffect(() => {
    if (data) {
      localStorage.setItem("empresaId", data.id);

      navigate("/");
    }
  }, [data, navigate]);

  return (
    <>
      <h1>Redirigiendo</h1>
    </>
  );
}
