import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoNav from '../Assets/img/stae.png';
import {Link} from 'react-router-dom';
import './navbar.css';

const NavbarApp = () => {
    return (
        <Navbar bg='black' expand="lg" variant="dark" className="p-2">
            <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center" style={{color:"palevioletred"}}>
                <img src={logoNav}
                width="70px"
                className='img'
                ></img>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"440px"}}>
                <Nav className="me-auto">
                    <Link  className='nav-link' to="/">INICIO</Link>
                    <Link  className='nav-link' to="/">CAPITULO</Link>
                    <Link  className='nav-link' to="/page">PERSONAJES</Link>
                    <Link  className='nav-link' to="/page">PLANETAS</Link>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarApp
