import styled from 'styled-components';

const HeroSection = styled.section`
  height: 80vh;
  background: url('/corvette.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.h2`
  color: white;
  font-size: 3rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
`;

const Hero = () => (
  <HeroSection>
    <HeroText>Drive the Legend</HeroText>
  </HeroSection>
);

export default Hero;
