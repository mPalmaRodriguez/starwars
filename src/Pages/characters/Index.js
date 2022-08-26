import { useEffect, useState } from "react";
import { UsePerson } from "../../Hooks/UsePerson";
import { CardCharacters } from "./cards";
import img from "../../Components/Assets/img/xdd.png";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Characters = () => {
  const { getAllPerson, dataPeople, Contador, disminuir, aumentar } = UsePerson();
  const [disabledRight, setDisabledRight] = useState(false);

  useEffect(() => {
    getAllPerson(Contador);
    if(Contador ===9){
      setDisabledRight(true);
    }
  if(Contador < 9){
    setDisabledRight(false);
  }

    // console.log(dataPeople);
  }, [dataPeople]);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          textShadow: "0 0 4px #FFE919",
          fontWeight: "bolder",
          fontSize: "xxx-large",
        }}
      >
        LISTADO DE PERSONAJES
      </h1>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
        {dataPeople.map((people) => (
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
            img={img}
            keyName={people.name}
            nombres={people.name}
            num={Contador}
          />
        ))}
      </div>
      <div className="container d-flex   justify-content-center align-items-center">
        <button style={{ display: "contents" }} onClick={disminuir}>
          <BsArrowLeftCircleFill
            size={20}
            style={{ color: "black", marginRight: "2px", marginTop: "1px" }}
          />
          Anterior
        </button>
        <b
          style={{
            marginLeft: "12px",
            marginRight: "12px",
            fontSize: "larger",
            color: "black",
            textShadow: "0 0 4px #FFE919",
          }}
        >
          {Contador}
        </b>
        <li className={disabledRight ? "page-item disabled": "page-item"}>
        <button style={{ display: "contents" }} onClick={aumentar}>
          Siguiente
          <BsArrowRightCircleFill
            size={20}
            style={{ color: "black", marginLeft: "2px", marginTop: "1px" }}
          />
        </button>
        </li>
      </div>
    </div>
  );
};

export default Characters;
