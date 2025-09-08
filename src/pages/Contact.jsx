import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SectionWrapper = styled(motion.section)`
  background-color: #fff;
  padding: 2rem;
  border-left: 6px solid #c00;
  margin-bottom: 2rem;
  font-family: 'Helvetica Neue', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
    border-left: 4px solid #c00;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #c00;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  padding-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => (
  <><br /><br />
    <Paragraph><h1>Contact Us Page</h1></Paragraph>
      <div className='image'>
  
     
  
      <img src="/isting.png" alt="Corvette Hero" />
    </div><SectionWrapper initial="hidden" animate="visible" variants={fadeIn}>
      <Title>The About Page</Title>
      <Title>Optical Automation Announces, The Corvette Digital Software Collection</Title>
      <Subtitle>Software Comprised of Websites and Mobile Apps</Subtitle>
      <Paragraph>
        The Corvette Websites are a go-to resource for everything related to Corvette ownership. A visual photographic journey into the current, 2026, racing, and concept editions of the Chevrolet Corvette models.
      </Paragraph>
      <List>
        <ListItem>Detailed photographs of current and up and coming Chevrolet Corvette models</ListItem>
        <ListItem>Photographic breakdown of trim levels, options, and performance packages</ListItem>
        <ListItem>Photographic 2026, Racing, and Concept cars parts sourcing: the next year model line, where to race, who supplies them and where to find them</ListItem>
      </List>
      <Paragraph>
        Our company is dedicated to developing and producing innovative information  systems. We use cutting-edge Full Stack React JavaScript and Apple SwiftUI
        programming to present the latest Chevrolet Corvette information.
        Based in Los Angeles, California, we stive to innovate and steamline information delivery to Corvette passionate clients. By creating website
        networks and mobile app applications we can delivery information seamlessly. The internet provides a means for world wide  information  diStubution. The Internet
        really gets our word and images
        accessible anywhere people want to access it.
      </Paragraph>

      <Paragraph>
        Our lead developer, a Full Stack Developer also has Apple SwiftUI Software skills. His background education was from California Polytechnic State University,
        San Luis Obispo, California. As an Electronics  Engineering Technolgist.   His    passion for sport cars and the Corvette started from his
        teen age    years of watching Le Mans, to his ownership of a 1986 Corvette Torch Red Stingray and now studying YouTube Videos for the past five years. His
        never ending love for the Chevrolet Corvette has developed each time Chevrolet Reveal a Corvette model. From the seventh generation and now introduction of
        the latest generation Corvettes, his love was instantly re-ignated and continues to grow.
      </Paragraph>

      <Paragraph>
        Our websites are like "magazines" that car enthusiast love. It builds brand confidence and show cases The Chevrolet Corvette as a world leader in Performance Sport
        Car enthusiasts. People modify their Corvette by use of our information since we advertise many difference component parts for the custom Corvette.
        We have a large collection of Corvette photographs and information.  We have many photographs of the 2025 Corvette model line.  The Corvette is a great car
        that most Americans believe to be the best ever made.           The Corvette Experience is special and it includes feelings, driving, and ownership.  This website gives The Corvette justice, a real website without dumb flashing
        ads, written in a serious tone with colorful sleek sexy presentation.
        We show The Corvette as The Super Hypercar of the Century!
      </Paragraph>
      From the factory, Corvettes are performance vehicles even the base model Stingray has  500 horsepower. After seventy years of production, the Corvette is a world renowned
      performance car. The seventy years and now eighth generation Corvette shows its grateness.   The vehicle has many first time designs. Many people compare Corvettes to sport cars costing triple.
      This generation of cars has charged the world with sprit and they are taking off!
      <Paragraph>
        The current line of Corvettes possess top performance components. The Aerodynamic Sleek Body Design, The Engine, Its location, The Dual Clutch Tranmission, Electronic
        Camera Mirror Monitor, Front Lift, Color Leather Interior, Flat-plane crankshaft engine, Electrofication drive trains and recently they have forced induction Bi-turbo to generate more than a thousand horsepower and two
        twenty miles per hour top speed!
      </Paragraph>
      <Paragraph>
        The car has pushed the envelope of of automotilbile technology and their market share shows this.The Corvette has attained a 50% market share of sports cars marketing.  The ZR1 Corvette has really developed a following with
        car enthusiasts, new buyers, and existing Corvette car owners. This new vehicle is really ahead of all other sports cars world wide. As a result of the 2025 Corvette model line
        We hope our Corvette websites distibute information to all users and to provide information as a definitive information Corvette guide. We pride ourselves in the development
        our product as Corvette and the cars present an exciting future for all users.
      </Paragraph>


      <Paragraph>
        We use the Internet and Your Tube videos as a learning and data source our informatio. We use the Chevrolet.com Corvette Performance website as a reference and source for our
        image production. We also use personal experiences from You Tube videos as the people who like Corvette most usually love the vehicle, it performance, and design
        as a true super sports car. The following websites have been written Optical Automation, LLC, Software Department.
      </Paragraph>


<Paragraph>   <br />
           <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
            
                  <br />    <br />
       
      <div className="center">
        <h3> Cool Jimmy Software Your Corvette Car Enthusiast Network</h3>
      </div>

      <br />
      <h4> Developed By </h4>
      <Link to="http://www.OpticalAutomation.com "><b>
        <br />http : // w w w . O p t i c a l  A u t o m a t i o n . c o m</b>
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
  <br />
      <Link to="http://www.CoolJimmy.com">h t t p : / / w w w . C o o l  J i m m y . c o m </Link>
  <br />
      <Link to="http://www.CoolJimmyCorvette.com">h t t p : / / w w w . C o o l  J i m m y  C o r v e t t e . c o m </Link>


</Paragraph>



      <Paragraph>
        Contact us at <a href="mailto:JamesAvakian62@yahoo.com">JamesAvakian62@yahoo.com</a>
      </Paragraph>
    </SectionWrapper></>
);

export default Contact;
