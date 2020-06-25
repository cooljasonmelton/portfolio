import React from 'react';
import { Segment, Image, Icon } from 'semantic-ui-react'
import jasonphone from '../images/jasonphone.png'
import './Landing.css'


function Contact() {
  return (
    <Segment className="landing">
      <Segment className="landing-box"> 
        <div className="contact-info">
          <a href="mailto:jason.melton2@gmail.com" className='contact-link'>
            <h1>email<Icon name='mail outline'/></h1>
          </a>
          <a href="https://github.com/cooljasonmelton" className='contact-link'>
            <h1>github<Icon name='github square'/></h1>
          </a>
          <a href="https://www.linkedin.com/in/-jasonmelton/" className='contact-link'>
            <h1>linkedin<Icon name='linkedin square'/></h1>
          </a>
          <a href="https://medium.com/@jasonmelton_" className='contact-link'>
            <h1>blog <Icon name='medium'/></h1>
          </a>    
        </div>
      </Segment>
      <Segment className="landing-box">
        <h1>Contact</h1>
        <Image src={jasonphone} circular />
      </Segment>
    </Segment>
  );
}

export default Contact;