import React from "react";
// import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer=()=>{
    let year = new Date().getFullYear();
    return(
        <>
        <div className="footer"><span>copyright © {year} @ Ankur Parashar</span></div>
        </>
    );
}
export default Footer;