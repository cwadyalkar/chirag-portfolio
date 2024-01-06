import React from "react";
import "./Intro.css";
import img from "../assets/image.png";
import btnimg from "../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
            <span className="introText">
              I am<span className="introName"> Chirag</span>
              <br />
              Website Designer
            </span>
        
          <p className="introPara">
            I am a Skilled Web Designer with Experience in Creating visually <br />

            Appealing and User friendly Website
          </p>
        <Link>
          <button className="btn">
            <img className="btnImg" src={btnimg} alt="" />
            Hire Me
          </button>
        </Link>
      </div>

      <img src={img} alt="profile" className="bgimg" />
    </section>
  );
};

export default Intro;
