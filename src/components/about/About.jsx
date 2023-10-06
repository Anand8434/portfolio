import "./about.css";
import me from "../../img/me.png";
import {BsGithub} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import cv from "../../components/files/cv.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        Hello there! I am a skilled MERN stack developer with expertise in React.js and various frontend libraries, enabling me to craft visually appealing and fully responsive webpages. I am proficient in using MongoDB, Express.js, and Node.js to construct a robust backend server and seamlessly integrate it with the frontend. As a result, I am well-equipped to function as a full-stack web developer, offering end-to-end web development solutions.
        </p>
        <div className="connect">
         <a href="https://github.com/Anand8434"> <BsGithub size={35}/></a>
         <a href="https://www.linkedin.com/in/anand-kumar-2a7564201/"> <AiFillLinkedin size={35}/></a>
         <a href={cv} download="cv-pdf" target="_blank" rel="noreferrer" className="cv">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default About;
