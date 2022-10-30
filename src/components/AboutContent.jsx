import { Link } from "react-router-dom";

import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";
import "./aboutContentStyles.css";

export default function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm an enthusiastic software programmer that specializes in Front-end
          web development, I use tools like HTML/CSS, Javascript, MUI, React,
          Redux, e.t.c to create responsive secure websites for my clients.
        </p>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} alt="react pic1" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} alt="react pic2" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
