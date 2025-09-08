import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PressReleaseWrapper = styled.section`
  padding: 2rem;
  background-color: #fff;
  border-top: 4px solid #c00;
`;

const DateLine = styled.p`
  font-style: italic;
  color: #777;
`;

const Headline = styled.h2`
  font-size: 2rem;
  color: #c00;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #444;
`;

const PressRelease = ({ date, title, link, extraContent }) => (
  <>
<PressReleaseWrapper>
  <h1><strong>   Press Release - The Cool Jimmy Corvette Digital Software Collection </strong></h1>

  {/* <img src="/ieray.png" alt="Corvette Hero" /> */}
    <DateLine>FOR IMMEDIATE RELEASE — {date}</DateLine>
    <Headline>{title}</Headline>
    <Paragraph>
      Corvette enthusiasts now have a new digital destination that goes beyond the showroom.<br /> <br />
      The newly restructured <strong>Corvette 
        Digital Collection</strong> is comprised three websites and mobile apps.<br /> <br />
      <strong> <em>The Corvette Journal.com</em>, <em>The Corvette Web.com</em>, <em>The Corvette Reporter.com</em> and Apple iOS Mobile
       Apps  </strong> <br /> offer a comprehensive, enthusiast-driven look at America’s iconic sports car.
    </Paragraph>
    {extraContent}
    <Paragraph><br />
    <strong> Purpose Summary:    </strong>  <br /><br />
      This Press Release website serves as a introduction to our Software Products known as The Cool Jimmy Corvette Software Collection and <br /><br />
      1. The Corvette Websites <br />
      2. The Corvette Mobile Apps.
      <br /><br />
      There are a hub for all things Corvette, featuring news, articles, and a community forum for enthusiasts. Visit the collection at <a href={link}>{link}</a>.
     <br /><br />
      For media inquiries, please contact: <br /><br />
      Cool Jimmy Software <br />
      Optical Automation, LLC <br /><br />
      Email: JamesAvakian62@Yahoo.com
    </Paragraph>
</PressReleaseWrapper>
</>
);

export default PressRelease;
