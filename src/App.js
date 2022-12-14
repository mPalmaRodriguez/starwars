import './App.css';
import Home from './Components/Home';
import NavbarApp from './Components/Navbar/Index';
import "bootstrap/dist/css/bootstrap.min.css";
import FooterApp from './Components/Footer/Index';
import { Route, Routes} from "react-router-dom";
import Cardcharacter from './Pages/characters/Index';
import Cardplanet from './Pages/planets/Index';
import Details from './Components/Details/Details';
import DetailsP from './Components/Details/DetailsP';

function App() {
  return (
    <div className="App">
    <NavbarApp/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/characters' element={<Cardcharacter/>}/>
      <Route path='/planets' element={<Cardplanet/>}/>
      <Route path='/Details/:nombres/:num' element={<Details/>}/>
      <Route path='/DetailsP/:nombre/:numero' element={<DetailsP/>}/>

    </Routes>
    <FooterApp/>
    </div>
  );
}

export default App;
