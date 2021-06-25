import React from 'react';

import { FaCar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";

import './styles/Tramites.css';
class Tramites extends React.Component{
    render(){
        return(
            <div className="light-back">
                <div className="container">
                    <div className="row">
                        <h2 className="section_tittles">Trámites y Servicios</h2>    
                    </div>
                    <div className="row">
                        <div id="service-list">
                            <ul class="nav justify-content-center">
                                <li class="nav-item text-center">
                                    <span className="mb-2 service-icon flex justify-center"><FaCalculator color="#215A9A" fontSize="4em"></FaCalculator></span>
                                    <a class="nav-link" href="#">Impuestos</a>
                                </li>
                                <li class="nav-item text-center">
                                    <span className="mb-2 service-icon flex justify-center"><FaHome color="#215A9A" fontSize="4em"></FaHome></span>
                                    <a class="nav-link" href="#">Catastro</a>
                                </li>
                                <li class="nav-item text-center">
                                    <span className="mb-2 service-icon flex justify-center"><FaCar color="#215A9A" fontSize="4em"></FaCar></span>
                                    <a class="nav-link" href="#">Movilidad</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tramites;