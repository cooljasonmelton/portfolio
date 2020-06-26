import React from 'react';
import { Segment, Image, Icon } from 'semantic-ui-react'
import blog1 from '../images/blog-images/blog1.png'
import blog2 from '../images/blog-images/blog2.png'
import blog3 from '../images/blog-images/blog3.png'
import './Landing.css'

const blogArr = [
  {
    img: blog3, 
    link: "https://medium.com/@jasonmelton_/using-chart-js-to-create-tug-o-war-like-graphs-cb18324ec1a"
  },
  {
    img: blog2, 
    link: "https://medium.com/@jasonmelton_/i-figured-out-a-way-to-make-ruby-command-line-flip-books-and-i-did-this-by-learning-from-everyone-afe085635ff2"
  },
  {
    img: blog1, 
    link: "https://medium.com/@jasonmelton_/using-rubys-succ-method-to-get-around-api-restrictions-1cdb47829d62"
  },
]

const renderBlogs = () => {
  return blogArr.map(blog => {
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
      <h1>Blog </h1>
      <div className="blog-container">
        {renderBlogs()}
      </div>
    </Segment>
  </div>
  );
}

export default Blog;
