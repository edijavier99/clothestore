import React from "react";
import "../../styles/modelos.css";

const Modelos = () => {
  return (
    <section className="d-flex flex-column">
      <h1>MODELOS</h1>
      <div className="modeloGeneroBoard d-flex p-5 col-md-11">
        <div className="col-md-6 mx-2 imagenModelo">
          <img
            src="https://cdn.pixabay.com/photo/2017/11/02/14/26/man-2911327_1280.jpg"
            alt="modelo-chico"
            className="modeloImagen"
          />
          <div className="tituloModelo">Hombre</div>
        </div>
        <div className="col-md-6 imagenModelo">
          <img
            src="https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_1280.jpg"
            alt="modelo-chica"
            className="modeloImagen"
          />
          <div className="tituloModelo">Mujer</div>
        </div>
      </div>
    </section>
  );
};

export default Modelos;


