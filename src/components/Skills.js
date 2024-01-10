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
                    <p>Proficient in Java programming language with 2 years of experience and also Skilled in Java development, including  specific areas like object-oriented programming, data structures, algorithms</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Mern Stack Developer</h2>
                    <p>I am a skilled MERN stack developer with comprehensive experience in building dynamic web applications. Proficient in utilizing MongoDB for database management, Express.js for server-side application development, React.js for creating interactive user interfaces, and Node.js for backend functionality. I have a proven track record of delivering robust, scalable, and efficient solutions using the MERN stack."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Data Structures</h2>
                    <p>Proficient in implementing and optimizing data structures and algorithms. I have Extensive knowledge and application of various data structures and algorithms in problem-solving and software development</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={UIDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Git/Github</h2>
                    <p>Skilled in using Git for version control, including branching, merging, and resolving conflicts. Proficient in managing repositories and collaborating on GitHub</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>React Js</h2>
                    <p> I bring a comprehensive skill set to the table that encompasses the intricacies of this powerful JavaScript library. With hands-on experience in developing dynamic and responsive user interfaces, I leverage React's component-based architecture to craft seamless, high-performance web applications</p>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Skills