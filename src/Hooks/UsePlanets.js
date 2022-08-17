import { useState } from "react";

export const UsePlanets = () => {
  const [dataPlanets, setDataPlanets] = useState([]);
  const [Contador, setContador] = useState(1);

  const disminuir = () => {
    if (Contador <= 1) {
      setContador(1);
    } else {
      setContador(Contador - 1);
    }
  };
  const aumentar = () => {
    if (Contador < 6) {
      setContador(Contador + 1);
    } else {
      setContador(6);
    }
  };

  const getAllPlanets = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        `https://swapi.dev/api/planets/?page=${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataPlanets(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllPlanets,
    dataPlanets,
    Contador,
    aumentar,
    disminuir,
  };
};
