import React from "react";
import "./About.css";
import "./styles/photos.css";
import "./styles/Page.css";
//import NavIndex from "./components/NavIndex";
//import NavIndexA from "./components/NavIndexA";

const About = () => {
  return (
    <>


      <div className="about-page">
        <h1>The Corvette Software Digital Collection</h1>
        <h2>Mission Statement</h2>

        <div className="center">
          <img src="/opauto.png" alt="Corvette Hero" width={200} height={150} />
        </div>

        <div className="responsive">
          <div className="gallery100100">
            <a href="/zrz.png" target="_blank" rel="noopener noreferrer">
              <img src="/zrz.png" alt="Corvette ZR1" width={300} height={200} />
            </a>
          </div>
        </div>

        <div className="center">
          <h1>About Us</h1>
          <h1>The Corvette Journal: The Definitive Guide</h1>
          <h2>A Corvette Information Source for Enthusiasts</h2>

          <p>
            <strong>Optical Automation, LLC</strong> is dedicated to developing innovative information systems. We use cutting-edge Full Stack React JavaScript and Apple SwiftUI to present the latest Chevrolet Corvette insights. Based in Los Angeles, California, we strive to innovate and streamline information delivery for passionate Corvette enthusiasts.
          </p>

          <p>
            Our lead developer, a Full Stack Developer with SwiftUI expertise, studied Electronics Engineering Technology at California Polytechnic State University, San Luis Obispo. His passion for Corvettes began in his teenage years watching Le Mans, owning a 1986 Torch Red Stingray, and studying YouTube videos for the past five years. His love reignites with every new Corvette reveal.
          </p>

          <p>
            Our website functions like a digital magazine, building brand confidence and showcasing the Corvette as a world leader in performance sports cars. We provide modification guides, component sourcing, and extensive photography of the 2025 model line. The Corvette Experience includes emotion, driving, and ownership—and we present it with serious tone and sleek design.
          </p>

          <p>
            From the base Stingray’s 500 horsepower to the ZR1’s supercar dominance, Corvettes have evolved over 70 years into global icons. The eighth generation introduces groundbreaking features that rival cars costing three times as much. This generation has charged the world with spirit—and it’s taking off.
          </p>

          <p>
            Highlights include aerodynamic body design, mid-engine layout, dual-clutch transmission, camera mirror monitor, front lift, leather interiors, flat-plane crankshaft engines, electrified drivetrains, and bi-turbo setups exceeding 1000 horsepower and 220 mph.
          </p>

          <p>
            The Corvette now commands over 50% of the sports car market. The ZR1 has built a loyal following, and our websites aim to be the definitive guide for Corvette enthusiasts worldwide.
          </p>

          <p>
            We source data from YouTube, Chevrolet.com, and real-world experiences. All content is developed by Optical Automation, LLC, Software Department.
          </p>

          <div className="center">
            <h1>Your Corvette Car Enthusiast Network</h1>
          </div>

          <ul>
            <li><a href="http://www.OpticalAutomation.com" target="_blank" rel="noopener noreferrer">www.OpticalAutomation.com</a></li>
            <li><a href="http://www.TheCorvetteWeb.com" target="_blank" rel="noopener noreferrer">www.TheCorvetteWeb.com</a></li>
            <li><a href="http://www.TheCorvetteReporter.com" target="_blank" rel="noopener noreferrer">www.TheCorvetteReporter.com</a></li>
            <li><a href="http://www.Checkered-Flag.com" target="_blank" rel="noopener noreferrer">www.Checkered-Flag.com</a></li>
            <li><a href="http://www.MyCorvette.info.com" target="_blank" rel="noopener noreferrer">www.MyCorvette.info.com</a></li>
            <li><a href="http://www.CoolJimmy.com" target="_blank" rel="noopener noreferrer">www.CoolJimmy.com</a></li>
            <li><a href="http://www.CoolJimmyCorvette.com" target="_blank" rel="noopener noreferrer">www.CoolJimmyCorvette.com</a></li>
          </ul>
        </div>

        <div className="center">
          <h3><strong>References</strong></h3>
          <ul>
          
            <li><a href="http://www.OpticalAutomation.com" target="_blank" rel="noopener noreferrer">1. "Company Website", Optical Automation, LLC</a></li>
          </ul>
        </div>

      <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </div>
   </div>
    </>
  );
};

export default About;
