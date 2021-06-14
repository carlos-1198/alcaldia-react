import React from 'react';

import noticias from '../jsons/Noticias.json';
import './styles/Noticia.css';
class Noticias extends React.Component{
    render(){
        return(
            <div className="dark-back">
                <div className="container">
                    <div className="row">
                        <h2 className="section_tittles">Noticias</h2>    
                    </div>
                    <div className="row ">
                    {
                        noticias.map((noticia) => (
                            <div key={noticia.id} className="news-card col-sm-12 col-md-6 col-lg-4">
                                <div className="card ">
                                    <div className="overflow">
                                    <img className="card-img-top" src={noticia.image} alt="Card image cap"/>
                                    </div>
                                        <div className="card-body dark-back">
                                            <h5 className="new-title">{noticia.tittle}</h5>
                                            <p className="light-back">{noticia.fecha}</p>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="button_view_more">
                        <a className="btn btn-light">Ver más</a>
                    </div>
                </div>
            </div>   
        );
    }
}

export default Noticias;