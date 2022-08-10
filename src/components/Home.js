import React, { useEffect, useRef } from "react";
import { DiReact } from "react-icons/di";

import "../styles/Home.css";
import img from "../imagenes/Photo__Perfil.jpeg";
/*import logo from "../imagenes/logo.jpg";*/

const Home = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error en Iniciar", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="home" id="">
      <video
        playsInline
        loop
        muted
        alt="All the devices"
        src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
        ref={videoEl}
      />
      <div className="home__bg">
        <div className="container">
          <div className="home__content">
            <div className="home__overlay"></div>
            <div class="home__Iam">
              <p className="home__code">
                CODE <DiReact />{" "}
              </p>
              <b>
                <div class="innerIam">
                  WELCOME
                  <br />
                  HI, MY NAME IS MARCOS
                  <br />
                  JS DEVELOPER
                  <br />
                  BASED IN MÉXICO
                  <br />
                  AS PLAY WITH MY SON
                </div>
              </b>
            </div>
            <img
              className="home__img"
              src={img}
              alt="Paris"
              width="300"
              height="300"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/*<div className="header d__flex align__items__center pxy__30">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigation pxy__30">
          <ul className="navbar d__flex">
            <a href="#Home">
              <li className="nav__items mx__15">Home</li>
            </a>
            <a href="#About">
              <li className="nav__items mx__15">About</li>
            </a>
            <a href="#Services">
              <li className="nav__items mx__15">Services</li>
            </a>
            <a href="#Portfolio">
              <li className="nav__items mx__15">Portfolio</li>
            </a>
            <a href="#Blog">
              <li className="nav__items mx__15">Blog</li>
            </a>
            <a href="#Contact">
              <li className="nav__items mx__15">Contact</li>
            </a>
          </ul>
        </div>
      </div>
      */
