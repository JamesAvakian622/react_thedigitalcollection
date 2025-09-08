// App.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomepageIntro from './components/HomepageIntro';
import PressRelease from './components/PressRelease';
import ProductDescriptions from './components/ProductDescriptions';
import SocialMediaStrategy from './components/SocialMediaStrategy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import TheCorvetteFuture from './pages/TheCorvetteFuture';
import TheCorvetteReporter from './pages/TheCorvetteReporter';
import TheCorvetteWeb from './pages/TheCorvetteWeb';
import TheCorvetteJournal from './pages/TheCorvetteJournal';
import Page1Photo from './components/Page1Photo';
import Page2Photo from './components/Page2Photo';
import Page3Photo from './components/Page3Photo';
import Page4Photo from './components/Page4Photo';
import Page5Photo from './components/Page5Photo';
import Page6Photo from './components/Page6Photo';
import Page7Photo from './components/Page7Photo';
import Page8Photo from './components/Page8Photo';
import Page9Photo from './components/Page9Photo';
import Page10Photo from './components/Page10Photo';




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
  <Router>
    <PageWrapper>
      <Header />
      <MainContent>
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedSection initial="hidden" animate="visible" variants={fadeIn}>
                <HomepageIntro />
              </AnimatedSection>
            }
          />
          <Route
            path="/press-release"
            element={
              <AnimatedSection initial="hidden" animate="visible" variants={fadeIn}>
                <PressRelease />
              </AnimatedSection>
            }
          />
          <Route
            path="/product-descriptions"
            element={
              <AnimatedSection initial="hidden" animate="visible" variants={fadeIn}>
                <ProductDescriptions />
              </AnimatedSection>
            }
          />
          <Route
            path="/social-media-strategy"
            element={
              <AnimatedSection initial="hidden" animate="visible" variants={fadeIn}>
                <SocialMediaStrategy />
              </AnimatedSection>
            }
          />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/components/homepageintro" element={<HomepageIntro />} />
          <Route path="/components/pressrelease" element={<PressRelease />} />
          <Route path="/components/productdescriptions" element={<ProductDescriptions />} />
          <Route path="/components/socialmediastrategy" element={<SocialMediaStrategy />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/pages/thecorvettefuture" element={<TheCorvetteFuture />} />
          <Route path="/pages/thecorvettejournal" element={<TheCorvetteJournal />} />
          <Route path="/pages/thecorvettereporter" element={<TheCorvetteReporter />} />
          <Route path="/pages/thecorvetteweb" element={<TheCorvetteWeb />} />
          <Route path="/page1photo" element={<Page1Photo />} />


        </Routes>
      </MainContent>
      <Footer />
    </PageWrapper>
  </Router>
);


export default App;
