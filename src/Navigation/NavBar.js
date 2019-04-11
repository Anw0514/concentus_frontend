import React, { Component } from 'react'
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import { Link, BrowserRouter as Router, Redirect, NavLink } from 'react-router-dom'

class NavBar extends Component {

  render() {
    const { user, leave } = this.props
    return (
      <div>
        <Menu inverted pointing secondary>
          <Menu.Item name="Concentus" active={false}>
            <h1>Concentus</h1>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="discover" active={false}>
              <NavLink to="/discover">
                <Icon name="list ul" size="big" />
              </NavLink>
            </Menu.Item>
            <Dropdown item icon="big user circle" simple>
              <Dropdown.Menu>
                {user.name ? (
                  <Dropdown.Item active={false}>
                    <Icon name="user circle" />
                    Hi, {user.name}!
                  </Dropdown.Item>
                ) : null}
                <Dropdown.Item active={false} onClick={() => {}}>
                  <NavLink to="/mypages">
                    <Icon name="list alternate outline" />
                    My Pages
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item active={false} onClick={() => {}}>
                  <NavLink to="/create">
                    <Icon name="compose" />
                    New Page
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item active={false} onClick={() => {}}>
                  <Icon name="settings" />
                  Settings
                </Dropdown.Item>
                <Dropdown.Item active={false} onClick={() => {}}>
                  <Icon name="paper plane outline" />
                  Messages
                </Dropdown.Item>
                <Dropdown.Item active={false} onClick={() => {}}>
                  <Icon name="calendar check outline" />
                  Gigs
                </Dropdown.Item>
                {user.name ? (
                  <Dropdown.Item active={false} onClick={leave}>
                    <Icon name="log out" />
                    Log Out
                  </Dropdown.Item>
                ) : null}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavBar