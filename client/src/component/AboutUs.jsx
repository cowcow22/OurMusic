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
          <img src={require("../images/koko.jpg")} alt="Stevanus Firman W" />
          <h3>Stevanus Firman W</h3>
          <h5>Informatika</h5>
          <div className="icons">
            <a href="https://www.instagram.com/">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="ri-facebook-box-fill"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="box">
          <img src={require("../images/farrell.jpg")} alt="Jacques Farrell D" />
          <h3>Jacques Farrell D</h3>
          <h5>Informatika</h5>
          <div className="icons">
            <a href="https://www.instagram.com/">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="ri-facebook-box-fill"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="box">
          <img src={require("../images/felix.jpg")} alt="Felix Ivander" />
          <h3>Felix Ivander</h3>
          <h5>Informatika</h5>
          <div className="icons">
            <a href="https://www.instagram.com/">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="ri-facebook-box-fill"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div className="box">
          <img src={require("../images/evan.jpg")} alt="Evan Yo" />
          <h3>Evan Yo</h3>
          <h5>Informatika</h5>
          <div className="icons">
            <a href="https://www.instagram.com/">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="ri-facebook-box-fill"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
