import React from 'react'
import {CarouselApp} from '../../Components/Carrusel/Index';
import {TextoApp} from '../../Components/Texto/Index';
import {CardsApp} from '../../Components/Cards';
export const HomeApp = () =>{
    return(
        <div>
            <CarouselApp/>
            <TextoApp/>
            <CardsApp/>
        </div>
    )
}