import React from "react";


const Card=(props)=>{
    return(
        <>
       <div className="maincard">
           <div className="subcard">
               <img src={props.imgsrc} alt=""/>
               <h3>{props.title}</h3>
               
           </div>
       </div>
        </>
    );
}
export default Card;