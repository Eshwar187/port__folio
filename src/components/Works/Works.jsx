import React from 'react';
import './Works.css';
import portfolio from '../../assets/1.png';
import tic_tac_toe from '../../assets/5.png';
import stopwatch from '../../assets/4.png';
import portfolio2 from '../../assets/7.png';
import docsmini from '../../assets/3.png';
import todolist from '../../assets/2.png';
const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>I specialize in creating visually appealing and user-friendly interfaces that elevate the overall user experience. My expertise includes <br /> utilizing modern web technologies to develop responsive and accessible web applications, while also collaborating closely<br />  with designers and backend developers to ensure seamless functionality and optimal performance across all devices.</span>
      <div className="worksImgs">
        <img src={todolist} alt="todolist" className="worksImg" />
        <img src={docsmini} alt="docs" className="worksImg" />
        <img src={stopwatch} alt="stopwatch" className="worksImg" />
        <img src={tic_tac_toe} alt="tic tac toe" className="worksImg" />
        <img src={portfolio} alt="portfolio" className="worksImg" />
        <img src={portfolio2} alt="portfolio" className="worksImg" />
      </div>
      <button className="worksbtn">See More</button>
    </section>
  );
}

export default Works;
