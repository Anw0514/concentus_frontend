import React, { Component } from 'react'
import { Container, Message, Dropdown, Input, Label } from "semantic-ui-react";

class Tidbit extends Component {

    constructor(){
        super()
        this.state = {
          skillList: [],
          linkList: [],
          genreList: [],
          lookingList: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/tidbits")
          .then(resp => resp.json())
          .then(tidbits => {
              const skillList = this.objectifyTidbits(tidbits.filter(tid => tid.group === 'skill'))
              const genreList = this.objectifyTidbits(tidbits.filter(tid => tid.group === 'genre'))
              const lookingList = this.objectifyTidbits(tidbits.filter(tid => tid.group === 'looking for'))
              this.setState({
                  skillList,
                  genreList,
                  lookingList
              })
          });
    }

    objectifyTidbits(tidArr) {
        return tidArr.map(tid => {
            return { key: tid.id, text: tid.value, value: tid.id };
        })
    }

    addEntry = (value, group) => {
        // add entry to the state and post to the backend

        fetch("http://localhost:3000/tidbits", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                value,
                group
            })
        }).then(resp => resp.json())
        .then(tidbit => {
            let name = group + 'List'
            if (group === 'looking for'){
                name = 'lookingList'
            }
            let alt_name = name.substr(0, name.length - 4) + 's'
            if (this.state[name].length !== 0) {
                this.setState(
                  {
                    [name]: [
                      {
                        key: tidbit.value,
                        text: tidbit.value,
                        value: tidbit.id
                      },
                      ...this.state[name]
                    ]
                  },
                  this.props.add(this.props[alt_name].concat([tidbit.id]), alt_name)
                );
            } else {
                this.setState({
                  [name]: [
                    {
                      key: tidbit.value,
                      text: tidbit.value,
                      value: tidbit.id
                    }
                  ]
                }, this.props.add(this.props[alt_name].concat([tidbit.id]), alt_name));
            }
        })

    }

    render() {
        const { skillList, linkList, genreList, lookingList } = this.state
        return (
          <Container className='tidbit container'>
            <label className='tidbit label'>Skills</label>
            <Dropdown
              options={skillList}
              placeholder="Choose or Add Skills"
              search
              selection
              fluid
              clearable
              multiple
              allowAdditions
              value={this.props.skills}
              onAddItem={(e, {value}) => this.addEntry(value, 'skill')}
              onChange={(e, { value }) => this.props.add(value, 'skills')}
              additionLabel='Add Skill: '
            />
            <label className='tidbit label'>Genres</label>
            <Dropdown
              options={genreList}
              placeholder="Choose or Add Genres"
              search
              selection
              fluid
              clearable
              multiple
              allowAdditions
              value={this.props.genres}
              onAddItem={(e, {value}) => this.addEntry(value, 'genre')}
              onChange={(e, { value }) => this.props.add(value, 'genres')}
              additionLabel='Add Genre: '
            />
            <label className='tidbit label'>Discovery</label>
            <Dropdown
              options={lookingList}
              placeholder="Choose or Add Who You're Looking For"
              search
              selection
              fluid
              clearable
              multiple
              allowAdditions
              value={this.props.lookings}
              onAddItem={(e, {value}) => this.addEntry(value, 'looking for')}
              onChange={(e, { value }) => this.props.add(value, 'lookings')}
              additionLabel='Add: '
            />
            <label className='tidbit label'>Links</label>
            <Dropdown
              options={linkList}
              placeholder="Add Links"
              search
              selection
              fluid
              clearable
              multiple
              noResultsMessage={null}
              allowAdditions
              value={this.props.links}
              onAddItem={(e, {value}) => this.addEntry(value, 'link')}
              onChange={(e, { value }) => this.props.add(value, 'links')}
              additionLabel='Add Link: '
            />
          </Container>
        );
    }
}

export default Tidbit