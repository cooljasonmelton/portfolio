import React from 'react';
import ProjImage from './ProjImage'
import { Segment, Image, Icon } from 'semantic-ui-react'
import flatnote from '../images/projects-images/flatnote.png'
import paperclips from '../images/projects-images/paperclips.png'
import thisorthat from '../images/projects-images/thisorthat.png'
import wrestler from '../images/projects-images/wrestler.png'
import portfolio from '../images/projects-images/portfolio.png'
import './Landing.css'

const projHash = [
  {
    name: "Paperclips", 
    desc: "A React.js / Ruby on Rails journaling application that allows users to track word counts, writing analytics, and awards cute animal pics and videos for hitting goals.",
    img: paperclips,
    link: "https://github.com/cooljasonmelton/paperclips-front-end"
  },
  {
    name: "FlatNote", 
    desc: "A React.js note-taking application that allows users to create, read, update, and destroy notes.",
    img: flatnote,
    link: "https://github.com/cooljasonmelton/flat-note-front-end"
  },
  {
    name: "This Or That", 
    desc: "A Javascript polling application that allows users to create two-option polls and vote on all user created polls.",
    img: thisorthat,
    link: "https://github.com/deber116/deber116-voting-app"
  },
  {
    name: "That's My Favorite Wrestler", 
    desc: "A Ruby on Rails social media application for celebrating pro-wrestling, allowing users to rate and comment on their favorite wrestlers and moves.",
    img: wrestler,
    link: "https://github.com/cooljasonmelton/mod-2-project-thats-my-favorite-wrestler"
  },
  {
    name: "Jason Melton's Portfolio Site", 
    desc: "A simple React.js portfolio site for software developer, Jason Melton.",
    img: portfolio,
    link: "https://github.com/cooljasonmelton/portfolio"
  },
]


const renderProjs = () => {
  return projHash.map(proj => {
    return (
      <ProjImage proj={proj}/>
    )
  
  }) 
}

const Projects = () => {
  return (
    <Segment className="proj-segment">
      <h1>Projects</h1>
      <div className="proj-container">
        {renderProjs()}
      </div>
    </Segment>
  );
}

export default Projects;
