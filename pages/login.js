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

        <div className="page_background content">
        <div className="headerbuffer" />
        <div className="contentbox">
        <div className="createbox">     
       
       
        <LoginBox />
        <div className="alreadyhave">
        <hr />
        New User?{' '}
        <Link prefetch href='/create-account'>
          <a>Create account</a>
        </Link>
        </div>
        </div>
        </div> 
        </div>
        <style jsx>{`

        .createbox {
          position: relative;
          width: 400px;
          height: 400px;
          margin: 40px calc((100% - 400px)/2) 0px auto;

        }
        .alreadyhave {
          font-size: 20px;
        }
        a {
          text-decoration: underline;
          text-decoration-color: blue;
        }


        `}</style>

      </App>
    )
  }
}

export default withApollo(Login)