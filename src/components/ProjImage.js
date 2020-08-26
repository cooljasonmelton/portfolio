import React from 'react';
import { Segment, Image, Icon } from 'semantic-ui-react'
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
                    size='large'
                    target='_blank'
                />
                <div className='actual-info'>
                    <h2><a style={{color: "black"}} href={link}><Icon name='github'/></a>{name}</h2>
                    <h3 className="proj-desc">{desc}</h3>
                </div>
            </Segment>
        )
    }
}

export default ProjImage







