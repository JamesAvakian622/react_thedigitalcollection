import React from 'react';
import styled from 'styled-components';



const StrategyWrapper = styled.div`
  padding: 2rem;
  background-color: #f0f0f0;
`;

const StrategyTitle = styled.h2`
  font-size: 1.8rem;
  color: #c00;
`;

const StrategyList = styled.ul`
  list-style-type: square;
  padding-left: 1.5rem;
`;

const StrategyItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const Hashtag = styled.span`
  background-color: #e0e0e0;
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
  border-radius: 4px;
  font-weight: bold;
`;

const SocialMediaStrategy = () => (
  <StrategyWrapper>
    <StrategyTitle>Social Media Strategy</StrategyTitle>
    <StrategyList>
      <StrategyItem>Instagram: Model showcases, concept teasers, racing highlights</StrategyItem>
      <StrategyItem>Facebook: Community posts, club events, article shares</StrategyItem>
      <StrategyItem>X (Twitter): Corvette news, trivia, motorsports updates</StrategyItem>
      <StrategyItem>YouTube/TikTok: Restoration tips, track footage, concept reveals</StrategyItem>
    </StrategyList>
    <StrategyTitle>Hashtags</StrategyTitle>
    <div>
      <Hashtag>#CorvetteJournal</Hashtag>
      <Hashtag>#CorvetteWeb</Hashtag>
      <Hashtag>#CorvetteReporter</Hashtag>
      <Hashtag>#CorvetteNation</Hashtag>
      <Hashtag>#VetteLife</Hashtag>
      <Hashtag>#70YearsOfCorvette</Hashtag>
      <Hashtag>#CorvetteCulture</Hashtag>
    </div>
  </StrategyWrapper>
);

export default SocialMediaStrategy;
