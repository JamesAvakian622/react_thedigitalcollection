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

const CorvetteReporter = () => (
  <>
    <SectionWrapper initial="hidden" animate="visible" variants={fadeIn}>
      {/* <Link to="/pages/TheCorvettePhotos">Home</Link> */}
      <Title>The Corvette Reporter.com</Title>
      <Subtitle>Ownership, Buying, and Model Insights</Subtitle>

      <Paragraph>
        The Corvette Reporter is your go-to resource for everything related to Corvette ownership and the Corvette experience. Whether you're buying your first Stingray or upgrading to a Z06, this site offers practical guidance and insider knowledge that goes beyond the showroom.
      </Paragraph>

      <List>
        <ListItem>Detailed buying guides for current and upcoming models</ListItem>
        <ListItem>Profiles of key figures in the automotive industry</ListItem>
        <ListItem>Suppliers of trim levels, options, and performance packages</ListItem>
        <ListItem>Coverage of race tracks, motorsport venues, and notable racers—past and present</ListItem>
        <ListItem>OEM parts sourcing: who supplies them and where to find them</ListItem>
        <ListItem>Insights into 2026 models, racing editions, and concept cars</ListItem>
      </List>

      <Paragraph>
        Developed for buyers and owners, The Corvette Journal complements Chevrolet’s official resources by offering real-world insights, supplier connections, and a deeper look into the Corvette legacy.
      </Paragraph>

      <Title>Internet Software Technologies</Title>
      <Paragraph>
        This website is built using the latest web technologies to provide a seamless experience for users. It complements Chevrolet’s official resources by offering real-world insights, supplier connections, and a deeper look into the Corvette legacy.
      </Paragraph>

      <Subtitle>Website Technology & Pages</Subtitle>
      <List>
        <ListItem>Full-stack React JavaScript development</ListItem>
        <ListItem>React.js for building user interfaces</ListItem>
        <ListItem>React Router for routing</ListItem>
        <ListItem>JSON for data storage</ListItem>
        <ListItem>Meta tags for optimized SEO</ListItem>
        <ListItem>React Hook Form for form handling</ListItem>
        <ListItem>Styled-components for styling</ListItem>
        <ListItem>Header text link navigation</ListItem>
        <ListItem>Framer Motion for animations</ListItem>
      </List>


    <Title>References</Title>
    <List>
      <ListItem>
        <a href="http://www.TheCorvetteReporter.com/" target="_blank" rel="noopener noreferrer">
          The Corvette Reporter
        </a>
      </ListItem>
      {/* <ListItem>
        <a href="http://mega-react-vette.vercel.app" target="_blank" rel="noopener noreferrer">
          The Corvette Journal
        </a>
      </ListItem> */}
    </List>

     <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
     </div>
    </SectionWrapper>

  </>
);

export default CorvetteReporter;
