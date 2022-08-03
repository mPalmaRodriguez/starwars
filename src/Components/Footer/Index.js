import React from 'react';
import { BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";
import './footer.css';

const FooterApp = () => {
    return (
        <div className="footer">
            <div className="row d-flex justify-content-center align-items-center m-0 bg-black text-white p-2 row-cols-md-3 row-cols-sm-1">
                <div className="d-flex justify-content-center align-items-center p-2">
                </div>
                <div className="p-2" style={{textAlign:"center"}}>
                    <h5 className="mt-2 mb-2">Creado por: Mariana Palma</h5>
                </div>
                <div className="d-flex justify-content-center align-items-center p-2">
                    <a href="https://www.instagram.com/mapa160901/" className="l-image m-1" target={'_blank'}><BsInstagram size={25} className="imagei m-3" /></a>
                    <a href="https://github.com/mPalmaRodriguez" className="l-image m-1" target={'_blank'}><BsGithub size={25} className="imageg m-3" /></a>
                    <a href="https://www.facebook.com/marianapr1609/" className="l-image m-1" target={'_blank'}><BsFacebook size={25} className="imagef m-3" /></a>

                </div>
            </div>
            <div className="row line-footer m-0 p-3 text-center text-white">
                <small> © 2022 <b>Mariana Palma Rodríguez</b> - copyright</small>
            </div>
        </div>
    )
}

export default FooterApp