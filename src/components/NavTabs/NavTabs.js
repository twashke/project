import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import "./NavTabs.css";

const cart = <FontAwesomeIcon icon={faShoppingCart}/>;

export default function NavTabs ({ currentPage, handlePageChange }) {
    return (
    <nav className="navbar navbar-expand-lg  navBackground navbar-dark">
    <div className="container-fluid navText">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Silky Suds Soapery" title="Silky Suds Soapery"
          onClick={()=> handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active navLogo" : "nav-link navLogo"}/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
        <a aria-current="page" href="#monthly"  
            onClick={()=> handlePageChange("Monthly Collection")}
            className={currentPage === "Monthly Collection" ? "nav-link active" : "nav-link"}>Monthly Collection</a>
        </li>
        <li className="nav-item">
        <a aria-current="page" href="#collection"  
            onClick={()=> handlePageChange("Collection")}
            className={currentPage === "Collection" ? "nav-link active" : "nav-link"}>Soap Collection</a>
        </li>
        <li className="nav-item">
        <a aria-current="page" href="#member"
            onClick={()=> handlePageChange("Member")}
            className={currentPage === "Member" ? "nav-link active" : "nav-link"}>Member Login</a>
        </li>
        <li className="nav-item">
        <a aria-current="page" href="#contact"
              onClick={()=> handlePageChange("Contact")}
              className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact Me</a>
        </li>
        <li className="nav-item">
        <a aria-current="page" href="#cart"
              onClick={()=> handlePageChange("Cart")}
              className={currentPage === "Cart" ? "nav-link active" : "nav-link"}>{cart}</a>
        </li>
        </ul>
      </div>
  </div>
</nav>
    )
}
