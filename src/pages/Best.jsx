
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "../styles/Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';

//import CarouselZR1x from "./ZR1x/CarouselZR1x";

const SectionWrapper = styled(motion.section)`
  background-color: #fff;
  padding: 2rem;
  border-left: 6px solid #c00;
  margin-bottom: 2rem;
  font-family: 'Helvetica Neue', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
    border-left: 4px solid #c00;
  }
`;


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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
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


export default function Best() {
  const [selectedImage, setSelectedImage] = useState(null);

  const jsonDataArray = [


    // {
    //     "id": 0,
    //     "src":  "/EraySee.png",    //             1    ",
    //     "alt": "Image",
    //   },
    // {
    //   "id": 1,
    //   "src": "/EraySee.png",    //             1    ",
    //   "alt": "Image",
    // },

    {
      "id": 6,
      "src": "/b5.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127673/c7_js8zgy.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 7,
      "src": "/b6.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127670/c6_jwuk7z.png",    //             1    ",
      "alt": "Image",
    },
    // {
    //   "id": 8,
    //   "src": "/b7.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127673/c7_js8zgy.png",    //             1    ",
    //   "alt": "Image",
    // },
    {
      "id": 9,
      "src": "/b8.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127665/c5_shnrjx.png",    //             1    ",
      "alt": "Image",
    },

    {
      "id": 11,
      "src": "/b11.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127651/c2_ud3woo.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 12,
      "src": "/b12.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127630/Screenshot_2023-01-14_at_4.12.52_PM_cmwra7.png",    //             1    ",
      "alt": "Image",
    },

    {
      "id": 13,
      "src": "/b13.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127630/Screenshot_2023-01-14_at_4.12.52_PM_cmwra7.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 14,
      "src": "/b14.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127624/Screenshot_2023-01-12_at_8.38.51_PM_fzrs03.png",    //             1    ",
      "alt": "Image",
    },

    // {
    //   "id": 17,
    //   "src": "/b14.png", //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127624/Screenshot_2023-01-12_at_8.38.51_PM_fzrs03.png",    //             1    ",
    //   "alt": "Image",
    // },

    {
      "id": 15,
      "src": "/b15.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127612/Screenshot_2023-01-08_at_6.28.42_PM_zokm2t.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 16,
      "src": "/b16.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127606/Screenshot_2023-01-08_at_6.25.12_PM_ueobmw.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 17,
      "src": "/b17.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1754346831/Screenshot_2025-08-04_at_3.18.13_PM_fv1qo8.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 18,
      "src": "/b18.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1754346829/Screenshot_2025-08-04_at_3.17.53_PM_jjwa8t.png",    //             1    ",
      "alt": "Image",
    },
    //     {
    //   "id": 19,
    //   "src": "/b9.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127661/c4_iyvuqg.png",    //             1    ",
    //   "alt": "Image",
    // },
    // {
    //   "id": 20,
    //   "src": "/b10.png",
    //   "alt": "Image",
    // },
    {
      "id": 21,
      "src": "/b38.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127595/Screenshot_2023-01-08_at_6.20.11_PM_azmciv.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 44,
      "src": "/b19.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960290/Screenshot_2025-08-24_at_1.31.54_PM_xhbuxb.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 22,
      "src": "/b1.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960341/Screenshot_2025-08-24_at_1.45.55_PM_mlzaxj.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 23,
      "src": "/b2.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127682/Screen_Shot_2022-08-08_at_6.28.08_PM_nt8lkq.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 24,
      "src": "/b3.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127678/c8_w9izyr.png",    //             1    ",
      "alt": "Image",
    },

    {
      "id": 25,
      "src": "/b4.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127678/c8_w9izyr.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 26,
      "src": "/b20.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127579/Screenshot_2023-01-08_at_5.51.23_PM_naqzal.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 27,
      "src": "/b21.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127573/Screenshot_2023-01-08_at_5.50.38_PM_he7iek.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 28,
      "src": "/b22.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127568/Screenshot_2023-01-08_at_5.50.17_PM_fp8ezk.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 29,
      "src": "/b23.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127558/Screenshot_2023-01-08_at_5.42.48_PM_aw62ma.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 30,
      "src": "/b24.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127558/Screenshot_2023-01-08_at_5.42.48_PM_aw62ma.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 31,
      "src": "/b25.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127503/Screenshot_2022-11-22_at_9.54.01_PM_vbesfu.png",    //             1    ",
      "alt": "Image",
    },


    {
      "id": 32,
      "src": "/b26.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127489/Screenshot_2022-11-22_at_9.51.30_PM_fllrna.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 33,
      "src": "/b27.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127485/Screenshot_2022-11-22_at_9.51.02_PM_jzijwv.png",    //             1    ",
      "alt": "Image",
    },

    {
      "id": 34,
      "src": "/b28.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127493/Screenshot_2022-11-22_at_9.52.04_PM_qo66co.png",    //             1    ",
      "alt": "Image",
    },

    {
      "id": 35,
      "src": "/b29.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1757127474/Screenshot_2022-11-22_at_9.47.51_PM_ew1clv.png",    //             1    ",
      "alt": "Image",
    },
    // {
    //   "id": 33,

    //   "alt": "Image",
    // },
    {
      "id": 36,
      "src": "/b30.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1754346860/Screenshot_2025-08-04_at_3.25.23_PM_psqovn.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 37,
      "src": "/b31.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960325/Screenshot_2025-08-24_at_1.44.13_PM_vxiyer.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 38,
      "src": "/b32.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960323/Screenshot_2025-08-24_at_1.43.05_PM_unfzyn.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 39,
      "src": "/b33.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960311/Screenshot_2025-08-24_at_1.34.38_PM_ug0byp.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 40,
      "src": "/b34.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960311/Screenshot_2025-08-24_at_1.34.38_PM_ug0byp.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 41,
      "src": "/b35.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960291/Screenshot_2025-08-24_at_1.32.08_PM_tk5krg.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 42,
      "src": "/b36.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960290/Screenshot_2025-08-24_at_1.31.54_PM_xhbuxb.png",    //             1    ",
      "alt": "Image",
    },
    {
      "id": 43,
      "src": "/b37.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960282/Screenshot_2025-08-24_at_1.31.30_PM_s4z9pr.png",    //             1    ",
      "alt": "Image",
    },


    {
      "id": 45,
      "src": "/b39.png",    //             1    ://res.cloudinary.com/dljeojrd7/image/upload/v1756960280/Screenshot_2025-08-24_at_1.30.47_PM_teboqr.png",    //             1    ",
      "alt": "Image",
    },



    {
      "id": 46,
      "src": "     http://res.cloudinary.com/dljeojrd7/image/upload/v1757350660/Screenshot_2024-12-05_at_11.06.42_AM_xhs8zf.png",
      "alt": "Image",
    },
    {
      "id": 47,
      "src": "http://res.cloudinary.com/dljeojrd7/image/upload/v1757350657/Screenshot_2024-12-05_at_11.06.10_AM_rjeccn.png",
      "alt": "Image",
    },
    {
      "id": 48,
      "src": "http://res.cloudinary.com/dljeojrd7/image/upload/v1757350657/Screenshot_2024-12-05_at_11.06.32_AM_lhghrt.png",
      "alt": "Image",
    },
    {
      "id": 49,
      "src": "http://res.cloudinary.com/dljeojrd7/image/upload/v1757350656/Screenshot_2024-12-05_at_11.06.22_AM_jjoiwz.png",

      "alt": "Image",
    },
    {
      "id": 50,
      "src": "http://res.cloudinary.com/dljeojrd7/image/upload/v1757350653/Screenshot_2024-12-05_at_11.06.00_AM_auvd43.png",
      "alt": "Image",
    },


    {
      "id": 51,
      "src": "   http://res.cloudinary.com/dljeojrd7/image/upload/v1757350651/Screenshot_2024-12-05_at_11.04.48_AM_im89gp.png",
      "alt": "Image",
    },
    {
      "id": 52,
      "src": "http://res.cloudinary.com/dljeojrd7/image/upload/v1757350650/Screenshot_2024-12-05_at_11.04.37_AM_zfkaxc.png",
      "alt": "Image",
    },
    {
      "id": 53,
      "src": "http://res.cloudinary.com/dljeojrd7/image/upload/v1757350649/Screenshot_2024-12-05_at_11.04.27_AM_m7xy70.png",
      "alt": "Image",
    },


    {
      "id": 54,
      "src": "http://res.cloudinary.com/dljeojrd7/image/upload/v1757350648/Screenshot_2024-12-05_at_11.03.46_AM_hlvmjg.png",
      "alt": "Image",
    },
  ]


  // useEffect(() => {
  //   fetch("/carouselData.json") // Adjust path as needed
  //     .then(response => response.json())
  //     .then(data => setSlides(data))
  //     .catch(error => console.error("Error loading JSON:", error));
  // }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <SectionWrapper initial="hidden" animate="visible" variants={fadeIn}></SectionWrapper>

      <style
        dangerouslySetInnerHTML={{
          __html:
            '\ndiv.gallery {\n  border: 1px solid #ccc;\n}\n\ndiv.gallery:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery img {\n  width: 80%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.responsive {\n  padding: 0 6px;\n  float: left;\n  width: 24.99999%;\n}\n\n@media only screen and (max-width: 700px) {\n  .responsive {\n    width: 49.99999%;\n    margin: 6px 0;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .responsive {\n    width: 80%;\n  }\n}\n\n.clearfix:after {\n  content:"";\n  display: table;\n  clear: both;\n}\n',
        }}
      />

  <title>   Best 2025 / 2026, Corvette PhotoAlbum     </title>

      <div className="photoPhotos">
  
         <div className="center">
        <h1 className="red">
        <b>   Best 2025 / 2026, Corvette PhotoAlbum   </b>  
         </h1>
        

        <br />
        <h5>Click images for 100% full Screen.</h5>
        <br />
        <h6> Rated 5 Out Of 5 Stars, The Corvette Journal   </h6>
 </div>
        {/*  Start Photo Display  */}


        <div className="center">
          {selectedImage && (
            <Overlay onClick={() => setSelectedImage(null)}>
              <FullscreenImage src={selectedImage} alt="Fullscreen View" />
            </Overlay>
          )}

          <GridContainer>
            {jsonDataArray.map((image) => (
              <ImageItem
                key={image.id}
                src={image.src}
                alt={image.alt}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </GridContainer>
        </div>
        {/* Close the center div before SectionWrapper */}
      </div>

      {/* End Photo Display */}

      <div className="references">
        <h2>References  </h2>
        <br />
        <Link to="http://www.youtube.com/watch?v=WthQAjwi4VU&t=4836s"><h2>   1.  "Corvette Invasion 2025", Car Show FOMO</h2> </Link><br />
        <Link to="http://www.youtube.com/watch?v=Eu1R3TcuxR0">
          <h2> 1.  "The New 2025 ZR1x", Chevrolet.com</h2>
        </Link><br />
        <Link to="http://www.chevrolet.com/upcoming-vehicles/2026-corvette-zr1x"><h2>   2.  "2025 Corvette Invasion Recap", SRE Promotions</h2> </Link>
        <Link to="http://www.youtube.com/watch?v=x90vft3-oUg&t=1s">
          <h2> 3.  "Corvette Invasion 2025!", Brink Of Speed</h2>
        </Link><br />
        <Link to="http://www.youtube.com/watch?v=JjDhpxWAImQ">
          <h2> 4.  " Xclusive Corvette Club Corvette Car Show", Front Seat Driver</h2>
        </Link>



      </div>


       <div className="center">
        <img src="/opauto.png" alt="Corvette Hero" width={400} height={150} />
      </div>


    </>
  );
}
