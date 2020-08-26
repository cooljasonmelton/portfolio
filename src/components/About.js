import React from 'react';
import { Segment, Image } from 'semantic-ui-react'
import jasonpicstage from '../images/jasonpic.jpg'
import './Landing.css'


function About() {
  return (
    <Segment className="landing">
      <Segment className="landing-box">
        <Image src={jasonpicstage} size='medium' circular />
      </Segment>
      <Segment className="landing-box"> 
        <h1 className="about-title">About</h1>
        <div className="about-text">
          <p>
            With a background in philosophy and comedy, I've noticed software developing has a similar underpinning. Whether analyzing a theorem, writing a joke, or creating an app, it's all about looking at logical consequences, research, and error correction.
          </p>
          <p>
            Coding is a recent upgrade to my life. I watched a friend switch to development and just how happy it made her. She suggested I try the same and I spent a year diligently studying JavaScript between shifts at a regular job. 
          </p>
          <p>
            I immediately loved the creative and analytical nature of it so I took the plunge and fully committed. I entered and completed an intensive bootcamp at Flatiron School, and have now entered the job search confident in my hard-earned skills. 
          </p>  
          <p>
            I have an obsessive personality and enjoy tinkering with something until it's perfect. I love the creative, problem-solving nature of developing. I look forward to putting new stuff into the world.
          </p>
          <p>
            For fun, I enjoy chess and pro-wrestling. Founder of Root Beer Friday. #rootbeerfriday
          </p>
        </div>
      </Segment>
    </Segment>
  );
}

export default About;
