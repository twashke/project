import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const facebook = <FontAwesomeIcon icon={faFacebook} size="2x"/>;
const instagram = <FontAwesomeIcon icon={faInstagram} size="2x"/>;
const twitter = <FontAwesomeIcon icon={faTwitter} size="2x"/>;

export default function Footer() {
    return (
        <div className="text-center text-black">
    <div className="container p-3">
        <div className="mb-4 d-flex justify-content-evenly">
            <a className="btn btn-outline-dark btn-floating m-1" href="https://www.facebook.com/" title="Connect with me on Facebook!" target="_blank"  rel="noreferrer" role="button">{facebook}</a>

            <a className="btn btn-outline-dark btn-floating m-1" href="https://www.instagram.com/" title="Connect with me on Instagram!" target="_blank"  rel="noreferrer" role="button">{instagram}</a>

            <a className="btn btn-outline-dark btn-floating m-1" href="https://twitter.com/?lang=en" title="Connect with me on Twitter!" target="_blank"  rel="noreferrer" role="button">{twitter}</a>

        </div>
    </div>
</div>
    )
}