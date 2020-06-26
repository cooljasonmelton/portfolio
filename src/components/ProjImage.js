import React from 'react';
import { Segment, Image } from 'semantic-ui-react'
import './Landing.css'


class ProjImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flipped: false
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            flipped: !prevState.flipped
        }))

    }


    render(){
        const {name, desc, img, link} = this.props.proj
        return (
            <Segment className='proj-image' >
                <Image
                    className='actual-image'
                    href={link}
                    src={img}
                    as='a'
                    size='fluid'
                    target='_blank'
                />
                <div className='actual-info'>
                    <h2>{name}</h2>
                    <h3 className="proj-desc">{desc}</h3>
                    <h3><a href={link}>Visit GitHub</a></h3>
                </div>
            </Segment>
        )
    }
}

export default ProjImage







