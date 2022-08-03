import './App.css';
import Home from './Components/Home';
import NavbarApp from './Components/Navbar/Index';
import "bootstrap/dist/css/bootstrap.min.css";
import FooterApp from './Components/Footer/Index';
import { Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
    <NavbarApp/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/page' element={<HomePage/>}/>
    </Routes>
    <FooterApp/>
    </div>
  );
}

export default App;
