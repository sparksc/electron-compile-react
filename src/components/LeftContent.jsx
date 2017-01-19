// This component contains contents for the Body Component to render.
import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export default class Body extends React.Component {
  render () {
    return (
      <Container fluid>
        <Header as='h3' color='teal'>Hello, world!</Header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique risus molestie, placerat odio quis, ullamcorper dui. Duis pulvinar euismod dignissim. Curabitur nec dui convallis, dapibus nisl eget, aliquet arcu. Nunc tincidunt, dolor quis blandit sodales, felis mauris commodo metus, vitae aliquam ante urna nec sapien. Vestibulum dictum luctus eros auctor porttitor. Nulla vulputate sit amet enim et finibus. Nulla sem turpis, malesuada nec nunc sit amet, rutrum scelerisque odio. Nam egestas purus egestas est tincidunt finibus. Donec porta ac urna vitae fringilla. Mauris sagittis feugiat blandit. Vivamus purus neque, laoreet non dolor id, rhoncus vestibulum nunc. Cras felis arcu, hendrerit nec mi at, sollicitudin maximus nibh. Aliquam ac velit et lectus venenatis aliquet. Sed ullamcorper eleifend sem, in ullamcorper nibh dignissim molestie. Donec quis varius elit, nec molestie velit. Cras ornare eget erat eget hendrerit.
        </p>
      </Container>
    )
  }
}
