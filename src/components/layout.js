import React, { Component, Fragment } from 'react'

import Navigation from './Navigation'
import getFirebase, { FirebaseContext } from './Firebase'
import withAuthentication from './Session/withAuthentication'

class Layout extends Component {
  state = {
    firebase: null,
  }

  componentDidMount() {
    const firebase = getFirebase()
    this.setState({ firebase })
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <AppWithAuthentication {...this.props} />
      </FirebaseContext.Provider>
    )
  }
}

const AppWithAuthentication = withAuthentication(({ children }) => (
  <Fragment>
    <Navigation />
    <hr />
    {children}
  </Fragment>
))

export default Layout
