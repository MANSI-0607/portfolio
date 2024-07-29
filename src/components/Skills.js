import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import gfg from "../assets/gfg.png";
import leetcode from "../assets/LeetCode.png";
import codechef from "../assets/codechef.png";
import codeforces from "../assets/codeforces.jpg";
import colorSharp from "../assets/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
          <Col>
          
            <div className='skill-bx'>
              <h2>
                Coding Platforms
              </h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> 
                <div className="item">
                  <a href="https://codeforces.com/profile/mansimayank2002" target="_blank" rel="noopener noreferrer">
                    <img src={codeforces} alt="Codeforces" />
                    <h5>Codeforces</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://leetcode.com/u/mansi_codes/" target="_blank" rel="noopener noreferrer">
                    <img src={leetcode} alt="LeetCode" />
                    <h5>LeetCode</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.codechef.com/users/mansi_codes" target="_blank" rel="noopener noreferrer">
                    <img src={codechef} alt="CodeChef" />
                    <h5>CodeChef</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.geeksforgeeks.org/user/mansimayu6hh" target="_blank" rel="noopener noreferrer">
                    <img src={gfg} alt="GeeksForGeeks" />
                    <h5>GeeksForGeeks</h5>
                  </a>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt="Background" />
    </section>
  );
};

export default Skills;
