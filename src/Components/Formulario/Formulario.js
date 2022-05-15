import React, { useState } from "react";
import "./Formulario.css";
import { Button, Form } from "react-bootstrap";
import buttonImg from "../../img/Boton-consulta.png";
import Mancheta from "../Mancheta/Mancheta";
import { useLocation } from "wouter";

function Formulario() {
  // Estados del componente
  const [path, pushLocation] = useLocation();
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    gender: "",
    birthDate: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Metodo para manejar los cambios de estado de los inputs del formulario y guardar sus valores en el estado actual
  function handleChange(evt) {
    const { name, value } = evt.target;
    let regexName = new RegExp("^[a-zA-Z ]+$");
    let regexGender = new RegExp("^[fFmMnN]+$");

    if (name === "name") {
      if (!regexName.test(value) && value.length > 0) {
        setErrorMessage("El nombre puede ser completado solo con letras.")
        return false;
      } else {
        setErrorMessage('')
      }
    }

    if (name === "gender") {
      if (!regexGender.test(value) && value.length > 0) {
        setErrorMessage("El genero solo puede completarse con F (Femenino), M (Masculino) o N (No binario)")
        return false;
      } else {
        setErrorMessage('')
      }
    }

    const newValues = {
      ...formValues,
      [name]: value,
    };
    setFormValues(newValues);
  }

  // Metodo para manejar el submit del formulario y la redireccion a la pagina de resultados
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!formValidate()) {
      pushLocation(
        `/adivinacion/${formValues.name}/${formValues.age}/${formValues.gender}/${formValues.birthDate}`
      );
    }
  };

  // Metodo para validar los datos del formulario y mostrar texto informativo en caso de datos erroneos
  function formValidate() {
    var tuvoError = false;
    var errorText = "Son todos los campos obligatorios, le falto completar";
    if (formValues.name === "") {
      errorText += " nombre";
      tuvoError = true;
    }
    if (formValues.age === "") {
      errorText += " edad";
      tuvoError = true;
    }
    if (formValues.gender === "") {
      errorText += " genero F (Femenino), M (Masculino) o N (No binario)";
      tuvoError = true;
    }
    if (formValues.birthDate === "" || formValues.birthDate === undefined) {
      errorText += " fecha de nacimiento";
      tuvoError = true;
    }
    errorText += ".";
    setErrorMessage(tuvoError ? errorText : "");
    return tuvoError;
  }

  return (
    <div className="container">
      <h2 className="form-title mt-5">Déjanos conocerte un poco más:</h2>
      <Form onSubmit={handleSubmit} className="row form1 mt-5">
        <Form.Group className="col-lg-5 col-sm-12 input-item">
          <Form.Label>Nombre Completo:</Form.Label>
          <Form.Control
            type="text"
            className="input-name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="col-lg-1 col-sm-12 input-item">
          <Form.Label>Edad:</Form.Label>
          <Form.Control
            type="number"
            className="input-age"
            min="0"
            max="150"
            name="age"
            value={formValues.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="col-lg-1 col-sm-12 input-item">
          <Form.Label>Género:</Form.Label>
          <Form.Control
            type="text"
            className="input-gender"
            maxLength="1"
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="col-lg-5 col-sm-12 input-item">
          <Form.Label>Fecha de Nacimiento:</Form.Label>
          <Form.Control
            type="date"
            data-date-format="YYYYMMDD"
            className="input-birthDate"
            name="birthDate"
            value={formValues.birthDate}
            onChange={handleChange}
          />
        </Form.Group>
        {errorMessage !== "" ?
          <Mancheta
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          : null}
        <Button type="submit" className="form-button">
          <img className="form-button-img mb-3" src={buttonImg} alt="Boton consulta" />
        </Button>
        <span className="form-button-txt">Consultá tu Horoscopo</span>
      </Form>
    </div>
  );
}

export default Formulario;
