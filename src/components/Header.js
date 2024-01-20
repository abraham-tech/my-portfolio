import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../styles/nav.css";
import Title from "./Title";
import BackgroundImage from "../assets/background.jpg";

const scrollToTop = function () {
  scroll.scrollToTop();
};

const myStyle = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  textAlign: "center"
};

const logoStyle = {
  fontSize: "xx-large",
  fontFamily: "serif"
}

export default function Navbar() {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (

    <section style={myStyle}>
      <header className={navBar ? "nav active" : "nav"}>
        <span className="navbar-brand" href="">
          <span className="logo"> Abraham Meja </span>
        </span>
        <center className="leftnav">
          <nav className="nav__container__actions ">
            <div>
              <ul className="navList mx-auto">
                <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="skills"
                    offset={-65}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="tech"
                    offset={-65}
                    duration={500}
                  >
                    Tech
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="projects"
                    offset={-65}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="aboutme"
                    offset={-65}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1Qrs-IHdePXIGK_eBdHyNxAqqBoQlrDZ-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </center>
      </header>
      <Title />
    </section>
  );
}
