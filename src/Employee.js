import React from "react";

function Employee({image, name, position}) {
    return (
      <div className="Employee">
      <img src={image} alt={name} style={{ width: '300px', height: 'auto' }}/>
      <h3>{name}</h3>
      <p style={{marginTop: "-10px"}}>{position}</p>
      </div>
    );
  }
  
  export default Employee;
  