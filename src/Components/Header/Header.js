import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <div className='header-text'>
                <div className='row titles'>
                    <h1>La Luna Mágica</h1>
                    <h2>Adivinación</h2>
                </div>
                <div className='row paragraph'>
                    <p>¿Sabes qué caracteristicas tiene tu personalidad?</p>
                    <p>¿Sabes que te depara tu futuro?</p>
                    <p>La luna te dará una guía para tu vida</p>
                </div>
            </div>
        </header>
    );
}

export default Header;