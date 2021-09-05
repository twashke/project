import React from "react";

const styles = {
    header: {
        fontFamily: "Lobster, cursive",
        fontSize: "2rem",
    }
}

export default function Contact() {
    return (
        <div className="container p-2 d-flex justify-content-center" id="member">
            <h1 style={styles.header}>Contact Me!</h1>
        </div>
    );
}