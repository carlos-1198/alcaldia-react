import React from 'react';
import { FaEdit }  from "react-icons/fa";
import { FaTrashAlt }  from "react-icons/fa";
import { FaPlusCircle }  from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/CrudNoticia.css';

class CrudNoticia extends React.Component{
    state = {
        data: [],
        url: 'http://seminarioalcaldia-env.eba-ws2bjadt.us-east-1.elasticbeanstalk.com/',
    };
    
    componentDidMount(){
        this.fetchNews();
    }

    fetchNews = async () => {
        const response = await fetch(`${this.state.url}noticia`);
        const data = await response.json();
        this.setState({
            data : data,
        });
    }
    render(){
        return(
            <div>
                <div class="container-fluid pt-4">
                    <div class="row">
                        <div class="table-responsive col-md-8 offset-md-2"> 
                            <div class="row align-items-center">
                                <div class="col"><h2>Crear Noticia</h2></div>
                                <div class="col">
                                    <Link to="" id="create-icon"><FaPlusCircle/></Link>
                                </div>
                            </div>
                            <table class="table pt-4 text-center ">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Titulo</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {   
                                     this.state.data.map((noticia) => (
                                         <tr key={noticia.idNoticia}>
                                            <td>{noticia.idNoticia}</td>
                                            <td>{noticia.descripcion}</td>
                                            <td>{noticia.titulo}</td>
                                            <td>
                                                <Link to="" id="edit-icon"><FaEdit/></Link>
                                                <Link to="" id="delete-icon"><FaTrashAlt/></Link>
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

export default CrudNoticia;