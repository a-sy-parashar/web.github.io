import React from "react";
import Button from "@material-ui/core/Button";

import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <div className="headermain">
                <div className="content">
                    <h1>Grow your business with untapped power of web marketing </h1>
                    <h2>We are group of passionate web developer to create whatever you WANT</h2>
                    <Button className="btn"><NavLink className="link" to ="/Contact">{props.btname}</NavLink></Button>
                </div>
                <div className="headerimg">
                    <div className="image">
                        <img src={props.img1} alt="" />
                    </div>

                </div>

            </div>
        </>
    );
}
export default Header;