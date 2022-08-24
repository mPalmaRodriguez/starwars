import { useEffect } from "react";
import {UsePerson} from "../../Hooks/UsePerson";
import {Details} from  "./Details";
import img from "../Assets/img/xdd.png";

const Detalles = () =>{
    const {getAllPerson, dataPeople} =
    UsePerson ();
    useEffect(() => {
        getAllPerson();
        console.log(dataPeople);
    }, {dataPeople});
    return(
        <div className="d-flex justify-content-center flex-wrap container-fluid">
            {dataPeople.map((people) =>(
                <Details
                key={people.name}
                nombre={people.name}
                cabello={people.hair_color}
                ojos={people.eye_color}
                piel={people.skin_color}
                genero={people.gender}
                altura={people.height}
                peso={people.mass}
                cumpleaños={people.birth_year}
                img={img}
                />
            ))}
        </div>
    );
};
export default Detalles;