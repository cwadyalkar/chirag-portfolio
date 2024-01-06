import React from 'react'
import './Skills.css'
import UIDesign from '../assets/ui-design.png'
import WebDesign from '../assets/website-design.png'
import AppDesign from '../assets/app-design.png'


const Skills = () => {
  return (
    <section id="skills">
       <span className="skillTittle">
        What I Do
       </span>
       <span className="skillDescription">I am a skilled and passionate web designer with experience in HTML, CSS, Javascript, ReactJS, NodeJS, ExpressJS,MongoDB And a better Knowledge About Data Structures and Algorithm</span>
       <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Java</h2>
                    <p>THis is the demo text, you can write your content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Mern Stack Developer</h2>
                    <p>This demon text can be changed while making the production ready site</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Data Structures</h2>
                    <p>you can write text related to Mobile App Development</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={UIDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Git/Github</h2>
                    <p>you can write text related to Mobile App Development</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>React Js</h2>
                    <p>you can write text related to Mobile App Development</p>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Skills