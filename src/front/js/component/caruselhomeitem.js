import React from "react";
import portada from "../../img/portada2.png";
import portadaFondo from "../../img/portadaChico.png";

const CaruselHomeItem = ({ title, buttonText, navigation, description }) => {
  return (
<div className="carousel-item active d-flex flex-row" style={{ backgroundImage: `url(${portadaFondo})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionY: '-100%', backgroundPositionX: 'center',   backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <div className="description text-white col-md-7">
        <h1>ÚLTIMAS <br /> <span className="ms-5">NOVEDADES </span></h1>
        <button className="btn mt-5 comprarHome btn-dark">COMPRAR  <i className="fa-solid fa-arrow-right"></i>  </button>
      </div>
      <div className="imagenPortada col-md-5">
        <img src={portada} alt="fotoportada" className="d-block" />
      </div>
    </div>
  );
}

export default CaruselHomeItem;