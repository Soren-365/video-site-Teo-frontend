import React, { Component } from 'react';
import App from '../components/App'

import CreateLink from '../components/CreateLink'
import withApollo from '../lib/withApollo'
import withReduxSaga from 'next-redux-saga'


class createLink extends Component {
    
    render() {
    return (
      <App>
         
        <CreateLink />
     
      </App>
    )
  }
}



export default withReduxSaga(withApollo(createLink))