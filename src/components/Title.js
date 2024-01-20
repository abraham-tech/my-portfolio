import React from "react";
// import BackgroundImage from "../assets/background.jpg";
import Icons from "./Icons";
import Typewriter from "typewriter-effect";
import styled from "styled-components";


const Container = styled.div`
     font-family: sans-serif;
     font-size: 50px;
     font-weight: 500;
     color: ${(props) => props.theme.color};
     background: ${(props) => props.theme.background};
     //height: 50vh;
`;

const Content = styled.div`
     padding-top: 80px;
     text-align: center;
        font-family: sans-serif;
        font-size: 50px;
        font-weight: 500;
        height: 50vh;
`;


const Title = () => {
  return (
    <div className="container-fluid titleblock">
      <h1 className="titleh1" >✨Hi , welcome to my website!✨</h1>
        <Content>
        <Typewriter
            onInit={(typewriter) => {
                typewriter

                    .pauseFor(1000)
                    .typeString(
                        "<strong>I'm so glad you're here.</strong>"
                    )
                    .typeString(
                        "<br/><span>I'm a software engineer passionate about technology.</span>"
                    )
                    .pauseFor(5000)
                    .start();

            }}
            options={{
                autoStart: true,
                loop: false
            }}
        />
            </Content>

      {/*<h3 >I'm a software engineer passionate about building awesome things.</h3>*/}
      <br />
      <Icons />
      <a href="#skills"  class="btn btn-outline-light btn-lg title-button">
        TELL ME MORE
      </a>
      <div class="custom-shape-divider-bottom-1658234901">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
    </div>
    // </div>
  );
};

export default Title;