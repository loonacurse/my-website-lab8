import React from "react";

function HowWork() {
    return (
      <div className="HowWork">
       <div id="text-container">
        <h2>How we work</h2>
        <p>Our company empowers startups and creators by providing a cutting-edge Bootstrap builder designed to simplify website development. 
            With our intuitive platform, you can design and launch professional, responsive websites without any coding skills. From sleek 
            portfolios to dynamic e-commerce sites or engaging landing pages, our tools and templates are tailored to bring your vision to life. 
            We combine user-friendly features with customizable options to ensure your website reflects your brand perfectly, saving you time and effort. 
            Collaborate with us to transform your ideas into a polished online presence.</p>
            <div className="button-container">
            <button id="button" style={{borderRadius: "100px", height: "40px", width:"40px", textAlign: "center", fontSize:"28px", paddingTop: "3px", paddingLeft:"12px"}}>▷</button>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer"
                style={{fontSize: "22px", marginLeft: "10px"}}>
                Watch Video
            </a>
            </div>   
            </div>
            <div className="image-container">
                <img style={{borderRadius: "20px"}}
                src="https://images.pexels.com/photos/7439124/pexels-photo-7439124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                height="700px"></img>
            </div>    
      </div>
    );
  }
  
  export default HowWork;