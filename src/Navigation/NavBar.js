import React, { Component } from 'react'
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import { Link, BrowserRouter as Router, Redirect, NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
          <div>
            <Menu inverted pointing secondary>
            <Menu.Item name="Concentus" active={false}><h1>Concentus</h1></Menu.Item>
              <Menu.Menu position="right">
                  <Menu.Item name="discover" active={false} onclick={() => {}}>
                  <NavLink to='/discover'><Icon name="list ul" size="big"/></NavLink>
                  </Menu.Item>
                <Dropdown item icon="big user circle" simple >
                  <Dropdown.Menu>
                  <Dropdown.Item active={false} onClick={() => {}}>
                    <NavLink to='/mypages'>
                    <Icon name="list alternate outline" />My Pages
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item active={true} onClick={() => {}}>
                      <NavLink to='/create'>
                        <Icon name="compose" />New Page
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item active={false} onClick={() => { }}>
                    <Icon name="settings" />Settings
                  </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Menu>
          </div>
        );
    }
}

export default NavBar