import React from 'react';
import { Segment, Image, Icon } from 'semantic-ui-react'
import blog1 from '../images/blog-images/blog1.png'
import blog2 from '../images/blog-images/blog2.png'
import blog3 from '../images/blog-images/blog3.png'
import './Landing.css'

function Blog() {
  return (
    
    <Segment className="blog-segment">
        <a href="https://medium.com/@jasonmelton_" className='blog-link'>
          <h1>Blog <Icon name='medium'/> </h1>
        </a>    
      

    <div className="blog-container">
      <Image
        className='blog-image'
        src={blog3}
        as='a'
        size='fluid'
        href='https://medium.com/@jasonmelton_/using-chart-js-to-create-tug-o-war-like-graphs-cb18324ec1a'
        target='_blank'
        />
      <Image
        className='blog-image'
        src={blog2}
        as='a'
        size='fluid'
        href='https://medium.com/@jasonmelton_/i-figured-out-a-way-to-make-ruby-command-line-flip-books-and-i-did-this-by-learning-from-everyone-afe085635ff2'
        target='_blank'
        />
      <Image
        className='blog-image'
        src={blog1}
        as='a'
        size='fluid'
        href='https://medium.com/@jasonmelton_/using-rubys-succ-method-to-get-around-api-restrictions-1cdb47829d62'
        target='_blank'
        />
      </div>
    </Segment>
  );
}

export default Blog;
