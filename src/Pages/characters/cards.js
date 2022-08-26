import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import "./characters.css";
import { Link } from "react-router-dom";

export const CardCharacters = ({
  nombre,
  cabello,
  ojos,
  piel,
  genero,
  altura,
  peso,
  cumpleaños,
  img,
  keyName,
  num,
  nombres
}) => {
  return (
    <Card
      style={{
        width: "18rem",
        border: "solid 3px #5E9CC8",
        background: "black",
      }}
      className=" general m-2 text-center"
    >
      <Card.Body className="cuerpo">
        <Card.Title className="titulo">{nombre}</Card.Title>
        <Card.Img src={img}></Card.Img>
        <ListGroup>
          <ListGroup.Item className="lista">
            <b>Color del cabello: </b>
            {cabello}
          </ListGroup.Item>
          <ListGroup.Item className="lista">
            <b>Color de ojos: </b>
            {ojos}
          </ListGroup.Item>
          <ListGroup.Item className="lista">
            <b>Color de piel: </b>
            {piel}
          </ListGroup.Item>
          <ListGroup.Item className="lista">
            <b>Género: </b>
            {genero}
          </ListGroup.Item>
          <ListGroup.Item className="lista">
            <b>Altura: </b>
            {altura}
          </ListGroup.Item>
          <ListGroup.Item className="lista">
            <b>Peso: </b>
            {peso}
          </ListGroup.Item>
          <ListGroup.Item className="lista">
            <b>Nacimiento: </b>
            {cumpleaños}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Link to={`/Details/${nombres}/${num}`} key={keyName}> 
        <Button className="buttonCard">
          <p style={{ marginBottom: "auto" }}>Detalles del personaje</p>
          {nombres}
        </Button>
      </Link>
    </Card>
  );
};
export default CardCharacters;
