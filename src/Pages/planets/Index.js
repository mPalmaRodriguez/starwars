import { useEffect } from "react";
import {UsePlanets} from "../../Hooks/UsePlanets";
import CardPlanets from "./cards";
const Planets = () => {
    const {getAllPlanets, dataPlanets} = UsePlanets();
    useEffect(()=>{
        getAllPlanets();

        console.log(dataPlanets);
    }, []);
    return(
        <div>
            <h2 style={{textAlign:"center", textShadow:"0 0 4px #FFE919", fontWeight:"bolder", fontSize:"xxx-large"}} >LISTADO DE PLANETAS</h2>
            <div className="d-flex justify-content-center flex-wrap container-fluid">
                {dataPlanets.map((planets)=>(
                    <CardPlanets
                    key={planets.name}
                    planeta={planets.name}
                    clima={planets.climate}
                    terreno={planets.terrain}
                    creado={planets.created}
                    />
                ))}
            </div>
        </div>
    );
};
export default Planets;