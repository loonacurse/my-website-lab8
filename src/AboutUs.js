import React from "react";

function AboutUs() {
    return (
      <div className="AboutUs">
        <div id="image-container">
            <img id="img-aboutUs"
            src="https://images.pexels.com/photos/7438095/pexels-photo-7438095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt = "a person in front of laptop" height="700px" />
        </div>
        <div id="text-container">
            <p>About Us</p>
        <h2>Empowering individuals</h2>
        <p>Bootstrap builder tailored for startups and creators. Our platform 
            simplifies web development, enabling you to design and launch professional, responsive 
            websites with ease—no coding required. Whether you're building a portfolio, an e-commerce 
            site, or a landing page, our intuitive tools and customizable templates give you the power 
            to create a polished, modern website that reflects your brand. Join us and turn your vision 
            into reality effortlessly!</p>
            <div className="button-container">
                <button id="button">About Us</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default AboutUs;