import React from 'react';

function Mancheta(props) {
    // Metodo para informar al componente que lo invoque que se debe borrar el texto de error al cerrar la mancheta
    function closeAlert() {
        props.setErrorMessage('');
    }

    return (
        <div className='container'>
            {(!!props.errorMessage) ? <div className="alert alert-warning mt-5" role="alert">
                {props.errorMessage}
                <button type="button" className="btn-close" aria-label="Close" onClick={closeAlert}></button>
            </div> : null}
        </div>
    );
}

export default Mancheta;