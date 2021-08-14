import React from "react";

const styles = {
    header: {
        fontFamily: "Lobster, cursive",
        fontSize: "3rem",
    }
}

export default function Header() {
    return(
        <div className="container d-flex justify-content-center flex-wrap">
            <h1 style={styles.header}>Silky Suds Soapery</h1>
        </div>
    )
}