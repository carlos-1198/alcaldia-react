import React from 'react';

import { FaCheckSquare } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import items from '../jsons/item.json';
import './styles/ItemsParticipacion.css';

class ItemsParticipacion extends React.Component{
    state = {
        icon:[FaCheckSquare, FaEye, FaEdit, FaFileAlt, FaRegComments, FaRegCommentDots],       
    };

    IconString (nameIcon){
        for(var i=0; i<this.state.icon.lenght;i++){
            console.log(i + "" + nameIcon);
            if(this.state.icon[i].name == nameIcon){
                console.log(i + "" + this.state.icon[i].name);
                return this.state.icon[i];
            }
        }
    }  

    render(){
        return(
            <div className="dark-back">
                <div className="container">
                    <div className="row">
                        <h2 className="section_tittles">Participación Ciudadana</h2>    
                    </div>
                    <div className="row">
                    {
                        items.map((item) => (
                            <div key={item.id} className="item2">
                                <div className="block-container"> 
                                    <span className="d-block">  
                                    <FaEye color="white" fontSize="4em"/>
                                    </span>
                                    <span className="icon_description">{item.description}</span>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>   
        );     
    }
}
export default ItemsParticipacion;