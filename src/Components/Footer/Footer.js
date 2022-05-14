import React from "react";
import Icon from '@mdi/react';
import './Footer.css'
import { mdiLinkedin, mdiEmail } from '@mdi/js';

function Footer() {

    return (
        <footer className="container footer">
            <hr className="line" />
            <div className="contact">
                <a
                    className="contact-item"
                    href="https://www.linkedin.com/in/emilianosusmano/"
                    target="_blank"
                ><Icon path={mdiLinkedin} size="24px" /> Linkedin</a
                >
                <a
                    className="contact-item"
                    href="mailto:emilianosusmano@gmail.com"
                    target="_blank"
                ><Icon path={mdiEmail} size="24px" /> Correo electrónico</a
                >
            </div>
            <span className="mt-3 mb-3">Emiliano Susmano</span>
        </footer>
    );
}

export default Footer;