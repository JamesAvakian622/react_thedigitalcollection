import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import './Nav.css';
import { Link } from 'react-router-dom';

const HomepageWrapper = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  font-family: 'Helvetica Neue', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #c00;
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
`;

const HomepageIntro = () => (
  <HomepageWrapper>
    <h1>Welcome To The Home Page </h1>
      <h2>The Cool Jimmy Software Collection</h2>
    <div className='image'>
      <img src="/isting.png" alt="Corvette Hero" />
    </div>
      <Title>Welcome to the Corvette Software Collection</Title>
      <Title> <h2>  <i>   A New Era for Enthusiasts    </i>   </h2> </Title>
      <Subtitle>Celebrating the Chevrolet Corvette, 70+ Years of Speed, Style, and Legacy</Subtitle>
      <Description>
        Whether you're a first-time buyer, seasoned owner, motorsports enthusiast, or Corvette historian, you've just found your ultimate destination.  
        We are dedicated to all things regarding the Chevrolet Corvette.
    </Description>


       <Description>
        <strong>1. We have prepared three Internet Website versions, </strong>
        <br />
        The following three enthusiast websites include:
         <br />
        <strong>A. <Link to="http://Www.TheCorvetteWeb.com"> The Corvette Web </Link>, TheCorvetteWeb.Com Corvette is our Corvette Photographic Website  </strong>   <br />
        <strong>B. <Link to="http://Www.TheCorvetteJournal.com"> The Corvette Journal </Link>,  TheCorvetteJournal.com Corvette is our Corvette Journal Website  </strong>   <br />
        <strong>C. <Link to="http://Www.TheCorvetteReporter.com"> The Corvette Reporter </Link>,  TheCorvetteReporter.com Corvette is our Corvette Reporter Website  </strong>   <br />
      </Description>

        <Description><ul>
          <li>A Corvette Photographic Website,  A dedicated platform for Corvette photography enthusiasts.</li>
          <li>Corvette Current and 2026 Model Lineup, Access all Corvette-related websites in one place.</li>
          <li> Corvette MotorSport and Supplier Information Source, Provide comprehensive details about Corvette motorsport activities and suppliers.</li>
        </ul>
      

        These Software Information sources offer unmatched insights, rare photography, and behind-the-scenes stories that Chevrolet.com and traditional clubs often overlook.
        
        This is our suite of internet software websites includes:   <br />  
     
        </Description>

        <Description>
         <strong>2. We have prepared Apple Computer, Mobile Apps to include:</strong>
<br />
        Our Personal Mobile App Software Collection includes:<br />  
        <strong>A. <Link to="http://www.OpticalAutomation.com/"> Corvette Photographs App    </Link></strong>: A dedicated platform for Corvette photography enthusiasts.<br />  
        <strong>B. <Link to="http://www.OpticalAutomation.com/"> Corvette Website App</Link></strong>: Access all Corvette-related websites in one place.<br />  
        <strong>C. <Link to="http://www.OpticalAutomation.com/"> Corvette Watch Quiz</Link></strong>: Test your knowledge about Corvette history and models.<br />  
        <strong>D. <Link to="http://www.OpticalAutomation.com/"> Corvette Watch Photographs</Link></strong>: A visual journey through Corvette's design evolution.<br />  

       This is a Suite Of Software is made for use with Apple Computer product displays, iPad, iPhone, and Watch versions.
       We offer unmatched insights, rare photography, and behind-the-scenes information that describes Chevrolet Corvette Models of Vehicles.
       Currently we have Beta versions of the Apps as operating first versions. After testing and development this software is available at the Apple App Store as Cool Jimmy Corvette Software Apps.
    </Description>
    <Description>
      Explore the Corvette legacy through the lens of ownership, design, and racing. This is more than a car—it's a culture.
      Dive into exclusive photo galleries, educational quizzes, and motorsport coverage that captures the spirit of Corvette.
    </Description>
    <Description>
      Join us as we celebrate the past, present, and future of the Chevrolet Corvette. <br />Your journey into the heart of America's sports car starts here.
<br /><br />
      <i>CoolJimmy.Com</i><br /><br />

      Optical Automation, LLC<br /><br /><br />
    </Description>
    <Nav />
  
  </HomepageWrapper>
);

export default HomepageIntro;
