// Import React Libraries
import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export default class Heading extends React.Component {
  render () {
    return (
      <Container>
        <Header as='h1'>A Simple Electron-React Example</Header>
      </Container>
    )
  }
}
