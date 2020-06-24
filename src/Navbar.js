import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="nav">
        <Menu pointing secondary>
          <Menu.Item
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