import React from "react";
import OptionCard from "./OptionCard.js";
import graphicDesign from "./graphic-design.png"
import webDesign from "./web-design.png"
import mobileApp from "./mobile-app.png"

function Option() {
  const optionCard=[
    {
      id:1,
      image: graphicDesign,
      name:"Graphic Design",
      description:"At StartupPro, we understand the importance of captivating visuals for your website. That’s why our platform offers built-in tools to help you incorporate stunning graphics seamlessly.",
    },
    {
      id:2,
      image: webDesign,
      name:"Web Design",
      description:"With our Bootstrap Builder, crafting a responsive, user-friendly website has never been easier. Our platform ensures your site adapts beautifully to all devices, from desktops to smartphones.",
    },
    {
      id:3,
      image: mobileApp,
      name:"Mobile App",
      description:"In today’s mobile-first world, having a website that works flawlessly on smartphones is essential. StartupPro takes it a step further by offering features tailored for ",
    }
  ];
    return (
      <div className="Options">
        <div id="text-container">
          <p style={{fontSize:"14px", color:"#8C8C88", textAlign:"center", paddingTop:"20px"}}>StartUp</p>
       <h2 style={{fontWeight: "normal", textAlign: "center", paddingLeft:"20%", paddingRight:"20%", paddingTop:"20px"}}>With more than 20 years of experience we can deliver the best product design.</h2>
       </div>
       <div id="option-gallery">
        {optionCard.map((item)=>(
          <OptionCard
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
       </div>
      </div>
    );
  }
  
  export default Option;