import React,{useRef} from 'react'
import './Contact.css';
import Prodigy from '../../assets/Prodigy.png';
import Twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook-icon.png';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t3u4knm', 'template_otm16ql', form.current,'8nL6K7t2IQq1JHbvQ',)
          .then((result) => {
              console.log('result.text');
            //   e.target.reset();
              alert("Email Sent!");
            },(error) => {
              console.log('FAILED...', error.text);
            });
    };
  return (
    <section id='contactPage'>
        <div id="client">
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className="contactPageDesc">
                I have had the opportunity with a diverse group of companies.
                Some of the notable<br />companies i have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Prodigy} alt="Prodigy" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to dicuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea className='msg' name='message' row="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitbtn">Submit</button>
                <div className="links">
                    <img src={Twitter} alt="twitter" className="link" />
                    <img src={facebook} alt="facebook" className="link" />
                    <img src={Github} alt="github" className="link" />
                    <img src={Linkedin} alt="linkedin" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact

