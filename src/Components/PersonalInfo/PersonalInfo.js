import React from "react";

function PersonalInfo(props) {
    // Estados del componente
    const { name, age, gender, birthDate } = props;

    // Se baja el valor dela fecha de nacimiento a una variable para darle formato y mejorar la visibilidad
    const newBirthDate = birthDate.split("-");

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name.replace("%20", " ")}</h5>
                <p className="card-text">Edad: {age}.</p>
                <p className="card-text">Genero: {gender.toUpperCase() === 'M' ? "Masculino" : gender.toUpperCase() === 'F' ? "Femenino" : "No Binario"}.</p>
                <p className="card-text">Fecha de nacimiento: {newBirthDate[2]}/{newBirthDate[1]}/{newBirthDate[0]}.</p>
            </div>
        </div>
    );
}

export default PersonalInfo;