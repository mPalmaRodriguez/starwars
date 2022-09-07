import { useState } from "react";

export const UsePlanets = () => {

    const [dataPlanets, setDataPlanets] = useState([]);
    const [dataApi, setDataApi] = useState([]);
    const [Contador, setContador] = useState(1);

    const disminuir = () =>{
      if(Contador <= 1){
        setContador(1);
      }else{
        setContador(Contador -1 );
      }
    };

    const aumentar = () => {
      if(Contador <7){
        setContador(Contador +1);
      }else{
        setContador(7);
      }
    }

    const getDataApi = async (urlData) =>{
      try{
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
        .catch((error) => console.log("Error", error));
      }catch(error){
        console.log (error);
      }
    };

    const back = () =>{
      window.history.go(-1);
    }
    const getAllPlanets = async (numberPage) =>{
      try{
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
        .catch((error) => console.log("Error", error));
      }catch (error){
        console.log (error);
      }
    };
    

    const getPlanetPerson = (url)=>{
      var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(''+url+'', requestOptions)
            .then(response => response.json())
            .then(result => setDataPlanets(result))
            .catch(error => console.log('error', error));
    }


    return{
      getAllPlanets,
      dataPlanets,
      Contador,
      aumentar,
      disminuir,
      getDataApi,
      dataApi,
      back,
    };

  //   const getAllPlanets = ()=>{
  //       var requestOptions = {
  //           method: 'GET',
  //           redirect: 'follow'
  //         };
          
  //         fetch("https://swapi.dev/api/planets/", requestOptions)
  //           .then(response => response.json())
  //           .then(result => setDataPlanets(result.results))
  //           .catch(error => console.log('error', error));
  //   }

  //   const getPlanetPerson = (url)=>{
  //     var requestOptions = {
  //           method: 'GET',
  //           redirect: 'follow'
  //         };
          
  //         fetch(''+url+'', requestOptions)
  //           .then(response => response.json())
  //           .then(result => setDataPlanetPerson(result))
  //           .catch(error => console.log('error', error));
  //   }

  // return {


  
  //   getAllPlanets,
  //   dataPlanets, 
  //   getPlanetPerson,
  //   dataPlanetPerson
  // };
}
