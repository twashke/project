import React from "react";

const styles = {
    header: {
        fontFamily: "Lobster",
        fontSize: "2rem",
    }
}

export default function Collection() {
    return (
        <div className="container d-flex p-2 justify-content-center" id="collection">
            <h1 style={styles.header}>Soap Collection</h1>
        </div>
    )
}