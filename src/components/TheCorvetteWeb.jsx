import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './components/Nav.css'
import Navbar from './Navbar';

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

const CorvetteWeb = () => (
    <>
  <Navbar />
  <div className='image'>
    <img src="/z1.png" alt="Corvette Model" />
  </div>
 
  <SectionWrapper initial="hidden" animate="visible" variants={fadeIn}>
  
      <Title>The Corvette Web.com</Title>
      <link to="Page1Photos.jsx">Photo Albums</link>
      <Subtitle>Ownership, Buying, and Model Insights</Subtitle>
      <Paragraph>
        The Corvette Web is your visual model photographic website for pre-owners, enthusiasts, and legacy Corvette
        vehicles. A visual photographic journey into the current, 2026, racing, and concept editions of the Chevrolet Corvette models.
      </Paragraph>
      <List>
        <ListItem>Detailed photographs of current models</ListItem>
        <ListItem>Photographic breakdown of trim levels, options, and performance packages</ListItem>
        <ListItem>Photographic 2026, Racing, and Concept carsEM parts sourcing: who supplies them and where to find them</ListItem>
      </List>
      <Paragraph>
        Built for new buyers and owners, The Corvette Web complements Chevrolet’s official resources by offering real-world insights, supplier connections, and a deeper look into the Corvette legacy.
      </Paragraph>
    </SectionWrapper></>
);

export default CorvetteWeb;
