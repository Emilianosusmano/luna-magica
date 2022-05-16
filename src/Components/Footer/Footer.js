import React from "react";
import Icon from '@mdi/react';
import './Footer.css'
import { mdiLinkedin, mdiEmail } from '@mdi/js';

function Footer() {

    return (
        <footer className="container footer mb-5">
            <hr className="line" />
            <div className="contact mb-5">
                <a
                    className="contact-item"
                    href="https://www.linkedin.com/in/emilianosusmano/"
                    target="_blank"
                    rel="noreferrer"
                ><Icon path={mdiLinkedin} size="24px" /> Linkedin</a
                >
                <a
                    className="contact-item"
                    href="mailto:emilianosusmano@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                ><Icon path={mdiEmail} size="24px" /> Correo electrónico</a
                >
            </div>
            <span>Emiliano Susmano</span>
        </footer>
    )
}

export default Footer;