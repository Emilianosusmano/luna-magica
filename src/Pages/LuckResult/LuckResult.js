import React, { useState, useEffect } from "react";
import ZodiacInfo from "../../Components/ZodiacInfo/ZodiacInfo";
import { ZodiacCalculation } from "../../Utils/Utils";
import { useLocation } from "wouter";
import { Button } from "react-bootstrap";
import "./LuckResult.css";
import CardsThrow from "../../Components/CardsThrow/CardsThrow";
import html2pdf from "html2pdf.js";
import PersonalInfo from "../../Components/PersonalInfo/PersonalInfo";

function LuckResult({ params }) {
  const { name, age, gender, birthDate } = params;

  // Uso un efecto para ir al toop de la pagina al renderizarla
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  // Constante para manejar la redireccion del componente
  const [path, pushLocation] = useLocation();

  // Estados del componente
  const [showButtons, setShowButtons] = useState(false);

  // Constante donde se almacena el signo segun la fecha de nacimiento
  const zodiac = ZodiacCalculation(birthDate);

  // Metodo para imprimir el documento
  const printDocument = (e) => {
    e.preventDefault();
    html2pdf(document.getElementById("luck-result"), {
      filename: `${name.replace("%20", " ")} ${zodiac} ${age}.pdf`,
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        orientation: "portrait",
        unit: "in",
        format: "A4",
        compressPDF: true,
        disableSmartShrinking: true,
        pagebreak: { mode: ["avoid-all"] },
      },
    });
  };

  // Metodo para redireccion a la pagina anterior y realizar una nueva consulta
  function goBack() {
    pushLocation("/homepage");
  }

  return (
    <>
      <div className="luck-result" id="luck-result">
        <PersonalInfo
          name={name}
          age={age}
          gender={gender}
          birthDate={birthDate}
        />
        <ZodiacInfo zodiac={zodiac} name={name} gender={gender} />
        <CardsThrow showButtons={setShowButtons} />
      </div>
      {showButtons ? (
        <div className="container mt-5 mb-5 luck-button-group">
          <Button className="luck-button-btn" onClick={printDocument}>
            <span className="luck-button-btn-text">
              Descargar informacion en PDF
            </span>
          </Button>
          <Button className="luck-button-btn" onClick={goBack}>
            <span className="luck-button-btn-text">Realizar otra consulta</span>
          </Button>
        </div>
      ) : null}
    </>
  );
}

export default LuckResult;
