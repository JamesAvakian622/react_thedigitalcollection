import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  <>
    <SectionWrapper initial="hidden" animate="visible" variants={fadeIn}>
      <Title>Contact Us</Title>

      <div className="image">
        <img src="/isting.png" alt="Corvette Hero" />
      </div>

      <Title>Optical Automation Announces: The Corvette Digital Software Collection</Title>
      <Subtitle>Software Comprised of Websites and Mobile Apps</Subtitle>

      <Paragraph>
        The Corvette websites offer a visual journey through current, 2026, racing, and concept editions of Chevrolet Corvette models.
      </Paragraph>

      <List>
        <ListItem>Detailed photographs of current and upcoming Corvette models</ListItem>
        <ListItem>Breakdown of trim levels, options, and performance packages</ListItem>
        <ListItem>Coverage of 2026, racing, and concept cars, including parts sourcing and supplier insights</ListItem>
      </List>

      <Paragraph>
        Based in Los Angeles, California, our company strives to innovate and streamline information delivery for Corvette enthusiasts. We use Full Stack React JavaScript and Apple SwiftUI to build seamless web and mobile experiences.
      </Paragraph>

      <Paragraph>
        Our lead developer, a Full Stack Developer and SwiftUI specialist, studied Electronics Engineering Technology at California Polytechnic State University, San Luis Obispo. His passion for Corvettes began in his teenage years watching Le Mans and continues today through ownership and research.
      </Paragraph>

      <Paragraph>
        Our websites function like digital magazines, showcasing the Corvette as a world leader in performance sports cars. We provide modification guides, component sourcing, and extensive photography of the 2025 model line.
      </Paragraph>

      <Paragraph>
        From the base Stingray to the ZR1, Corvettes deliver exceptional performance. With over 70 years of innovation, the eighth generation introduces groundbreaking features that rival supercars costing three times as much.
      </Paragraph>

      <Paragraph>
        Highlights include aerodynamic body design, mid-engine layout, dual-clutch transmission, camera mirror monitor, front lift, leather interiors, flat-plane crankshaft engines, electrified drivetrains, and bi-turbo setups exceeding 1000 horsepower and 220 mph.
      </Paragraph>

      <Paragraph>
        The Corvette now commands over 50% of the sports car market. The ZR1 has built a loyal following, and our websites aim to be the definitive guide for Corvette enthusiasts worldwide.
      </Paragraph>

      <Paragraph>
        We source data from YouTube, Chevrolet.com, and real-world experiences. All content is developed by Optical Automation, LLC, Software Department.
      </Paragraph>

      {/* <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </div> */}
<br />

      <div className="center">
        <Subtitle>Cool Jimmy Software</Subtitle>
        <Subtitle>The Corvette Car Enthusiast Network</Subtitle>

        {/* <h4>Developed By:</h4> */}
        <List>
          <ListItem><a href="http://www.OpticalAutomation.com" target="_blank" rel="noopener noreferrer">www.OpticalAutomation.com</a></ListItem>
          <ListItem><a href="http://www.TheCorvetteWeb.com" target="_blank" rel="noopener noreferrer">www.TheCorvetteWeb.com</a></ListItem>
          <ListItem><a href="http://www.TheCorvetteReporter.com" target="_blank" rel="noopener noreferrer">www.TheCorvetteReporter.com</a></ListItem>
          <ListItem><a href="http://www.Checkered-Flag.com" target="_blank" rel="noopener noreferrer">www.Checkered-Flag.com</a></ListItem>
          <br />
          <ListItem><a href="http://www.MyCorvette.info.com" target="_blank" rel="noopener noreferrer">www.MyCorvette.info.com</a></ListItem>
          <ListItem><a href="http://www.CoolJimmy.com" target="_blank" rel="noopener noreferrer">www.CoolJimmy.com</a></ListItem>
          <ListItem><a href="http://www.CoolJimmyCorvette.com" target="_blank" rel="noopener noreferrer">www.CoolJimmyCorvette.com</a></ListItem>
        </List>

        <Paragraph>
          <br />
          Contact us at <a href="mailto:JamesAvakian62@yahoo.com">JamesAvakian62@yahoo.com</a>
        </Paragraph>
      </div>

          <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </div>
    </SectionWrapper>
  </>
);

export default Contact;
