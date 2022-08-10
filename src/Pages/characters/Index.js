import React from "react";
import Button from "react-bootstrap/Button";
import prueba from "../../Components/Assets/img/leia.jpg";
import Card from "react-bootstrap/Card";
import './characters.css';


const Cardcharacter = () => {
  return (
    <Card style={{ width: "18rem" , border:"solid 3px #5E9CC8"}} className="m-2 text-center">
      <Card.Img variant="top" src={{prueba}} style={{width: "282px", height:"400px"}}/>
      <Card.Body style={{background:"black", color:"whitesmoke" }}>
        <Card.Title style={{background:"black", color:"#5E9CC8" }}>Prueba</Card.Title>
        <Card.Text style={{background:"black", color:"whitesmoke", textAlign:"justify"}} >prueba x2
        </Card.Text>
        <Button className="buttonCard" style={{background:"palevioletred", border:" solid 2px "}} ></Button>
      </Card.Body>
    </Card>
  );
};

export default Cardcharacter;
