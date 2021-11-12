import React from "react"
import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <>
        <Link to="/">Home</Link> <br/> <br/>
        <Link to="/pizza" id="order-pizza">Order Pizza</Link>
        </>
    )
}

export default Nav;