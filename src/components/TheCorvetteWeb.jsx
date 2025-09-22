import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './components/Nav.css';
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

    <div className="center">
      <div className="responsive">
        <div className="gallery100">
          <a href="/z1.png" target="_blank" rel="noopener noreferrer">
            <img src="/z1.png" alt="Corvette Images Information" width="100%" height="100%" />
          </a>
        </div>
      </div>
    </div>

    <SectionWrapper initial="hidden" animate="visible" variants={fadeIn}>
      <Title>The Corvette Web.com</Title>

      {/* Replace with <Link> if routing to internal page */}
      <p>
        <a href="/Page1Photos" className="photo-link">Photo Albums</a>
      </p>

      <Subtitle>Insights into Corvette Model Ownership, Buying, and Maintenance</Subtitle>

      <Paragraph>
        The Corvette Web is your visual model photography site for pre-owners, enthusiasts, and legacy Corvette fans. It offers a photographic journey through current, 2026, racing, and concept editions of Chevrolet Corvette models.
      </Paragraph>

      <List>
        <ListItem>Detailed photographs of current models</ListItem>
        <ListItem>Photographic breakdown of trim levels, options, and performance packages</ListItem>
        <ListItem>Photographs of 2026, racing, and concept cars; OEM parts sourcing—who supplies them and where to find them</ListItem>
      </List>

      <Paragraph>
        Built for new buyers and owners, The Corvette Web complements Chevrolet’s official resources by offering real-world insights, supplier connections, and a deeper look into the Corvette legacy.
      </Paragraph>

      <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </div>
    </SectionWrapper>
  </>
);

export default CorvetteWeb;
