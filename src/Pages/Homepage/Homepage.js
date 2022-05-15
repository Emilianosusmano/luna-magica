import React, { useEffect } from 'react';
import './Homepage.css'
import Header from '../../Components/Header/Header';
import Formulario from '../../Components/Formulario/Formulario';

function Homepage() {
    // Uso un efecto para ir al toop de la pagina al renderizarla
    useEffect(function() {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='homepage'>
            <Header />
            <Formulario />
        </div>
    );
}

export default Homepage;