import React from 'react';
import styled from 'styled-components';

const HomepageWrapper = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  font-family: 'Helvetica Neue', sans-serif;
`;

const Title = styled.h1`
  margin: 1rem 0;
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
  margin-bottom: 1rem;
`;

const SectionHeading = styled.h2`
  font-size: 1.4rem;
  color: #c00;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const StyledList = styled.ul`
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const StyledListItem = styled.li`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const ProductDescriptions = () => (
  <>
    <div className="center">
      <div className="responsive">
        <div className="gallery100">
          <a href="/izr1.png" target="_blank" rel="noopener noreferrer">
            <img src="/izr1.png" alt="Corvette Images Information" width="100%" height="100%" />
          </a>
        </div>
      </div>
    </div>

    <HomepageWrapper>
      <Title>Welcome to the Corvette Digital Products Collection</Title>
      <Subtitle>Celebrating the Chevrolet Corvette — 70+ Years of Speed, Style, and Legacy</Subtitle>

      <Description>
        Whether you're a first-time buyer, seasoned owner, motorsports enthusiast, or Corvette historian, you've just found your ultimate destination. Our three specialized websites—<strong>The Corvette Journal</strong>, <strong>The Corvette Web</strong>, and <strong>The Corvette Reporter</strong>—offer unmatched insights, rare photography, and behind-the-scenes stories that Chevrolet.com and traditional clubs often overlook.
      </Description>

      <Description>
        Explore the Corvette legacy through the lens of ownership, design, and racing. This is more than a car—it's a culture.
      </Description>

      <SectionHeading>Technology</SectionHeading>
      <Description>
        This website is built using the latest web technologies to provide a seamless experience for users. For buyers and owners, The Corvette Journal complements Chevrolet’s official resources by offering real-world insights, supplier connections, and a deeper look into the Corvette legacy.
      </Description>

      <SubHeading>1. Website Pages</SubHeading>
      <StyledList>
        <StyledListItem>This website utilizes cutting-edge software development technologies</StyledListItem>
        <StyledListItem>React.js for building user interfaces</StyledListItem>
        <StyledListItem>Styled-components for styling</StyledListItem>
        <StyledListItem>Framer Motion for animations</StyledListItem>
      </StyledList>

      <SubHeading>2. Digital Software Products</SubHeading>
      <Description>
        Our products include personal app software for tablets, smartphones, and smartwatches. We use Apple SwiftUI to create innovative applications tailored for Corvette enthusiasts.
      </Description>

      <SubHeading>3. Product List</SubHeading>
      <StyledList>
        <StyledListItem>Corvette websites with responsive displays for desktops, laptops, tablets, and smartphones</StyledListItem>
        <StyledListItem>Corvette photography apps for Apple iPad, iPhone, and Watch</StyledListItem>
        <StyledListItem>Corvette quiz app for Apple Watch</StyledListItem>
      </StyledList>

      <ImageWrapper>
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </ImageWrapper>
    </HomepageWrapper>
  </>
);

export default ProductDescriptions;
