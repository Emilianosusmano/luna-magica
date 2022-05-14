import React, { useState,Fragment } from 'react';
import './CardsThrow.css'
import ZodiacInformation from '../../data/zodiac-info.json'
import TarotInformation from '../../data/tarot.json'
import { Button } from 'react-bootstrap';

function CardsThrow(props) {
    const cargarImagen = require.context("../../img/CardThrow", true);
    const [showTarot, setShowTarot] = useState(false)

    function generateRandom(max) {
        return Math.floor(Math.random() * max);
    }

    function tarotToggle() {
        setShowTarot(!showTarot)
        props.showButtons(true)
    }

    return (
        <div className='container cards-throw'>
            <h2 className='cards-throw-title'>Tirada de cartas</h2>
            <div className='row cards-throw-button-container'>
                <img className='cards-throw-card-img1' src={cargarImagen('./cards.png')} alt='imagen signo' />
                { !showTarot ? 
                <Button className='cards-throw-btn' onClick={tarotToggle}>
                    <img className='cards-throw-btn-img' src={cargarImagen('./Boton-consulta.png')} alt='imagen signo' />
                    <span className='cards-throw-btn-text'>CONSULTA</span>
                </Button>
                : null }
                <img className='cards-throw-card-img2' src={cargarImagen('./cards.png')} alt='imagen signo' />
            </div>
            { showTarot ? <Fragment>
                <div className='row cards-throw-tarot'>
                    <div className='cards-throw-tarot-img'>
                        <img className='zodiac-img' src={cargarImagen('./Pasado.png')} alt='imagen signo' />
                        <label className='zodiac-img-label'>Pasado</label>
                    </div>
                    <div className='cards-throw-tarot-img'>
                        <img className='zodiac-img' src={cargarImagen('./Presente.png')} alt='imagen signo' />
                        <label className='zodiac-img-label'>Presente</label>
                    </div>
                    <div className='cards-throw-tarot-img'>
                        <img className='zodiac-img' src={cargarImagen('./Futuro.png')} alt='imagen signo' />
                        <label className='zodiac-img-label'>Futuro</label>
                    </div>
                </div>
                <div className='cards-throw-result'>
                    <h4 className='cards-throw-tarot-subtitle'>Presente</h4>
                    <p className='cards-throw-tarot-text'>{TarotInformation.Pasado[generateRandom(TarotInformation.Pasado.length)]}</p>
                    <h4 className='cards-throw-tarot-subtitle'>Pasado</h4>
                    <p className='cards-throw-tarot-text'>{TarotInformation.Presente[generateRandom(TarotInformation.Presente.length)]}</p>
                    <h4 className='cards-throw-tarot-subtitle'>Futuro</h4>
                    <p className='cards-throw-tarot-text'>{TarotInformation.Futuro[generateRandom(TarotInformation.Futuro.length)]}</p>
                </div>
            </Fragment> : null }
        </div>
    );
}

export default CardsThrow;