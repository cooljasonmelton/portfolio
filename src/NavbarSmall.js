import React from 'react'
import { Dropdown, Menu, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'



class NavbarSmall extends React.Component{

  handleClick = (e, {name}) => {
    if (name === 'jason melton') {
      return this.props.history.push('/')
    } else {
      this.props.history.push(`${name}`)
    }

  }
  render(){
    return (
      <div className="nav-small">
        <Menu>
          <Menu.Item
            style={{fontWeight: '900'}}
            onClick={this.handleClick}
            name='jason melton'
          >
            Jason Melton
          </Menu.Item>
          <Dropdown item text='Menu'>
            <Dropdown.Menu >
              <Dropdown.Item onClick={this.handleClick} name='projects' >Projects</Dropdown.Item>
              <Dropdown.Item onClick={this.handleClick} name='about'>About</Dropdown.Item>
              <Dropdown.Item onClick={this.handleClick} name='contact'>Contact</Dropdown.Item>
              <Dropdown.Item onClick={this.handleClick} name='blog'>Blog</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
    </div>
    )
  }  
}



export default withRouter(NavbarSmall)