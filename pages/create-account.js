import React from 'react'
import Link from 'next/link'
import App from '../components/App'
import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'
import withApollo from '../lib/withApollo'
import SignupBox from '../components/SignupBox'

class CreateAccount extends React.Component {
  // static async getInitialProps ( context, ...props) {
  //   console.log("In create-account.js context getInitialProps",context)
  //   console.log("In create-account.js ...props",props)
   
  //  // const { loggedInUser } = await checkLoggedIn(context.apolloClient)

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
        {/* RegisterBox handles all register logic. */}
        <SignupBox />
        <hr />
        Already have an account?{' '}
        <Link prefetch href='/login'>
          <a>Log in</a>
        </Link>
      </App>
    )
  }
}

export default withApollo(CreateAccount)