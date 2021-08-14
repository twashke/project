import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Member from "./pages/Member";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

export default function SoaperyContainer() {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home/>;
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
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
                </style>
        </div>
    );
}
