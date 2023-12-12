import React from "react";
import colecionImg from "../../img/colecion.jpg"
import "../../styles/colecion.css";

const Colecion = () =>{
    return(
        <section>
            <div className="container-fluid colecionBoard d-flex flex-row  ">
                <div className="colecionImagen col-md-4">
                    <img src={colecionImg} alt="colecion foto"/>
                </div>
                <div className="colecionDescription col-md-4 offset-md-1">
                    <h1 className="mb-4">COLECCIONES</h1>
                    <p>Ropa diseñada para héroes en el cuidado de la salud. Comodidad, estilo y funcionalidad en cada prenda. Tejidos de alta calidad para enfrentar desafíos diarios. La elección perfecta para el personal de enfermería.</p>
                    <span><strong>Encuentra el tuyo</strong></span>
                </div>
            </div>
        </section>
    )
}

export default Colecion