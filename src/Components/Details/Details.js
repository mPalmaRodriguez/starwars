import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./details.css";
import img from "../Assets/img/predeterminado.jpeg";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { UsePerson } from "../../Hooks/UsePerson";
import { UsePlanets } from "../../Hooks/UsePlanets";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import CardPlanets from "../../Pages/planets/cards";

export const Details = () => {
  const { back, getAllPerson, dataPeople } = UsePerson();
  const { getPlanetPerson, dataPlanetPerson } = UsePlanets();

  const params = useParams();
  const listParams = [params];
  const maping = listParams.map((list) => list.nombres);
  const maping2 = listParams.map((list) => list.num);

  var nombre = maping[0];
  var numero = maping2[0];

  useEffect(() => {
    getAllPerson(numero);
  }, []);
  // console.log(numero);

  const filtro = dataPeople.filter((datos) => datos.name === nombre);
  // console.log(filtro);

  const maping3 = filtro.map((persons) => persons.homeworld);
  var homeWorld = maping3[0];
  console.log(homeWorld);
  useEffect(() => {
    getPlanetPerson(homeWorld);
  }, [dataPlanetPerson]);
  return (
    <>
      <div className="tarjetas1">
        <button style={{ display: "contents" }} onClick={back}>
          <BsArrowLeftCircleFill
            size={40}
            style={{ color: "black", marginLeft: "10px" }}
          />
        </button>

        <h1 className="title">{nombre}</h1>
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
            width: "58rem",
            border: "solid 3px #5E9CC8",
            background: "black",
          }}
          className="m-2 text-center"
        >
          {filtro.map((persona) => (
            <div key={persona.name}>
              <h1 className="detalle">DETALLES DEL PERSONAJE </h1>
              <Table className="jeje">
                <thead className="tabla">
                  <th>Nacimiento</th>
                  <th>Editado</th>
                  <th>Creado</th>
                  <th> Color de ojos</th>
                  <th>Color de piel</th>
                </thead>
                <tbody className="tablabody">
                  <tr>
                    <td>{persona.birth_year}</td>
                    <td>{persona.edited}</td>
                    <td>{persona.created}</td>
                    <td>{persona.eye_color}</td>
                    <td>{persona.skin_color}</td>
                  </tr>
                </tbody>
                <thead className="tabla">
                  <th>Género</th>
                  <th>Color de cabello</th>
                  <th>Altura</th>
                  <th>Peso</th>
                  <th>Planetas</th>
                </thead>
                <tbody className="tablabody">
                  <tr>
                    <td>{persona.gender}</td>
                    <td>{persona.hair_color}</td>
                    <td>{persona.height}</td>
                    <td>{persona.mass}</td>
                    <td>{homeWorld}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ))}
        </Card>
      </div>
      <div className="tarjetas2">
        <Card
          style={{
            width: "14rem",
            border: "solid 3px #5E9CC8",
            background: "black",
            height: "188px",
          }}
          className="m-2 text-center"
        >
          {filtro.map((persona) => (
            <div key={persona.name}>
              <h1 className="detalle2">PELICULAS</h1>
              <p className="films">{persona.films}</p>
            </div>
          ))}
        </Card>
        <Card
          style={{
            width: "14rem",
            border: "solid 3px #5E9CC8",
            background: "black",
            height: "188px",
          }}
          className="m-2 text-center"
        >
          {filtro.map((persona) => (
            <div key={persona.name}>
              <h1 className="detalle2">VEHICULOS</h1>
              <p className="films">{persona.vehicles}</p>
            </div>
          ))}
        </Card>

        <Card
          style={{
            width: "14rem",
            border: "solid 3px #5E9CC8",
            background: "black",
            height: "188px",
          }}
          className="m-2 text-center"
        >
          {filtro.map((persona) => (
            <div key={persona.name}>
              <h1 className="detalle2">NAVES</h1>
              <p className="films">{persona.starships}</p>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
};
export default Details;
