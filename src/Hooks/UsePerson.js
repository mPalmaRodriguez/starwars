import { useState } from "react";

export const UsePerson = () => {
  const [dataPeople, setDataPeople] = useState([]);
  const [dataApi, setDataApi] = useState([]);
  const [DataDetalle, setDataDetalle] = useState([]);

  const [Contador, setContador] = useState(1);

  const disminuir = () => {
    if (Contador <= 1) {
      setContador(1);
    } else {
      setContador(Contador - 1);
    }
  };
  const aumentar = () => {
    if (Contador < 9) {
      setContador(Contador + 1);
    } else {
      setContador(9);
    }
  };
  
  const getDataApi = async (urlData)=>{
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(
        urlData,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataApi(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  const back = ()=>{
    window.history.go(-1);
  }

  const getAllPerson = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(
        `https://swapi.dev/api/people/?page=${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataPeople(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };


  const getDetallePersonaje = async (urlPersona)=>{
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(
        urlPersona,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataDetalle(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllPerson,
    dataPeople,
    Contador,
    aumentar,
    disminuir,
    getDataApi,
    dataApi,
    back,
    getDetallePersonaje,
    DataDetalle
  };
};
