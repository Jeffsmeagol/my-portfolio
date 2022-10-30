import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./footerStyles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container" id="contact">
        <div className="left">
          {/* <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>Bangladesh.</p>
            </div>
          </div> */}
          <div className="phone">
            <h4>
              <FaPhone
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              (+234) - 8149236128
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaMailBulk
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              adebowalejeff@yahoo.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
          I'm an enthusiastic software programmer that specializes in Front-end
          web development, I use tools like HTML/CSS, Javascript, MUI, React,
          Redux, e.t.c to create responsive secure websites for my clients.
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/ifeoluwa-adebowale-377779112/"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://github.com/Jeffsmeagol" target="_blank">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
