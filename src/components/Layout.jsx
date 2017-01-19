// This component defines a layout for the app and can be comprised on many elements.
// This component is loaded into App.js to be rendered
import React from 'react'
import { Container } from 'semantic-ui-react'
import Heading from './Heading'
import Body from './Body'

export default class Layout extends React.Component {
  render () {
    return (
      <Container>
        <Heading />
        <Body />
      </Container>
    )
  }
}
