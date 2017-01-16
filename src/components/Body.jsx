// This component contains the body/main contents of the app. An example of Bootstrap Jumbotron.
import React from 'react'

export default class Body extends React.Component {
  render () {
    return (
      <div>
        <div className="jumbotron">
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
      </div>
    )
  }
}
