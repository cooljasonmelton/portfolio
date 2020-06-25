import React from 'react';
import { Segment, Image, Icon } from 'semantic-ui-react'
import flatnote from '../images/projects-images/flatnote.png'
import paperclips from '../images/projects-images/paperclips.png'
import thisorthat from '../images/projects-images/thisorthat.png'
import wrestler from '../images/projects-images/wrestler.png'
import portfolio from '../images/projects-images/portfolio.png'

import './Landing.css'

function Projects() {
  return (
    
    <Segment className="proj-segment">
      <h1>Projects</h1>
      <div className="proj-container">
        <Segment className='proj-image'>
          <Image
            className='actual-image'
            src={paperclips}
            as='a'
            size='fluid'
            href='https://github.com/cooljasonmelton/paperclips-front-end'
            target='_blank'
          />
        </Segment>
        <Segment className='proj-image'>
          <Image
            className='actual-image'
            src={flatnote}
            as='a'
            size='fluid'
            href='https://github.com/cooljasonmelton/flat-note-front-end'
            target='_blank'
            />
        </Segment>
        <Segment className='proj-image'>
          <Image
            className='actual-image'
            src={thisorthat}
            as='a'
            size='fluid'
            href='https://github.com/deber116/deber116-voting-app'
            target='_blank'
            />
        </Segment>
        <Segment className='proj-image'>
          <Image
            className='actual-image'
            src={wrestler}
            as='a'
            size='fluid'
            href='https://github.com/cooljasonmelton/mod-2-project-thats-my-favorite-wrestler'
            target='_blank'
          />
        </Segment>
        <Segment className='proj-image'>
          <Image
            className='actual-image'
            src={portfolio}
            as='a'
            size='fluid'
            href='https://github.com/cooljasonmelton/portfolio'
            target='_blank'
          />
        </Segment>
      </div>
    </Segment>
  );
}

export default Projects;
