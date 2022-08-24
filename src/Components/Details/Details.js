import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./details.css";
import img from "../Assets/img/predeterminado.jpeg";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { UsePerson } from "../../Hooks/UsePerson";


const Details = () => {
  const {dataPeople, getAllPerson,Contador} = UsePerson();
  const params = useParams();
  const listadoParams = [params];
  const maping = listadoParams.map((list) => list.name);
  var nombre = maping[0];
useEffect(() =>{
  getAllPerson(Contador);
},[dataPeople])

  const filtros = dataPeople.filter(idk => idk.name === nombre);
  console.log(listadoParams[0].id);
  return (
    <>
      <div className="tarjetas1">
        <button style={{ display: "contents" }}>
          <a href="/characters">
            <BsArrowLeftCircleFill
              size={40}
              style={{ color: "black", marginLeft: "10px", marginTop: "auto" }}
            />
          </a>
        </button>

        <h1 className="title">{params.id}</h1>

        {listadoParams.map((name) =>(
          <h1 key={name.name}>{name.name}</h1>
        ))}

        {filtros.map((personaje)=>(
          <div key={personaje.name}>
            <p>{personaje.eye_color}</p>
          </div>
        ))}


      </div>
      <div className="tarjetas">
        <Card
          style={{
            width: "18rem",
            border: "solid 3px #5E9CC8",
            background: "black",
          }}
          className="m-2 text-center"
        >
          <Card.Body className="cuerpo">
            <Card.Img src={img}></Card.Img>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "30rem",
            border: "solid 3px #5E9CC8",
            background: "black",
          }}
          className="m-2 text-center"
        >
          <Card.Text>Se supone que va los detalles del personaje</Card.Text>
        </Card>
      </div>
      <div className="tarjetas">
        <Card
          style={{
            width: "9rem",
            border: "solid 3px #5E9CC8",
            background: "black",
            height: "170px",
          }}
          className="m-2 text-center"
        >
          <Card.Text>Se supone que va la demás info (peliculas)</Card.Text>
        </Card>
        <Card
          style={{
            width: "9rem",
            border: "solid 3px #5E9CC8",
            background: "black",
            height: "170px",
          }}
          className="m-2 text-center"
        >
          <Card.Text>Se supone que va la demás info (vehiculos)</Card.Text>
        </Card>
        <Card
          style={{
            width: "9rem",
            border: "solid 3px #5E9CC8",
            background: "black",
            height: "170px",
          }}
          className="m-2 text-center"
        >
          <Card.Text>Se supone que va la demás info (naves)</Card.Text>
        </Card>
      </div>
    </>
  );
};
export default Details;
