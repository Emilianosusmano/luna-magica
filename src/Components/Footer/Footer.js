import React from "react";

function Footer(props) {
    const { name, age, gender, birthDate } = props;
    const newBirthDate = birthDate.split("-");

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name.replace("%20", " ")}</h5>
                <p className="card-text">Edad: {age}.</p>
                <p className="card-text">Genero: {gender == 'm' ? "Masculino" : gender == 'f' ? "Femenino" : "No Binario"}.</p>
                <p className="card-text">Fecha de nacimiento: {newBirthDate[2]}/{newBirthDate[1]}/{newBirthDate[0]}.</p>
            </div>
        </div>
    );
}

export default Footer;