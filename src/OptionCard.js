import React from "react";


function OptionCard({image, name, description}) {
    return (
      <div className="OptionCard">
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p style={{fontSize:"20px"}}>{description}</p>
      </div>
    );
  }
  
  export default OptionCard;