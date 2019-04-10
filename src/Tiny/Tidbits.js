import React, { Component } from 'react'
import { Container, Message, Dropdown, Input, Label } from "semantic-ui-react";

class Tidbit extends Component {

    constructor(){
        super()
        this.state = {
          skillList: [],
          linkList: [],
          genreList: [],
          lookingList: [],
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
            return { key: tid.value, text: tid.value, value: tid.id };
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
            if (this.state[group + 'List'].length !== 0) {
                this.setState({
                    [group + 'List']: [{ key: tidbit.value, text: tidbit.value, value: tidbit.id }, ...this.state[group + 'List']]
                })
            } else {
                this.setState({
                  [group + "List"]: [
                    {
                      key: tidbit.value,
                      text: tidbit.value,
                      value: tidbit.id
                    }
                  ]
                });
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
              onAddItem={(e, {value}) => this.addEntry(value, 'skill')}
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
              onAddItem={(e, {value}) => this.addEntry(value, 'genre')}
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
              onAddItem={(e, {value}) => this.addEntry(value, 'looking for')}
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
              onAddItem={(e, {value}) => this.addEntry(value, 'link')}
              additionLabel='Add Link: '
            />
          </Container>
        );
    }
}

export default Tidbit