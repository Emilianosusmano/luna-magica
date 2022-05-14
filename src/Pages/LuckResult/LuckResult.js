import React, { useState } from "react";
import ZodiacInfo from "../../Components/ZodiacInfo/ZodiacInfo";
import { ZodiacCalculation } from "../../Utils/Utils";
import { useLocation } from "wouter";
import { Button } from "react-bootstrap";
import "./LuckResult.css";
import CardsThrow from "../../Components/CardsThrow/CardsThrow";
import html2pdf from "html2pdf.js";

function LuckResult({ params }) {
  const { name, age, gender, birthDate } = params;
  const [path, pushLocation] = useLocation();
  const [showButtons, setShowButtons] = useState(false);

  const zodiac = ZodiacCalculation(birthDate);

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

  function goBack() {
    pushLocation("/homepage");
  }

  return (
    <>
      <div className="luck-result" id="luck-result">
        <ZodiacInfo zodiac={zodiac} name={name} />
        <CardsThrow showButtons={setShowButtons}/>
      </div>
      {showButtons ? (
        <div className="container mt-5 mb-5 luck-button-group">
          <Button
            type="button"
            className="btn btn-outline-light delete-background"
            onClick={printDocument}
            variant="outline-dark"
          >
            Descargar info en PDF
          </Button>
          <Button
            type="button"
            className="btn btn-outline-light delete-background"
            onClick={goBack}
            variant="outline-dark"
          >
            Realizar otra consulta
          </Button>
        </div>
      ) : null}
    </>
  );
}

export default LuckResult;
