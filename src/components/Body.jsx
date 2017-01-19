// This component contains the body/main contents of the app. This is an example of using the Grid component.
import React from 'react'
import { Button, Container, Grid, Image } from 'semantic-ui-react'
import LeftContent from './LeftContent'

export default class Body extends React.Component {
  render () {
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <LeftContent />
          </Grid.Column>
          <Grid.Column>
            <Container>
              <Image src='./resources/blank_image.png' />
            </Container>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <Button fluid color='blue'>Lorem ipsum</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
