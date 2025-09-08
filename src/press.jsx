// App.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomepageIntro from './components/HomepageIntro';
import PressRelease from './components/PressRelease';
import SocialMediaStrategy from './components/SocialMediaStrategy';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
`;

const AnimatedSection = styled(motion.section)`
  margin-bottom: 2rem;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const App = () => (
  <PageWrapper>
    <Header />
    <MainContent>
      <AnimatedSection initial="hidden" animate="visible" variants={fadeIn}>
        <HomepageIntro />
      </AnimatedSection>
      <AnimatedSection initial="hidden" animate="visible" variants={fadeIn}>
        <PressRelease />
      </AnimatedSection>
      <AnimatedSection initial="hidden" animate="visible" variants={fadeIn}>
        <SocialMediaStrategy />
      </AnimatedSection>
    </MainContent>
    <Footer />
  </PageWrapper>
);

export default App;
