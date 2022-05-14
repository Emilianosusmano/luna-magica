import React, { useState,Fragment } from 'react';
import './CardsThrow.css'
import TarotInformation from '../../data/tarot.json'
import { Button } from 'react-bootstrap';
import Spinner from '../Spinner/Spinner';

function CardsThrow(props) {
    const cargarImagen = require.context("../../img/CardThrow", true);
    const [showTarot, setShowTarot] = useState(false)
    const [loading, setLoading] = useState(false)

    function generateRandom(max) {
        return Math.floor(Math.random() * max);
    }

    function tarotToggle() {
        setLoading(true)
        setTimeout(function() {
            setShowTarot(!showTarot)
            props.showButtons(true)
            setLoading(false)
        }, 3000)
    }

    const tarotPast = TarotInformation.Pasado[generateRandom(TarotInformation.Pasado.length)];
    const tarotPresent = TarotInformation.Presente[generateRandom(TarotInformation.Presente.length)];
    const tarotFuture = TarotInformation.Futuro[generateRandom(TarotInformation.Futuro.length)];

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
            { loading ? <Spinner /> : null }
            { showTarot ? <Fragment>
                <div className='row cards-throw-tarot'>
                    <div className='cards-throw-tarot-img'>
                        <img className='zodiac-img' src={cargarImagen(`./${tarotPast.card}.png`)} alt='imagen signo' />
                        <label className='zodiac-img-label'>Pasado</label>
                        <label className='zodiac-img-name'>{tarotPast.card}</label>
                    </div>
                    <div className='cards-throw-tarot-img'>
                        <img className='zodiac-img' src={cargarImagen(`./${tarotPresent.card}.png`)} alt='imagen signo' />
                        <label className='zodiac-img-label'>Presente</label>
                        <label className='zodiac-img-name'>{tarotPresent.card}</label>
                    </div>
                    <div className='cards-throw-tarot-img'>
                        <img className='zodiac-img' src={cargarImagen(`./${tarotFuture.card}.png`)} alt='imagen signo' />
                        <label className='zodiac-img-label'>Futuro</label>
                        <label className='zodiac-img-name'>{tarotFuture.card}</label>
                    </div>
                </div>
                <div className='cards-throw-result'>
                    <h4 className='cards-throw-tarot-subtitle'>Presente</h4>
                    <p className='cards-throw-tarot-text'>{tarotPast.description}</p>
                    <h4 className='cards-throw-tarot-subtitle'>Pasado</h4>
                    <p className='cards-throw-tarot-text'>{tarotPresent.description}</p>
                    <h4 className='cards-throw-tarot-subtitle'>Futuro</h4>
                    <p className='cards-throw-tarot-text'>{tarotPresent.description}</p>
                </div>
            </Fragment> : null }
        </div>
    );
}

export default CardsThrow;