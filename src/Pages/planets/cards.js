import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import "./planets.css";

export const CardPlanets = ({
 planeta,
 clima,
 terreno,
 creado
}) => {
  return (
    <Card
      style={{ width: "18rem", border: "solid 3px #5E9CC8", background:"black" }}
      className="m-2 text-center">
      <Card.Body className="cuerpo">
        <Card.Title className="titulo"> <b>Planeta:  </b>
          {planeta}
        </Card.Title>
        <ListGroup>
          <ListGroup.Item className="lista"><b>Clima:  </b>{clima}</ListGroup.Item>
          <ListGroup.Item className="lista"><b>Tipo de terreno:  </b>{terreno}</ListGroup.Item>
        </ListGroup>
        <p className="fecha">Fecha de creación:</p>
        {creado}
      </Card.Body>
        <Button className="buttonCard"><p style={{marginBottom:"auto"}}>Detalles del planeta </p>{planeta}</Button>
    </Card>
  );
};
export default CardPlanets;