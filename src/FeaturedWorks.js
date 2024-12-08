import React from "react";

function FeaturedWorks() {
    return (
      <div className="FeaturedWorks">
        <div id="text-container" style={{paddingLeft:"20%", paddingRight:"20%", textAlign:"center"}}>
            <h2>Featured Works</h2>
            <p style={{marginBottom:"-30px"}}>Our startup empowers entrepreneurs and creators to bring their ideas to life with ease. Leveraging our Bootstrap builder, you can design and launch stunning, responsive websites without any coding experience. Whether you need a portfolio, e-commerce platform, or landing page, our innovative tools and templates streamline the web development process, enabling you to focus on your vision. Explore how we've helped countless startups and creators craft professional digital experiences that stand out. Let us turn your ideas into impactful online realities!</p>
        </div>
        <div id="img-listContainer">
            <img id="img" src = "https://images.pexels.com/photos/7439135/pexels-photo-7439135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <img id="img" src = "https://images.pexels.com/photos/7439137/pexels-photo-7439137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <img  id="img" src = "https://images.pexels.com/photos/7438107/pexels-photo-7438107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />            
            <img id="img" src = "https://images.pexels.com/photos/7439130/pexels-photo-7439130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <img id="img" src = "https://images.pexels.com/photos/7439133/pexels-photo-7439133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <img id="img" src = "https://images.pexels.com/photos/7438105/pexels-photo-7438105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </div>
    );
  }
  
  export default FeaturedWorks;