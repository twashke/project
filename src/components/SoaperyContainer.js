import React, { useState } from "react";
import NavTabs from "./NavTabs/NavTabs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../pages/Home/Home";
import Collection from "../pages/Collection/Collection";
import Monthly from "../pages/Monthly/Monthly";
import Member from "../pages/Member/Member";
import Contact from "../pages/Contact/Contact";
import Cart from "../pages/Cart/Cart";

export default function SoaperyContainer() {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home/>;
        } 
        if (currentPage === "Monthly Collection") {
            return <Monthly/>;
        } 
        if (currentPage === "Collection") {
            return <Collection/>;
        }
        if (currentPage === "Member") {
            return <Member/>
        }
        if (currentPage === "Contact") {
            return <Contact/>
        }
        if (currentPage === "Cart") {
            return <Cart/>
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
            <Footer />
        </div>
    );
}
