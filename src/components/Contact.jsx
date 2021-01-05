import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import {NavLink}from "react-router-dom";

const Contact=()=>{
    return(
        <>
       <Navbar/>
       <h3 className="contact"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDv324C2o1EMeCCPxbk2nsAYICCaPUJJpB7vZTVGJ96zlgqg/viewform?usp=sf_link">click here</a></h3>
       <Footer/>
        </>
    );
}
export default Contact;