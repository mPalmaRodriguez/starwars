import React, { useEffect, useState } from "react";
import "./characters.css";
import { UsePerson } from "../../Hooks/UsePerson";

const Cardcharacter = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [personajes, setPersonajes] = useState([]);
  const { getAllPerson,dataPeople } = UsePerson();

  useEffect(() => {

    

    getAllPerson();
    console.log(dataPeople);
  }, []);

  return <div>
    Prueba :v 
    </div>;
};

export default Cardcharacter;
