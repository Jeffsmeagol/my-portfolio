import { Link } from "react-router-dom";
import IntroImg from "../assets/intro-bg.jpg";
import "./heroImgStyles.css";

export default function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro-img" />
      </div>
      <div className="content">
        <p>HI, I AM A FRONT-END ENGINEER</p>
        <h1>ReactJs Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <a href="#contact" className="btn btn-light">
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
}
