import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const cart = <FontAwesomeIcon icon={faShoppingCart} size="sm"/>;

const styles = {
    header: {
        fontFamily: "Lobster",
        fontSize: "2rem",
    }
}


export default function Cart() {
    return (
        <div className="container d-flex p-2 justify-content-center" id="cart">
            <h1 style={styles.header}>Shopping Cart  {cart}</h1>
        </div>
    )
}