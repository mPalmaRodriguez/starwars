import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './card.css';


const CardApp = (props) => {
  return (
    <Card className="general m-2">
      <Card.Img variant="top" src={props.imageSrc}  style={{width: "282px", height:"400px"}}/>
      <Card.Body style={{background:"black", color:"whitesmoke" }}>
        <Card.Title style={{background:"black", color:"#FFE919" }}>{props.title}</Card.Title>
        <Card.Text>
          {props.texto}
        </Card.Text>
        <Button className="buttonCard">{props.boton}</Button>
      </Card.Body>
    </Card>
  );
};

export default CardApp;
