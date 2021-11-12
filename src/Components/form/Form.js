import React , { useState }from "react";
import Confirmation from "./Confirmation"

const Form = (props) => {

    const initialValues = {
        name:"",
        size:"",
        pepperoni:false,
        sausage:false,
        canadianBacon:false,
        pineapple:false,
        onions:false,       
        spicyItalianSausage:false,
        grilledChicker:false,
        greenPepper:false,
        dicedTomatos:false,
        blackOlives:false,
        roastedGarli:false,
        artichokeHearts:false,
        threeCheese:false,
        extraCheese:false,
        special:""
    }

    const [values, setValues] = useState(initialValues);

    const [placeOrder, setPlaceOrder] = useState(false);

    const { name, size, pepperoni, sausage, canadianBacon, spicyItalianSausage , pineapple, onions, grilledChicker,greenPepper,dicedTomatos,blackOlives,roastedGarli,artichokeHearts,threeCheese,extraCheese, special } = props;

    const submitHandler = event => {
        event.preventDefault();
        console.log(values);
        setPlaceOrder(true);
    }

    const onChangeHandler = event => {
        console.log(event);
        console.log(event.target.name,event.target.value);
        const {name, type, value, checked} = event.target;
        const checkType = type === "checkbox"? checked : value ;
        setValues( {...values, [name]:checkType});
        
    }


    return (
        <>
            <h2>Build Your Own Pizza</h2>
            {disabled && <p>Name must be at least 2 characters long</p>}
            { !placeOrder && <form id="pizza-form" onSubmit={submitHandler} >
                <label for="name">
                    Name
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={onChangeHandler}
                        id="name-input"
                    />
                </label>

                <hr />
                <label for="size">
                    Choice of Size <br /> Required
                    <select name="pizza-siza" id="size-dropdown" value={size} onChange={onChangeHandler} >
                        <option value="">--Select--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <hr />
                </label>


                <p>Add Toppings <br /> Choose up to 10 </p>
                <label for="pepperoni">
                    <input type="checkbox" name="pepperoni" value={pepperoni} onChange={onChangeHandler} />
                    Pepperoni
                </label>
                <label for="sausage">
                    <input type="checkbox" name="sausage" value={sausage} onChange={onChangeHandler} />
                    Sausage
                </label>
                <label for="canadian-bacon">
                    <input type="checkbox" name="canadian-bacon" value={canadianBacon} onChange={onChangeHandler} />
                    Canadian Bacon
                </label>
                <label for="spicy-italian-sausage">
                    <input type="checkbox" name="spicy-italian-sausage" value={spicyItalianSausage} onChange={onChangeHandler} />
                    Spicy Italian Sausage
                </label>
                <label for="grilled-chicker">
                    <input type="checkbox" name="grilled-chicker" value={grilledChicker} onChange={onChangeHandler} />
                    Grilled chicker
                </label>
                <label for="onions">
                    <input type="checkbox" name="onions" value={onions} onChange={onChangeHandler} />
                    Onions
                </label>
                <label for="green-pepper">
                    <input type="checkbox" name="green-pepper" value={greenPepper} onChange={onChangeHandler} />
                    Green Pepper
                </label>
                <label for="diced-tomatos">
                    <input type="checkbox" name="diced-tomatos" value={dicedTomatos} onChange={onChangeHandler} />
                    Diced tomatos
                </label>
                <label for="black-olives">
                    <input type="checkbox" name="black-olives" value={blackOlives} onChange={onChangeHandler} />
                    Black olives
                </label>
                <label for="roasted-garlic">
                    <input type="checkbox" name="roasted-garli" value={roastedGarli} onChange={onChangeHandler} />
                    Roasted garlic
                </label>
                <label for="artichoke-hearts">
                    <input type="checkbox" name="artichoke-hearts" value={artichokeHearts} onChange={onChangeHandler} />
                    Artichoke hearts
                </label>
                <label for="three-cheese">
                    <input type="checkbox" name="three-cheese" value={threeCheese} onChange={onChangeHandler} />
                    Three Cheese
                </label>
                <label for="pineapple">
                    <input type="checkbox" name="pineapple" value={pineapple} onChange={onChangeHandler} />
                    Pineapple
                </label>
                <label for="extra-cheese">
                    <input type="checkbox" name="extra-cheese" value={extraCheese} onChange={onChangeHandler} />
                    Extra cheese
                </label>

                <label for="special">
                    Special Instructions <br/><br/>
                    <input type="textarea" name="special" id="special" value={special} placeholder="Anything else you'd like to add?" onChange={onChangeHandler} />
                </label>
                <hr/>

                <button id="order-button" type="submit">Add to Order</button>
            </form> 
            }

            {placeOrder &&  < Confirmation order={values} /> }
        </>
    )
}


export default Form;