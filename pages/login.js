import React from 'react'
import Link from 'next/link'

import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'
import App from '../components/App'
import LoginBox from '../components/LoginBox'
import withApollo from '../lib/withApollo'

class Login extends React.Component {
  // static async getInitialProps (context) {
  //   // const { loggedInUser } = await checkLoggedIn(context.apolloClient)

  //   // if (loggedInUser.user) {
  //   //   // Already signed in? No need to continue.
  //   //   // Throw them back to the main page
  //   //   redirect(context, '/')
  //   // }
   
  //   return {}
  // }

  render () {
    return (
      <App>
        {/* SigninBox handles all login logic. */}
        <LoginBox />
        <hr />
        New User?{' '}
        <Link prefetch href='/create-account'>
          <a>Create account</a>
        </Link>
      </App>
    )
  }
}

export default withApollo(Login)