import React, { Component, Fragment } from 'react'
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import { Link as NavLink } from 'react-router-dom'

class NavBar extends Component {

  render() {
    console.log(this.props.user)
    const { user, leave } = this.props
    return (
      <div>
        <Menu inverted pointing secondary>
          <Menu.Item name="Concentus" active={false}>
            <h1>Concentus</h1>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item onClick={() => this.props.goMessage(null)} name="discover" active={false}>
              <NavLink to="/discover">
                <Icon name="list ul" size="big" />
              </NavLink>
            </Menu.Item>
            <Dropdown item icon="big user circle" simple>
              <Dropdown.Menu onClick={() => this.props.removeEdit(null)}>
                {user.name ? (
                  <Fragment>
                    <Dropdown.Item active={false}>
                      <Icon name="user circle" />
                      Hi, {user.name}!
                    </Dropdown.Item>
                    <Dropdown.Item active={false}>
                    <NavLink to='/settings'>
                      <Icon name="settings" />
                      Settings
                    </NavLink>
                    </Dropdown.Item>
                  </Fragment>
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
                  <NavLink to="/messages">
                    <Icon name="paper plane outline" />
                  Messages
                  </NavLink>
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