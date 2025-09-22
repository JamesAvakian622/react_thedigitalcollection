import React from "react";
import styled from "styled-components";

const PressReleaseWrapper = styled.section`
  padding: 2rem;
  background-color: #fff;
  border-top: 4px solid #c00;
  font-family: 'Helvetica Neue', sans-serif;
`;

const DateLine = styled.p`
  font-style: italic;
  color: #777;
  margin-bottom: 1rem;
`;

const Headline = styled.h2`
  font-size: 2rem;
  color: #c00;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const PressRelease = ({ date, title, link, extraContent }) => (
  <PressReleaseWrapper>
    <h1><strong>Press Release – The Cool Jimmy Corvette Digital Software Collection</strong></h1>

    <DateLine>FOR IMMEDIATE RELEASE — {date}</DateLine>
    <Headline>{title}</Headline>

    <Paragraph>
      Corvette enthusiasts now have a new digital destination that goes beyond the showroom.
      The newly restructured <strong>Corvette Digital Collection</strong> includes three websites and a suite of mobile apps.
      <strong><em> The Corvette Journal.com</em>, <em>The Corvette Web.com</em>, <em>The Corvette Reporter.com</em></strong> and Apple iOS mobile apps
      offer a comprehensive, enthusiast-driven look at America’s iconic sports car.
    </Paragraph>

    {extraContent}

    <Headline>Purpose Summary</Headline>
    <Paragraph>
      This press release introduces our software products known as the Cool Jimmy Corvette Software Collection:
    </Paragraph>

    <Paragraph>
      <strong>1. The Corvette Websites</strong><br />
      <strong>2. The Corvette Mobile Apps</strong>
    </Paragraph>

    <Paragraph>
      These platforms serve as a hub for all things Corvette—featuring news, articles, and a community forum for enthusiasts.
      Visit the collection at <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>.
    </Paragraph>

    <Paragraph>
      <strong>For media inquiries, please contact:</strong><br />
      <br />
      Cool Jimmy Software<br />
      Optical Automation, LLC<br />
      <br />
      Email: <a href="mailto:JamesAvakian62@Yahoo.com">JamesAvakian62@Yahoo.com</a>
    </Paragraph>

    <div className="center">
      <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
    </div>
  </PressReleaseWrapper>
);

export default PressRelease;
