import React, { useState } from "react";

const PurchaseCard = () => {

    const [calculate, setCalculate] = useState(0)
    const handleCalculate = (e) => {
        setCalculate(e.target.value*4200)
        console.log(e.target.value);
        
    }

    return (
        <div className="purchase-card">
        <div className="image-container">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82yis_ZETt7HS2MDYhCYScYGD-JPO56WEkA&s" 
                alt="Monedas V"
                className="product-image"
            />
        </div>
        <div className="details-container">
            <h1 className="product-title">Monedas V</h1>
            <p className="product-description">
                Moneda virtual de Fortnite. <br />
                Con esta moneda podrás comprar diferentes objetos, como el pase de batalla y skins.
            </p>
            <div className="selector-container">
                <label htmlFor="amount" className="selector-label">
                    Selecciona la cantidad:
                </label>
                <select id="amount" name="amount" onChange={handleCalculate} className="amount-selector">
                    <option value={1000}>1000 Monedas V</option>
                    <option value={2800}>2800 Monedas V</option>
                    <option value={5000}>5000 Monedas V</option>
                    <option value={13500}>13500 Monedas V</option>
                </select>
            </div>
            <p className="calculated-price">Precio: {calculate} COP</p>
            <button type="button" className="pay-button">
                Ir a Pagar
            </button>
        </div>
    </div>
);
};

export default PurchaseCard;