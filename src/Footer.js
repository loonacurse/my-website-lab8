import React from "react";
import Employee from "./Employee";

function Footer() {
    const employee =[
        {
            id:1,
            image: 'https://images.pexels.com/photos/7428855/pexels-photo-7428855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: "Emma Cartwright",
            position:"Lead Designer",
        },
        {
            id:2,
            image: "https://images.pexels.com/photos/7437096/pexels-photo-7437096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
            name: "Liam Bradshaw",
            position:"Front-End Developer",
        },
        {
            id:3,
            image: "https://images.pexels.com/photos/7441080/pexels-photo-7441080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Sophia Martinez",
            position:"UX/UI Specialist",
        },
        {
            id:4,
            image: "https://images.pexels.com/photos/7441380/pexels-photo-7441380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Ethan Bennett",
            position:"Marketing Strategist",
        }
    ];
    return (
      <div className="Footer">
        <div id="text-container" style={{paddingLeft: "400px", paddingRight: "400px", textAlign:"center"}}>
            <h2 style={{paddingTop:"100px"}}>Our Creative Team</h2>
            <p>
            At BootstrapWeb Studios, we empower startups and creators to craft stunning websites with ease. Our platform features an intuitive Bootstrap-based builder that requires no coding knowledge, enabling anyone to design professional, responsive websites effortlessly. Whether you're showcasing a portfolio, launching a product, or growing an online presence, our tools provide you with the flexibility and simplicity to bring your vision to life. Join us to turn your startup dreams into a digital reality!
            </p>
        </div>
        <div id="employee-gallery">
            {employee.map((item)=>(
                <Employee
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    position={item.position}/>
            ))}
        </div>
      </div>
    );
  }
  
  export default Footer;