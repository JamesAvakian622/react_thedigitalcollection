import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './components/Nav.css';

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

const CorvetteReporter = () => (
  <>
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
      <Title>The Corvette Reporter.com</Title>
      <Subtitle>Insights into Corvette Motorsports, Enthusiast Clubs, YouTube Reporters, and Model History</Subtitle>

      <Paragraph>
        The Corvette Reporter is your go-to resource for everything related to Corvette and motorsports. Whether you're buying your first Stingray or upgrading to a Z06, this site offers practical guidance and insider knowledge that goes beyond the showroom.
      </Paragraph>

      <List>
        <ListItem>Buying guides and motorsport coverage</ListItem>
        <ListItem>Breakdowns of tracks, racers, and event details</ListItem>
        <ListItem>Locations for driving, racing, and Corvette-themed vacations</ListItem>
      </List>

      <Paragraph>
        Built for buyers and owners, The Corvette Reporter complements Chevrolet’s official resources by offering real-world insights, supplier connections, and a deeper look into the Corvette legacy.
      </Paragraph>

      <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </div>
    </SectionWrapper>
  </>
);

export default CorvetteReporter;
