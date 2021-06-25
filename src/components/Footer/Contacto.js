import React from 'react';

import logo from '../../images/escudo.png';
import { FaPhone } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import '../styles/Contacto.css';

class Contacto extends React.Component{
    render(){
        return(
            <footer className=" clear-fix">
                <div className="container">
                    <div className="row">
                        <div className="contact col-md-8">
                            <div className="row">
                                <h2 className="title-section">Contáctenos</h2>    
                            </div>
                            <div className="row">
                                <div className="info-container col-md-6">
                                    <div className="info place">
                                        <span class="icon"><FaInfoCircle color="#66A9F4" fontSize="1.250em"/></span>
                                        <span>Dirección:</span> Inserte aqui la direccion del sitio.
                                    </div>
                                    <div className="info clock">
                                        <span class="icon"><FaClock color="#66A9F4" fontSize="1.250em"/></span>
                                        <span>Horario atención:</span> inserte aqui los horarios de
                                        atención.
                                    </div>
                                    <div className="info clock">
                                        <span class="icon"><FaClock color="#66A9F4" fontSize="1.250em"/></span>
                                        <a> Atención al ciudadano </a>
                                    </div>
                                    <div className="info directory">
                                        <span class="icon"><FaInfoCircle color="#66A9F4" fontSize="1.250em"/></span>
                                        <a>Directorio dependencias</a>
                                    </div>
                                    <div className="info directory">
                                        <span class="icon"><FaInfoCircle color="#66A9F4" fontSize="1.250em"/></span>
                                        <a><span>NIT: </span>00000000 </a>
                                    </div>
                                </div>
                                <div className="info-container2 col-md-6 ">
                                    <div className="info phone">
                                        <span class="icon"><FaPhone color="#66A9F4" fontSize="1.250em"/></span>
                                        <span>Linea Nacional:</span> Inserte aqui la linea nacional.
                                    </div>
                                    <div className="info phone">
                                        <span class="icon"><FaPhone color="#66A9F4" fontSize="1.250em"/></span>
                                        <span>Lineas Locales:</span> Inserte aqui las lineas locales.
                                    </div>
                                    <div className="info email">
                                        <span class="icon"><FaRegEnvelope color="#66A9F4" fontSize="1.250em"/></span>
                                        <span>Email:</span> <a>contactenos@example.gov.co</a>
                                    </div>

                                    <div className="info email">
                                        <span class="icon"><FaRegEnvelope color="#66A9F4" fontSize="1.250em"/></span>
                                        <a><span>Notificaciones Judiciales:</span>
                                            notificacionesjudiciales@example.gov.co</a>
                                    </div>    
                                </div>
                            </div>    
                        </div>

                        <div className="text-center logo_contacto    col-md-4">
                            <img src={logo} class="rounded"
                                alt="..."></img>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Contacto;