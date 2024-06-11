import React,{useState,useEffect}from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from'../assets/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Competitive Programmer", "Web Developer", "Tech Enthusiast" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta)
        return ()=>{
            clearInterval(ticker)};
        },[text])

        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
            setText(updatedText);
        
            if (isDeleting) {
              setDelta(prevDelta => prevDelta / 2);
            }
        
            if (!isDeleting && updatedText === fullText) {
              setIsDeleting(true);
              setIndex(prevIndex => prevIndex - 1);
              setDelta(period);
            } else if (isDeleting && updatedText === '') {
              setIsDeleting(false);
              setLoopNum(loopNum + 1);
              setIndex(1);
              setDelta(500);
            } else {
              setIndex(prevIndex => prevIndex + 1);
            }
          }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mansi.`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Competitive Programmer", "Web Developer", "Tech Enthusiast" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Welcome to my corner of the web! I'm Mansi Gupta, a passionate undergraduate student pursuing my B.Tech at the Indian Institute of Technology, Guwahati.With a passion for programming and problem-solving, I thrive on creating innovative solutions and diving into challenging projects. As a keen web developer, I love bringing ideas to life through code, crafting engaging user experiences and functional designs.
                     Explore my portfolio to see my latest projects and connect with me to collaborate on exciting ventures!</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner