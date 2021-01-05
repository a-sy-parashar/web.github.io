import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Bodyheadline";
import img1f from "../img/img1f.jpg";


const Home=()=>{
    return(
        <>
        <Navbar/>
        <Header
        img1 ={img1f}
        btname ="Start Now" />
        
        <Footer  />
        </>
    );
}
export default Home;