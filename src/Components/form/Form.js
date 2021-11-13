import React , { useState, useEffect }from "react"
import Confirmation from "./Confirmation"
import * as yup from "yup"
import formSchema from "./FormSchema"
import axios from "axios"


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
    const [errors, setErrors] = useState(initialValues);
    const [pizza, setPizza] = useState([]);

    const [placeOrder, setPlaceOrder] = useState(false);

    const [disabled, setDisabled] = useState(true);

    const { name, size, pepperoni, sausage, canadianBacon, spicyItalianSausage , pineapple, onions, grilledChicker,greenPepper,dicedTomatos,blackOlives,roastedGarli,artichokeHearts,threeCheese,extraCheese, special } = props;

    const validateChange = event => {
        yup
        .reach(formSchema, event.target.name)
        .validate(event.target.type === "checkbox" ? event.target.checked : event.target.value)
        .then( () => {
            setErrors( { ...errors, [event.target.name]:""});
        })
        .catch(err => {
            console.log("errors:", err);
            setErrors( {...errors, [event.target.name]:err.errors[0]});
        });
    };



    useEffect( () => {
        formSchema.isValid(values)
        .then(valid => setDisabled(!valid));
    },[values]);

    const submitHandler = event => {
        event.preventDefault();       
        console.log(values);
        axios.post("https://reqres.in/api/users",values)
        .then(res => {
            setPizza([...pizza,res.data])
            setValues(initialValues)
        })
        .catch( err => {
            console.error(err)
        })   
    }
    console.log(errors);

    const onChangeHandler = event => {
        console.log(event);
        console.log(event.target.name,event.target.value);
        const {name, type, value, checked} = event.target;
        const checkType = type === "checkbox"? checked : value ;
        setValues( {...values, [name]:checkType});
        validateChange(event);       
    }



    return (
        <>
            <h2>Build Your Own Pizza</h2>
            {disabled && <p>Name must be at least 2 characters</p>}
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
                    <select name="pizza-size" id="size-dropdown" value={size} onChange={onChangeHandler} >
                        <option value="">--Select--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <hr />
                </label>


                <p>Add Toppings <br /> Choose up to 10 </p>
                <label for="pepperoni">
                    <input type="checkbox" name="pepperoni" checked={pepperoni} onChange={onChangeHandler} />
                    Pepperoni
                </label>
                <label for="sausage">
                    <input type="checkbox" name="sausage" checkede={sausage} onChange={onChangeHandler} />
                    Sausage
                </label>
                <label for="canadian-bacon">
                    <input type="checkbox" name="canadian-bacon" checked={canadianBacon} onChange={onChangeHandler} />
                    Canadian Bacon
                </label>
                <label for="spicy-italian-sausage">
                    <input type="checkbox" name="spicy-italian-sausage" checked={spicyItalianSausage} onChange={onChangeHandler} />
                    Spicy Italian Sausage
                </label>
                <label for="grilled-chicker">
                    <input type="checkbox" name="grilled-chicker" checked={grilledChicker} onChange={onChangeHandler} />
                    Grilled chicker
                </label>
                <label for="onions">
                    <input type="checkbox" name="onions" checked={onions} onChange={onChangeHandler} />
                    Onions
                </label>
                <label for="green-pepper">
                    <input type="checkbox" name="green-pepper" checked={greenPepper} onChange={onChangeHandler} />
                    Green Pepper
                </label>
                <label for="diced-tomatos">
                    <input type="checkbox" name="diced-tomatos" checked={dicedTomatos} onChange={onChangeHandler} />
                    Diced tomatos
                </label>
                <label for="black-olives">
                    <input type="checkbox" name="black-olives" checked={blackOlives} onChange={onChangeHandler} />
                    Black olives
                </label>
                <label for="roasted-garlic">
                    <input type="checkbox" name="roasted-garli" checked={roastedGarli} onChange={onChangeHandler} />
                    Roasted garlic
                </label>
                <label for="artichoke-hearts">
                    <input type="checkbox" name="artichoke-hearts" checked={artichokeHearts} onChange={onChangeHandler} />
                    Artichoke hearts
                </label>
                <label for="three-cheese">
                    <input type="checkbox" name="three-cheese" checked={threeCheese} onChange={onChangeHandler} />
                    Three Cheese
                </label>
                <label for="pineapple">
                    <input type="checkbox" name="pineapple" checked={pineapple} onChange={onChangeHandler} />
                    Pineapple
                </label>
                <label for="extra-cheese">
                    <input type="checkbox" name="extra-cheese" checked={extraCheese} onChange={onChangeHandler} />
                    Extra cheese
                </label>

                <hr />
                <label for="special">
                    Special Instructions <br/><br/>
                    <input type="textarea" name="special" id="special-text" value={special} placeholder="Anything else you'd like to add?" onChange={onChangeHandler} />
                </label>
                <hr/>

                <button id="order-button" type="submit" disabled={disabled}>Add to Order</button>
            </form> 
            }

            {placeOrder &&  < Confirmation pizza={pizza} /> }
        </>
    )
}


export default Form;