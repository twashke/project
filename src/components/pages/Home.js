import React from "react";

const styles = {
    header: {
        fontFamily: "Lobster, cursive",
        fontSize: "2rem",
    }
}

export default function Home() {
    return (
        <div className="container p-2 d-flex justify-content-center" id="home">
            <h1 style={styles.header}>Monthly Collection of Soaps</h1>
        </div>
    );
}