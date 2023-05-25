import React from "react";
import { Container } from "react-bootstrap";
import "./login.css";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=455d30aa9c0a4cefa57a5050a7b854f4&response_type=code&redirect_uri=https://our-music.vercel.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ maxHeight: "100vh" }}
    >
      <div className="bungkus">
        <img
          className="background"
          src={require("./images/Login_background.png")}
          alt="background"
        />
        <div className="login">
          <div className="login2">
            <h1>Welcome To</h1>
            <img
              className="logoLogin"
              src={require("./images/OSIC_LOGIN.png")}
              alt="logo Login"
            />
            <a className="button type1" href={AUTH_URL}>
              <span class="btn-text">L O G I N</span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
