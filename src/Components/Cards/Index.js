import React from "react";
import CardApp from "./Card";
import { Container } from "react-bootstrap";
import imgCard1 from "../Assets/img/leia.jpg";
import imgCard2 from "../Assets/img/anakin.webp";
import imgCard3 from "../Assets/img/toda.webp";
import imgCard4 from "../Assets/img/chew.webp";

const cards = [
  {
    Id: 1,
    Titulo: "Leia Organa",
    Imagen: imgCard1,
    Texto: " fue una política humana sensible a la Fuerza y una líder militar que sirvió en la Alianza para Restaurar la República durante la Era Imperial y en la Resistencia en la subsiguiente Era de la Nueva República.Adoptada en la Casa de Organa, la familia real alderaaniana, ella fue la Princesa Leia Organa de Alderaan, un planeta de los Mundos del Núcleo conocido por su dedicación al pacifismo.",
    Boton: "Más sobre Leia Organa"
  },
  {
    Id: 2,
    Titulo: "Anakin Skywalker",
    Imagen: imgCard2,
    Texto: "Anakin Skywalker, un hombre humano sensible a la Fuerza, fue un Caballero Jedi de la República Galáctica y el Elegido de la Fuerza. Durante las Guerras Clon, sus logros como comandante en el campo de batalla le valieron el apodo del Héroe Sin Miedo. Después de pasar al lado oscuro de la Fuerza, se hizo conocido como Darth Vader, un Señor Oscuro de los Sith y aprendiz del Emperador Darth Sidious.",
    Boton: "Más sobre Anakin Skywalker"
  },
  {
    Id: 3,
    Titulo: "Yoda",
    Imagen: imgCard3,
    Texto: "Yoda fue un miembro masculino de una especie misteriosa. Era un reverenciado Maestro Jedi que sirvió como Gran Maestro de la Orden Jedi en los últimos días de la República Galáctica. Era famoso dentro de la Orden por su sabiduría, poderes de la Fuerza y combate con sables de luz, y vivió durante casi 900 años. Su tiempo durante los últimos días de la Orden Jedi y más allá lo convirtió en una figura consecuente en la historia galáctica.",
    Boton:"Más sobre Yoda"
  },
  {
    Id: 4,
    Titulo: "Chewbacca",
    Imagen: imgCard4,
    Texto: "Chewbacca,llamado afectuosamente Chewie por sus amigos, fue un guerrero wookiee, un contrabandista y un luchador de resistencia que peleó en las Guerras Clon, la Guerra Civil Galáctica y el Guerra Fría. Fue criado en el planeta Kashyyyk y se convirtió en un líder militar. Durante las Guerras Clon, fue capturado por esclavistas trandoshanos y hecho prisionero en Wasskah, donde trabajó con otra cautiva, la Comandante Jedi Ahsoka Tano, para escapar.",
    Boton:"Más sobre Minecraft"
  },

];

const CardsApp = () => {
  return (
    <Container className="d-flex justify-content-center flex-wrap">
      {cards.map((card) => (
        <CardApp key={card.Id} title={card.Titulo} imageSrc={card.Imagen} texto={card.Texto} boton={card.Boton} />
      ))}
    </Container>
  );
};

export default CardsApp;
