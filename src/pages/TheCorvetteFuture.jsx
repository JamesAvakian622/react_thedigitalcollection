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

const ImageBlock = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 1rem 0;
  border-radius: 8px;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CorvetteFuture = () => (
  <>
    <SectionWrapper initial="hidden" animate="visible" variants={fadeIn}>
      <Title>The Cool Jimmy Corvette Software: Future Product Descriptions</Title>
      <Subtitle>Insights into Corvette Ownership, Buying, and Maintenance</Subtitle>

      <Paragraph>
        Ongoing Apple hardware and SwiftUI software development is shaping the future of Corvette-related applications. Whether you're buying your first Stingray or upgrading to a Z06, this site offers practical guidance and insider knowledge that goes beyond the showroom.
      </Paragraph>

      <List>
        <ListItem>Detailed buying guides for current and upcoming models</ListItem>
        <ListItem>Breakdown of trim levels, options, and performance packages</ListItem>
        <ListItem>OEM parts sourcing: who supplies them and where to find them</ListItem>
        <ListItem>Coverage of 2026 models, racing editions, and concept cars</ListItem>
      </List>

      <Paragraph>
        Built for buyers and owners, The Corvette Journal complements Chevrolet’s official resources by offering real-world insights, supplier connections, and a deeper look into the Corvette legacy.
      </Paragraph>

      <Subtitle>Software Technology Deployed</Subtitle>
      <List>
        <ListItem>Apple SwiftUI</ListItem>
        <ListItem>Apple App Store submission and acceptance</ListItem>
      </List>
<div className="center">
  
      <ImageBlock src="/z3.png" alt="Corvette Model" />
    <Subtitle>The Checkered-Flag.com eCommerce Website</Subtitle>

    
      <ImageBlock src="/z2.png" alt="Corvette Photography App" />
  <Subtitle>Corvettes Personal Notes – Mobile #1 App</Subtitle>

    
      <ImageBlock src="/z2.png" alt="Corvette Quiz App" />
  <Subtitle>Corvettes Quiz – Watch Mobile #2 App</Subtitle>

      <ImageBlock src="/z2.png" alt="Corvette Watch App" />
      <Subtitle>Corvette Photography – Mobile Watch App</Subtitle>

      {/* <List>
        <ListItem>Coverage of 2026 models, racing editions, and concept cars</ListItem>
        <ListItem>OEM parts sourcing: who supplies them and where to find them — possible new app!</ListItem>
      </List> */}
      </div>
  

    <Title>References</Title>
    <List>
      <ListItem>
        <a
          href="http://mega-react-vette.vercel.app/Future"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Corvette App Journal Future
        </a>
      </ListItem>
    </List>

     <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </div>
   </SectionWrapper>
  </>
);

export default CorvetteFuture;
