import { useEffect } from "react";
import {UsePerson} from "../../Hooks/UsePerson";
import {CardCharacters} from "./cards";

const Characters = () => {
  const { getAllPerson, dataPeople } = UsePerson();
  useEffect(()=> {
    getAllPerson();

    console.log(dataPeople);
  }, []);
  return(
    <div>
      <h1 style={{textAlign:"center", textShadow:"0 0 4px #FFE919", fontWeight:"bolder", fontSize:"xxx-large"}} >LISTADO DE PERSONAJES</h1>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
        {dataPeople.map((people) =>(
          <CardCharacters
          key={people.name}
          nombre={people.name}
          cabello={people.hair_color}
          ojos={people.eye_color}
          piel={people.skin_color}
          genero={people.gender}
          altura={people.height}
          peso={people.mass}
          cumpleaños={people.birth_year}
          estiloBoton={people.eye_color}
          />
        ))}
      </div>
    </div>
  );
};

export default Characters;
