import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Navbar from "./Navbar";

const CarouselWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Slide = styled.div`
  text-align: center;
  padding: 20px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const ImageItem = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(16, auto);
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-rows: repeat(8, auto);
  }

  @media (max-width: 480px) {
    grid-template-rows: repeat(4, auto);
  }
`;

const ResponsiveWrapper = styled.div`
  padding: 0 6px;
  float: left;
  width: 25%;

  @media (max-width: 700px) {
    width: 50%;
    margin: 6px 0;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const Gallery = styled.div`
  border: 1px solid #ccc;

  &:hover {
    border: 1px solid #777;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const jsonDataArrayAA = [
  { id: 1, src: "/eray000.png", alt: "Image 1" },
  { id: 2, src: "/eray001.png", alt: "Image 2" },
  { id: 3, src: "/eray002.png", alt: "Image 3" },
  { id: 4, src: "/eray003.png", alt: "Image 4" },
  { id: 5, src: "/eray004.png", alt: "Image 5" },
  { id: 6, src: "/eray005.png", alt: "Image 6" },
  { id: 7, src: "/eray006.png", alt: "Image 7" },
  { id: 8, src: "/eray007.png", alt: "Image 8" },
  { id: 9, src: "/e8.png", alt: "Image 9" },
  { id: 10, src: "/e9.png", alt: "Image 10" },
  { id: 11, src: "/e10.png", alt: "Image 11" },
  { id: 12, src: "/e11.png", alt: "Image 12" },
  { id: 13, src: "/e12.png", alt: "Image 13" },
  { id: 14, src: "/e0.png", alt: "Image 14" },
  { id: 15, src: "image15.jpg", alt: "Image 15" },
  { id: 16, src: "image16.jpg", alt: "Image 16" }
];

export default function TheCorvettePhotos() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar />
      <div className="rowPage">
        <h1 className="text"><strong>2025 Corvette E-Ray Photo Album</strong></h1>
        <h5>Click images for full-screen view.</h5>

        <div className="center">
          <ResponsiveWrapper>
            <Gallery>
              <a href="/eraylogo1.png" target="_blank" rel="noopener noreferrer">
                <img src="/eraylogo1.png" alt="Corvette Logo" />
              </a>
            </Gallery>
          </ResponsiveWrapper>
        </div>

        {selectedImage && (
          <Overlay onClick={() => setSelectedImage(null)}>
            <FullscreenImage src={selectedImage} alt="Fullscreen View" />
          </Overlay>
        )}

        <GridContainer>
          {jsonDataArrayAA.map((image) => (
            <ImageItem
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </GridContainer>

        <div className="references">
          <h2>References</h2>
          <ul>
            <li>
              <a
                href="http://www.chevrolet.com/performance/corvette"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chevrolet.com – “Colors That Captivate: The Stingray”
              </a>
            </li>
          </ul>
        </div>

        <div style={{ padding: 6 }}>
          <p>Click any image to view it full screen.</p>
          <p>Learn more about responsive design in our CSS tutorial.</p>
        </div>

      <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </div>
      </div>
    </>
  );
}
