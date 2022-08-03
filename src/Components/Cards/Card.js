import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './card.css';


const CardApp = (props) => {
  return (
    <Card style={{ width: "18rem" , border:"solid 3px #5E9CC8"}} className="m-2 text-center">
      <Card.Img variant="top" src={props.imageSrc}  style={{width: "282px", height:"400px"}}/>
      <Card.Body style={{background:"black", color:"whitesmoke" }}>
        <Card.Title style={{background:"black", color:"#5E9CC8" }}>{props.title}</Card.Title>
        <Card.Text style={{background:"black", color:"whitesmoke", textAlign:"justify"}} >
          {props.texto}
        </Card.Text>
        <Button className="buttonCard" style={{background:"palevioletred", border:" solid 2px "}} >{props.boton}</Button>
      </Card.Body>
    </Card>
  );
};

export default CardApp;
