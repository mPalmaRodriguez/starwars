import { useEffect, useState } from "react";
import { UsePlanets } from "../../Hooks/UsePlanets";
import CardPlanets from "./cards";
import img1 from "../../Components/Assets/img/planets.jpg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Planets = () => {
  const { getAllPlanets, dataPlanets, Contador, disminuir, aumentar } =
    UsePlanets();
  const [disabledRight, setDisabledRight] = useState(false);
  useEffect(() => {
    getAllPlanets(Contador);
    if (Contador === 6) {
      setDisabledRight(true);
    }
    if (Contador < 9) {
      setDisabledRight(false);
    }

    // console.log(dataPlanets);
  }, [dataPlanets]);
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          textShadow: "0 0 4px #FFE919",
          fontWeight: "bolder",
          fontSize: "xxx-large",
        }}
      >
        LISTADO DE PLANETAS
      </h2>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
        {dataPlanets.map((planets) => (
          <CardPlanets
            key={planets.name}
            planeta={planets.name}
            clima={planets.climate}
            terreno={planets.terrain}
            creado={planets.created}
            img1={img1}
            keyName={planets.name}
            nombres={planets.name}
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
        <button style={{ display: "contents" }} onClick={aumentar}>
          Siguiente
          <BsArrowRightCircleFill
            size={20}
            style={{ color: "black", marginLeft: "2px", marginTop: "1px" }}
          />
        </button>
      </div>
    </div>
  );
};
export default Planets;
