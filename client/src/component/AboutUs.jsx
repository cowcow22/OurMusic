import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="team">
      <div className="center">
        <h1>Our Team</h1>
      </div>

      <div className="team-content">
        <div className="box">
          <img src={require("../images/koko3.jpg")} alt="Stevanus Firman W" />
          <h3>Stevanus Firman W.</h3>
          <h5>Informatika</h5>
          <div className="icons">
            <a href="https://www.linkedin.com/in/stevanus-firman-widyatmoko-036350278/">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://www.instagram.com/stevfirman/">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="box">
          <img
            src={require("../images/farrell3.jpg")}
            alt="Jacques Farrell D"
          />
          <h3>Jacques Farrell D.</h3>
          <h5>Informatika</h5>
          <div className="icons">
            <a href="https://www.linkedin.com/in/jacques-farrell-dharma-3455a5278">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://instagram.com/farrelldharma_?igshid=NGExMmI2YTkyZg==">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="box">
          <img src={require("../images/felix3.jpg")} alt="Felix Ivander" />
          <h3>Felix Ivander</h3>
          <h5>Informatika</h5>
          <div className="icons">
            <a href="https://www.linkedin.com/in/felix-ivander-6a6562236">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://instagram.com/lyxcatus?igshid=MzNlNGNkZWQ4Mg==">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="box">
          <img src={require("../images/evan3.jpg")} alt="Evan Yo" />
          <h3>Evan Yo</h3>
          <h5>Informatika</h5>
          <div className="icons">
            <a href="https://www.linkedin.com/in/evan-yo-3a7353278?trk=contact-info">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://instagram.com/evanyoo._?igshid=OGQ5ZDc2ODk2ZA==">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
