import React from 'react';

// semantic ui
import { Segment, Image } from 'semantic-ui-react'

// styling
import './Landing.css'

// data
import { blogData } from '../data/blogData.js'

const renderBlogs = () => {
  return blogData.map(blog => {
    return(     
      <Image
        className='blog-image'
        src={blog.img}
        as='a'
        size='fluid'
        href={blog.link}
        target='_blank'
      />
    )
  })
}

function Blog() {
  return (
    <div className="whole-container">
    <Segment className="blog-segment">
      <h1>Blog</h1>
      <div className="blog-container">
        {renderBlogs()}
      </div>
    </Segment>
  </div>
  );
}

export default Blog;
