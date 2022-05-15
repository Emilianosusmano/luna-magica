import React from "react";
import "./ZodiacInfo.css";
import ZodiacInformation from "../../data/zodiac-info.json";
import { calculateLuckyNumber } from "../../Utils/Utils";

function ZodiacInfo(props) {
  // Constante para cargar el directorio de imagenes
  const cargarImagen = require.context("../../img/Zodiac", true);

  // Se selecciona la informacion a mostrar desde el .json filtrando por signo seleccionado
  const zodiac = ZodiacInformation.filter((sign) => {
    return sign.id === props.zodiac;
  })[0];

  return (
    <div className=" container zodiac-info">
      <img
        className="zodiac-img"
        src={cargarImagen(`./${zodiac.id}.png`)}
        alt="imagen signo"
      />
      <h2 className="zodiac-title">
        {zodiac.id} - Desde {zodiac.dateFrom} hasta {zodiac.dateTo}
      </h2>
      <p className="zodiac-text">
        Lo que ocurre diariamente en el firmamento influye en muchos de los
        aspectos de nuestra vida. De manera más básica y primaria, durante el
        momento en el que nacemos, estableciendo nuestra carta astral, la cual
        nos implantará una serie de rasgos de personalidad, a través del signo
        solar, el lunar y el ascendente, y los planetas personales: Mercurio,
        Venus y Marte. Después, con los movimientos que cada día van sucediendo.
        Porque así es el universo, un continuo cambio, y por eso sentimos las
        energías de los traslados de los planetas por las diferentes
        constelaciones —sí, la retrogradación de Mercurio, también—. De la misma
        manera que la rotación de una temporada a otra según el momento del año
        en el que estemos.
      </p>
      <p className="zodiac-text">{zodiac.text}</p>
      <span className="zodiac-subtitle">Horoscopo para {zodiac.id}</span>
      <p className="zodiac-text">
        Como los astros tienen que estar de tu parte y no en tu contra, aquí
        tienes el horóscopo diario que mereces. Así podrás mirarlo a primera
        hora de la mañana y organizarte el día.
      </p>
      <ul className="zodiac-list">
        <li className="zodiac-list-item">
          <strong>Amor</strong>
        </li>
        <li className="zodiac-list-item">{zodiac[props.gender.toUpperCase()].love}</li>
        <li className="zodiac-list-item">
          <strong>Trabajo</strong>
        </li>
        <li className="zodiac-list-item">{zodiac[props.gender.toUpperCase()].job}</li>
        <li className="zodiac-list-item">
          <strong>Tips</strong>
        </li>
        <li className="zodiac-list-item">{zodiac[props.gender.toUpperCase()].tips}</li>
        <li className="zodiac-list-item">
          <strong>Numero de la Suerte</strong>
        </li>
        <li className="zodiac-list-item">{calculateLuckyNumber(props.name)}</li>
      </ul>
    </div>
  );
}

export default ZodiacInfo;
