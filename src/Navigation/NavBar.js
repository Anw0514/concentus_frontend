import React, { Component } from 'react'
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

class NavBar extends Component {
    render() {
        return (
          <div>
            <Menu inverted pointing secondary>
            <Menu.Item name="Concentus" active={false}><h1>Concentus</h1></Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item name="discover" active={false} onclick={() => {}}><Icon name="list ul" size="big"/></Menu.Item>
                <Dropdown item icon="big user circle" simple >
                  <Dropdown.Menu>
                  <Dropdown.Item active={false} onClick={() => {}}>
                    <Icon name="list alternate outline" />My Pages
                  </Dropdown.Item>
                  <Dropdown.Item active={true} onClick={() => {}}>
                    <Icon name="compose" />New Page
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