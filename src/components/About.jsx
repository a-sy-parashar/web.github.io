import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Bodyheadline";
import img2f from "../img/img2f.jpg";


const About=()=>{
    return(
        <>
       <Navbar/>
       <Header
        img1 ={img2f}
        btname ="Contact Now"
        visit ="/Contact"
       />
       <Footer/>
        </>
    );
}
export default About;