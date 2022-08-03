import "bootstrap/dist/css/bootstrap.min.css";
import CarouselApp from "./Carrusel/Index";
import TextoApp from "./Texto/Index";
import CardsApp from "./Cards/Index";
function Home(){
    return(
        <>
        <CarouselApp/>
        <TextoApp/>
        <CardsApp/>
        </>
    )
}

export default Home;