import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {

  constructor(){
    super();
    this.state = { 
      activeItem: 'home',
      neonLogo: false
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if (name === 'jason melton') {
      return this.props.history.push('/')
    } else {
      this.props.history.push(`${name}`)
    }
  }

  handleNeonLogo = () => {
    this.setState(prevState => ({
      neonLogo: !prevState.neonLogo
    }))
  }



  render() {
    const { activeItem, neonLogo } = this.state

    return (
      <div className="nav">
        <Menu pointing secondary>
          <Menu.Item onClick={this.handleNeonLogo}>
            <Icon name="lightbulb outline" />
          </Menu.Item>
          <Menu.Item
            className={neonLogo ? "neonLogo" : null}
            name='jason melton'
            active={activeItem === 'jason melton'}
            onClick={this.handleItemClick}
            style={{fontWeight: '900'}}
          />

        <Menu.Menu position='right'>
          <Menu.Item 
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Item 
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item 
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
            <Menu.Item
              name='blog'
              active={activeItem === 'blog'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(Navbar)