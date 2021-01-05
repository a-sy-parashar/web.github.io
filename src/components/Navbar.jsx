import React from "react";
import "../css/index.css";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    
    return (
        <>
            <div className="container">
                <div className="box1 box">
                    {/* <Logo/> */}
                    <li><NavLink  exact  activeClassName="active" className="a" to="/">Home</NavLink></li>
                    <li><NavLink  exact activeClassName="active" className="a" to="/Services">Services</NavLink></li>
                    <li><NavLink exact  activeClassName="active" className="a" to="/About">About</NavLink></li>
                    <li> <NavLink  exact activeClassName="active" className="a" to="/Contact">Contact</NavLink></li>
                </div>
                <div className="box2 box">

                    <input type="text" placeholder="serch here" autoComplete="off" onClick="click" onPaste=" return false " /> <span><li><Button className="btn"><SearchIcon /></Button></li></span>



                    <div className="box3 box"><li><NavLink className="a" to="/Login">Login </NavLink> <span></span><NavLink className="a" to="/SignUp">SignUp</NavLink></li>
                    </div>
                    </div>
                </div>
        </>
    );
}
export default Navbar;