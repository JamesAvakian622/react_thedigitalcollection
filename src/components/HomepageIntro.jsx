import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import './Nav.css';

const HomepageWrapper = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  font-family: 'Helvetica Neue', sans-serif;
  
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #c00;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  max-width: 1000px;
  margin-bottom: 1rem;
`;

const HomepageIntro = () => (
  <>
    <HomepageWrapper>
  
      <Title>Welcome to Cool Jimmy Software</Title>
      <Subtitle>The Corvette Software Collection</Subtitle>

      <div className="center">
        <div className="responsive">
          <div className="gallery100">
            <a href="/isting.png" target="_blank" rel="noopener noreferrer">
              <img src="/isting.png" alt="Corvette Images Information" width="100%" height="100%" />
            </a>
          </div>
        </div>
      </div>

      <Title>The Cool Jimmy Corvette Software Collection</Title>
      <Subtitle><i>A New Era for Enthusiasts</i></Subtitle>

      <Subtitle>Celebrating the Chevrolet Corvette — 70+ Years of Speed, Style, and Legacy</Subtitle>

      <Description>
        Whether you're a first-time buyer, seasoned owner, motorsports enthusiast, or Corvette historian, you've just found your ultimate destination.
        We are dedicated to all things related to the Chevrolet Corvette.
      </Description>

      <Description>
        <strong>1. Three Corvette Internet Websites</strong><br />
        The following enthusiast websites include:
        <br />
        <strong>A.</strong> <a href="http://www.TheCorvetteWeb.com" target="_blank" rel="noopener noreferrer">The Corvette Web.com</a> — Our Corvette Photographic Website<br />
        <strong>B.</strong> <a href="http://www.TheCorvetteJournal.com" target="_blank" rel="noopener noreferrer">The Corvette Journal.com</a> — Our Corvette Journal Website<br />
        <strong>C.</strong> <a href="http://www.TheCorvetteReporter.com" target="_blank" rel="noopener noreferrer">The Corvette Reporter.com</a> — Our Corvette Reporter Website
      </Description>

      <ul>
        <li>Corvette Photographic Website — A dedicated platform for photography enthusiasts</li>
        <li>Corvette Information — Current and 2026 model lineup</li>
        <li>Motorsport and Supplier Information — Comprehensive details on racing and parts sourcing</li>
      </ul>

      <Description>
        These software information sources offer unmatched insights, rare photography, and behind-the-scenes stories that Chevrolet.com and traditional clubs often overlook.
      </Description>

      <Description>
        <strong>2. Four Apple Mobile Apps</strong><br />
        Our personal mobile app software collection includes:
        <br />
        <strong>A.</strong> <a href="https://mega-react-vette.vercel.app/future" target="_blank" rel="noopener noreferrer">Corvette Photographs App</a><br />
        <strong>B.</strong> <a href="https://mega-react-vette.vercel.app/future" target="_blank" rel="noopener noreferrer">Corvette Website App</a><br />
        <strong>C.</strong> <a href="https://mega-react-vette.vercel.app/future" target="_blank" rel="noopener noreferrer">Corvette Watch Quiz</a><br />
        <strong>D.</strong> <a href="https://mega-react-vette.vercel.app/future" target="_blank" rel="noopener noreferrer">Corvette Watch Photographs</a><br />
        <br />
        These mobile apps are designed for Apple iPad, iPhone, and Watch. Beta versions are currently in development and will be available on the Apple App Store as Cool Jimmy Corvette Software Apps.
      </Description>

      <Description>
        <strong>3. Mission Statement Summary</strong><br />
        Explore the Corvette legacy through ownership, design, and racing. Our software—both web and mobile—enriches the Corvette enthusiast experience. Dive into exclusive photo galleries, educational quizzes, and motorsport coverage that capture the spirit of Corvette, a true super hypercar.
      </Description>

      <Description>
        Join us as we celebrate the past, present, and future of the Chevrolet Corvette.<br />
        Your journey into the heart of America's sports car starts here.
        <br /><br />
        Thank you,<br /><br />
        <strong>James Avakian, Software Engineer</strong><br />
        <strong>Optical Automation, LLC</strong>
      </Description>

      {/* <Description>
        <small>
          The tradenames Chevrolet, Corvette, and Chevrolet Corvette are intellectual property of General Motors Corporation.<br />
          Cool Jimmy Software, its websites, mobile apps, and internet names are property of Optical Automation, LLC.
        </small>
      </Description> */}

      <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </div>
    </HomepageWrapper>
  </>
);

export default HomepageIntro;
