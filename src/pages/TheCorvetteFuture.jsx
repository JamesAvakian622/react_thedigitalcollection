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

const CorvetteFuture = () => (
  <>

    <SectionWrapper initial="hidden" animate="visible" variants={fadeIn}>
      <Title>The Corvette Future Products Description</Title>
      <Subtitle>Ownership, Buying, and Model Insights</Subtitle>
      <Paragraph>

        On-going Apple Hardware SwiftUI Software Development

        The Corvette Future is your go-to resource for everything related to Corvette ownership. Whether you're buying your first Stingray or upgrading to a Z06, this site offers practical guidance and insider knowledge that goes beyond the showroom.
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
      <List>
        <Paragraph><strong>Software Technology Deployed</strong></Paragraph>
        <ListItem> 1. Apple SwiftUI</ListItem>
        <ListItem> 2. Apple App Store Submission And Acceptance</ListItem><br /><br />
        <ListItem><strong>  The Checkered-Flag.com eCommerce Website  </strong></ListItem>
        <img src="/z3.png" alt="Corvette Model" />
        <ListItem><strong>   Photography of Corvettes, Mobile #1 App   </strong></ListItem>
        <img src="/z2.png" alt="Corvette Model" />
        <ListItem><strong>  Corvettes Quiz, Watch Mobile #2 App  </strong></ListItem>
        <img src="/z2.png" alt="Corvette Model" />
        <ListItem><strong> Photography of Corvettes, Mobile Watch App  </strong></ListItem>
        <img src="/z2.png" alt="Corvette Model" />
        <ListItem>Coverage of 2026 models, racing editions, and concept cars</ListItem>
        <ListItem>OEM parts sourcing: who supplies them and where to find them, Possible NEW app!</ListItem>

      </List>

    </SectionWrapper>
    <h2>References</h2>
    <ul>
      <li><a href="http://mega-react-vette.vercel.app/Future" target="_blank" rel="noopener noreferrer">The Corvette App Journal Future</a></li>
    </ul>
  </>
);

export default CorvetteFuture;
