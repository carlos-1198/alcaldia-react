import React from 'react';
import eventos from '../../jsons/Eventos_Semana.json';
import { FaEdit }  from "react-icons/fa";
import { FaTrashAlt }  from "react-icons/fa";
import { FaPlusCircle }  from "react-icons/fa";
import '../styles/CrudEvento.css';

class CrudEvento extends React.Component{
    componentDidMount(){
        if(localStorage.getItem("token") === null){
            this.props.history.push('/login');
        }
    }
    render(){
        return(
<div>
                <div class="container-fluid pt-4">
                    <div class="row">
                        <div class="table-responsive col-md-8 offset-md-2"> 
                        <div class="row">
                                <div class="col"><h2>Añadir Nuevo Evento</h2></div>
                                <div class="col">
                                    <a id="create-icon" href="/Admin/NewEvento"><FaPlusCircle/></a>
                                </div>
                            </div>
                            <table class="table pt-4 text-center ">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Categoria</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {   
                                     eventos.map((evento) => (
                                         <tr key={evento.id}>
                                            <td>{evento.id}</td>
                                            <td>{evento.fecha_inicio}-{evento.fecha_finaliza}</td>
                                            <td>{evento.categoria}</td>
                                            <td>{evento.title}</td>
                                            <td>{evento.descripcion}</td>
                                            <td>
                                                <a id="edit-icon"><FaEdit/></a>
                                                <a id="delete-icon"><FaTrashAlt/></a>
                                            </td>
                                         </tr>
                                     ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            )
    }
}

export default CrudEvento;