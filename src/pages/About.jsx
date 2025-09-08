import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./About.css";
import "./styles/photos.css";
import { Link } from "react-router-dom";
import "./styles/Page.css";
import NavIndex from "./components/NavIndex";
import NavIndexA from "./components/NavIndexA";
//import Navbar2 from "./Navbar2";
//import Navbar3 from "./Navbar3";
//import CarouselZR1 from "./ZR1/CarouselZR1";

const About = () => {
  return (
    <><NavIndex /><NavIndexA />
      <div className="about-page">
        
        <br />
        <h1>The Corvette Software Digital Collection</h1>
        <h2>    Mission Statement   </h2>

        {/* <h2><i>The Definitive Corvette Guide"</i></h2> */}
   <div className="center">
            <img src="/opauto.png" alt="Corvette Hero" width={200} height={150} />
                </div>
                
        <div className="responsive">
          <div className="gallery100100">
            <a target="_blank" rel="noopener noreferrer" href="/zrz.png">
              <img src="/zrz.png" alt="Corvette Images Information" width={300} height={200} />
            </a>
            {/* <div className="desc">The 2025 Corvette ZR1</div> */}
          </div>
        </div>


        <div className="center">
          <h1>
            <b>   About Us      </b>
          </h1>

          <br />

          {/* <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer"href={me}>
             <img src={me} alt="Corvette Images Information" width={"100%"} height={"100%"}
              />
        
          </a>
          <div className="desc">The Author</div>
   </div> */}
       
            <h1>The Corvette Journal, The Definitive Guide</h1>
      

          <h2> A  Corvette Information Source For Enthusiasts </h2>
          <p>
            <b>Optical Automation, LLC </b> is dedicated to developing and producing innovative information  systems. We use cutting-edge Full Stack React JavaScript and Apple SwiftUI
            programming to present the latest Chevrolet Corvette information.
            Based in Los Angeles, California, we stive to innovate and steamline information delivery to Corvette passionate clients. By creating website
            networks and mobile app applications we can delivery information seamlessly. The internet provides a means for world wide  information  diStubution. The Internet 
            really gets our word and images
            accessible anywhere people want to access it.
          </p><p>
            Our lead developer, a Full Stack Developer also has Apple SwiftUI Software skills. His background education was from California Polytechnic State University, 
            San Luis Obispo,             California. As an Electronics  Engineering Technolgist.   His    passion for sport cars and the Corvette started from his 
            teen age    years of watching Le Mans, to his ownership of a 1986 Corvette Torch Red Stingray and now studying YouTube Videos for the past five years. His
             never ending love for the Chevrolet Corvette has developed each time Chevrolet Reveal a Corvette model. From the seventh generation and now introduction of
            the latest generation Corvettes, his love was instantly re-ignated and continues to grow.
          </p>

          <p>
            Our website is like a "magazine" that car enthusiast love. It builds brand confidence and show cases The Chevrolet Corvette as a world leader in Performance Sport 
             Car enthusiasts. People modify their Corvette by use of our information since we advertise many difference component parts for the custom Corvette.
            We have a large collection of Corvette photographs and information.  We have many photographs of the 2025 Corvette model line.  The Corvette is a great car 
            that most Americans believe to be the best ever made.           The Corvette Experience is special and it includes feelings, driving, and ownership.  This website gives The Corvette justice, a real website without dumb flashing 
            ads, written in a serious tone with colorful sleek sexy presentation.
            We show The Corvette as The Super Hypercar of the Century!
          </p><p>

            From the factory, Corvettes are performance vehicles even the base model Stingray has  500 horsepower. After seventy years of production, the Corvette is a world renowned
            performance car. The seventy years and now eighth generation Corvette shows its grateness.   The vehicle has many first time designs. Many people compare Corvettes to sport cars costing triple.
            This generation of cars has charged the world with sprit and they are taking off!
          </p><p>
            The current line of Corvettes possess top performance components. The Aerodynamic Sleek Body Design, The Engine, Its location, The Dual Clutch Tranmission, Electronic
            Camera Mirror Monitor, Front Lift, Color Leather Interior, Flat-plane crankshaft engine, Electrofication drive trains and recently they have forced induction Bi-turbo to generate more than a thousand horsepower and two
            twenty miles per hour top speed!

            The car has pushed the envelope of of automotilbile technology and their market share shows this.The Corvette has attained a 50% market share of sports cars marketing.  The ZR1 Corvette has really developed a following with
            car enthusiasts, new buyers, and existing Corvette car owners. This new vehicle is really ahead of all other sports cars world wide. As a result of the 2025 Corvette model line
            We hope our Corvette websites distibute information to all users and to provide information as a definitive information Corvette guide. We pride ourselves in the development
            our product as Corvette and the cars present an exciting future for all users.
          </p>

          <p>
            We use the Internet and Your Tube videos as a learning and data source our informatio. We use the Chevrolet.com Corvette Performance website as a reference and source for our
            image production. We also use personal experiences from You Tube videos as the people who like Corvette most usually love the vehicle, it performance, and design
            as a true super sports car. The following websites have been written Optical Automation, LLC, Software Department.

          </p>




          <div className="center">
            <h1> Your Corvette Car Enthusiast Network</h1>
          </div>

          <br />
          <Link to="http://www.OpticalAutomation.com "><b>
            Developed By http : // w w w . O p t i c a l  A u t o m a t i o n . c o m</b>
          </Link>

          <br />
          <Link to="http://www.TheCorvetteWeb.com "><b>
            http : // w w w . T h e  C o r v e t t e  W e b . c o m</b>
          </Link>      <br />
          <Link to="http://www.TheCorvetteReporter.com "><b>
            http : // w w w . T h e  C o r v e t t e  R e p o r t e r . c o m </b>
          </Link>     <br />

          <Link to="http://www.Checkered-Flag.com"><b>
            http : // w w w . C h e c k e r e d - F l a g . c o m </b><br /><br />
          </Link>

          <Link to="http://www.MyCorvette.info.com"><b>   h t t p : / / w w w . M y  C o r v e t t e . i n f o    </b>   </Link>

          <Link to="http://www.CoolJimmy.com">h t t p : / / w w w . C o o l  J i m m y . c o m </Link>

          <Link to="http://www.CoolJimmyCorvette.com">h t t p : / / w w w . C o o l  J i m m y  C o r v e t t e . c o m </Link>





          <br />
        </div>


        <br /> <br />

      </div>
      <br /> <br />

      <div className="center">
        <h3>            <b> References </b>          </h3>

        <Link to="/Gm">            1. General Motors Executive Staff          </Link>
        <Link to="http://www.OpticalAutomation.com ">    2. Optical Automation, LLC </Link>

      </div>




    </>
  );
};

export default About;
