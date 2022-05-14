import React from 'react';
import './Homepage.css'
import Header from '../../Components/Header/Header';
import Formulario from '../../Components/Formulario/Formulario';

function Homepage() {
    return (
        <div className='homepage'>
            <Header />
            <Formulario />
        </div>
    );
}

export default Homepage;