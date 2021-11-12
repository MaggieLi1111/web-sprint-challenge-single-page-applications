import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom"

const Confirmation = props => {

    const { order } = props;

    return (
        <>
        <h1>{order.name}, your{order.size.toLowerCase()} pizza is on its way!</h1>
        <button><Link to="/">Return to Home Page</Link></button>
        </>
    )
}

export default Confirmation;