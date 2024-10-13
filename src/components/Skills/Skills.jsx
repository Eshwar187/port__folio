import React from 'react';
import './Skills.css';
import Webdes from '../../assets/website-design.png';
import Webdev from '../../assets/webdev.png';
import frontend from '../../assets/frontend.png';
const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web developer with experience in creating visually appearing and user-friendly <br /> 
        websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS<br />
        and Javascript,as well as frameworks and libraries like React.js , React three fiber , GSAP , three.js, etc.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={Webdev} alt="Web Development" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>Creative web developer specializing in building responsive and user-friendly websites that enhance online experiences.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={frontend} alt="Frontend" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>Innovative frontend developer dedicated to crafting visually stunning and intuitive user interfaces that engage and delight users.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={Webdes} alt="Website design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Passionate website designer focused on creating aesthetically pleasing and functional designs that elevate brand identity and user engagement.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
