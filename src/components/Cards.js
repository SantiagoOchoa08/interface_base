import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
    return (
        <section className="card-section">
            <div className="card">
                <h2 className="card-title">Monedas V</h2>
                <div className="card-content">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82yis_ZETt7HS2MDYhCYScYGD-JPO56WEkA&s" 
                        alt="Monedas V"
                        className="card-image"
                    />
                    <p className="card-description">
                        Moneda virtual de Fortnite.
                    </p>
                    <p className="card-detail">
                        Con esta puedes adquirir distintos objetos dentro del juego.
                    </p>
                    <button className="card-button">
                       <Link to={"/purchase"} > Comprar ahora </Link> 
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cards;