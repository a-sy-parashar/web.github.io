import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import img1f from "../img/img1f.jpg";
import DData from "../components/Data";


const Services = () => {
    return (
        <>
            <Navbar />
            <h1 className="shead">Our Services</h1>
            <h1 className="main"> 
            { DData.map((val, ind) => {
                return (
                    <Card
                        imgsrc={val.imgs}
                        title={val.titles}

                    />);
            })}
            </h1>

            <Footer />
        </>
    );
}
export default Services;