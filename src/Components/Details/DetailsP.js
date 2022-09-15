import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./details.css";
import img from "../Assets/img/planetas.png";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import { UsePlanets } from "../../Hooks/UsePlanets";
import { UsePerson } from "../../Hooks/UsePerson";
import { useParams } from "react-router-dom";

export const DetailsP = () => {
  const { back, getAllPlanets, dataPlanets } = UsePlanets();
  const { getPersonPlanet } = UsePerson();

  const params = useParams();
  const listParams = [params];
  const mapeo = listParams.map((list) => list.nombre);
  const mapeo2 = listParams.map((list) => list.numero);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {
    getAllPlanets(numero);
  }, []);

  const filtro = dataPlanets.filter((datos) => datos.name === nombre);
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
          {filtro.map((planeta) => (
            <div key={planeta.name}>
              <h1 className="detalle"> DETALLE DEL PLANETA</h1>
              <Table className="jeje">
                <thead className="tabla">
                  <th>Período de rotación</th>
                  <th>Período orbial</th>
                  <th>Diámetro</th>
                  <th>Clima</th>
                </thead>
                <tbody className="tablabody">
                  <tr>
                    <td>{planeta.rotation_period}</td>
                    <td>{planeta.orbital_period}</td>
                    <td>{planeta.diameter}</td>
                    <td>{planeta.climate}</td>
                  </tr>
                </tbody>
                <thead className="tabla">
                  <th>Gravedad</th>
                  <th>Terreno</th>
                  <th>Aguas superficiales</th>
                  <th>Popularidad</th>
                </thead>
                <tbody className="tablabody">
                  <tr>
                    <td>{planeta.gravity}</td>
                    <td>{planeta.terrain}</td>
                    <td>{planeta.surface_water}</td>
                    <td>{planeta.population}</td>
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
            height: "320px",
          }}
          className="m-2 text-center"
        >
          {filtro.map((planeta) => (
            <div key={planeta.name}>
              <h1 className="detalle2">RESIDENTES</h1>
              <p className="films">{planeta.residents}</p>
            </div>
          ))}
        </Card>
        <Card
          style={{
            width: "14rem",
            border: "solid 3px #5E9CC8",
            background: "black",
            height: "320px",
          }}
          className="m-2 text-center"
        >
          {filtro.map((planeta) => (
            <div key={planeta.name}>
              <h1 className="detalle2">PELICULAS</h1>
              <p className="films">{planeta.films}</p>
            </div>
          ))}
        </Card>
        <Card
          style={{
            width: "14rem",
            border: "solid 3px #5E9CC8",
            background: "black",
            height: "320px",
          }}
          className="m-2 text-center"
        >
          {filtro.map((planeta) => (
            <div key={planeta.name}>
              <h1 className="detalle2">CREADO</h1>
              <p className="films">{planeta.created}</p>
              <h1 className="detalle2">EDITADO</h1>
              <p className="films">{planeta.edited}</p>

            </div>
          ))}
        </Card>

      </div>
    </>
  );
};

export default DetailsP;
