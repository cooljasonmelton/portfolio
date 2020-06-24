import React from 'react'
import { Dropdown, Menu, Segment } from 'semantic-ui-react'

const NavbarSmall = () => (
  <div className="nav-small">
      <Menu>
        <Menu.Item>
          Jason Melton
        </Menu.Item>
        <Dropdown item text='Menu' position='right'>
          <Dropdown.Menu >
            <Dropdown.Item>Projects</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
            <Dropdown.Item>Blog</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
  </div>
)

export default NavbarSmall