import React from "react";
import { Link } from "react-router-dom"

const Confirmation = props => {

    const { order } = props;

    return (
        <div className="confirmation-container">           
        <h3>Review your pizza before on its way!</h3>
        {order.map(item => {
            return (
                <div key={item.id}>
                    <h4>Name: {item.name}</h4>
                    <p>Size: {item.size}</p>
                    <p>Toppings: </p>
                    {item.pepperoni && <p>Pepperoni</p>}
                    {item.sausage && <p>Sausage</p>}
                    {item.canadianBacon && <p>Canadian Bacon</p>}
                    {item.pineapple && <p>Pineapple</p>}
                    {item.onions && <p>Onions</p>}
                    {item.spicyItalianSausage && <p>Spicy Italian Sausage</p>}
                    {item.grilledChicker && <p>Grilled Chicker</p>}
                    {item.dicedTomatos && <p>Diced tomatos</p>}
                    {item.blackOlives && <p>Black olives</p>}
                    {item.roastedGarli && <p>Roasted garlic</p>}
                    {item.artichokeHearts && <p>Artichoke hearts</p>}
                    {item.threeCheese && <p>Three Cheese</p>}
                    {item.extraCheese && <p>Extra cheese</p>}
                    <p>Special Instructions: {item.special} </p>
                </div>    
            )
        })}
        
        <button><Link to="/">Return to Home Page</Link></button>
        </div>
    )
}

export default Confirmation;