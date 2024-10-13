import React from 'react';
import './Intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <div>
      <section id='intro'>
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Eshwar</span><br/>Web Developer</span>
          <p className='introPara'>I am a skilled and passionate web developer with experience in creating<br /> visually appearing and user-friendly websites</p>
          <Link><button  className='btn'><img src={btnImg} alt='hire me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
      </section>
    </div>
  );
}

export default Intro;
