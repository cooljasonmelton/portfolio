import React from 'react';
import { Segment, Image, Header } from 'semantic-ui-react'
import jasonpicstage from '../images/jasonpicstage.png'
import './Landing.css'


function Landing() {
  return (
    <Segment className="landing">
      <Segment className="landing-box"> 
        <h1>What's up, I'm Jason Melton.</h1>
        <h3>I'm a software developer from Chicago, IL. I can make websites. Want me to make you one?</h3>    
      </Segment>
      <Segment className="landing-box">
        <Image src={jasonpicstage} size='medium' circular />
      </Segment>
    </Segment>
  );
}

export default Landing;
