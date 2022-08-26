import { useState } from "react";

export const UsePlanets = () => {

    const [dataPlanets, setDataPlanets] = useState([])
    const [dataPlanetPerson, setDataPlanetPerson] = useState([])


    const getAllPlanets = ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/planets/", requestOptions)
            .then(response => response.json())
            .then(result => setDataPlanets(result.results))
            .catch(error => console.log('error', error));
    }

    const getPlanetPerson = (url)=>{
      var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(''+url+'', requestOptions)
            .then(response => response.json())
            .then(result => setDataPlanetPerson(result))
            .catch(error => console.log('error', error));
    }

  return {
    getAllPlanets,
    dataPlanets, 
    getPlanetPerson,
    dataPlanetPerson
  };
}
