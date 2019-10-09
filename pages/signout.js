import React from 'react'
import Link from 'next/link'

import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'
import App from '../components/App'
import LoginBox from '../components/LoginBox'
import withApollo from '../lib/withApollo'
import { ApolloConsumer } from 'react-apollo'
import { writeUserLoggedIn } from '../components/sitedata'
import { ApolloClient } from 'apollo-boost'
import initApollo from '../lib/initApollo'

import Router from 'next/router'
class Signout extends React.Component {
   static async getInitialProps (context) {

    context.apolloClient.resetStore()
   }
  //   // const { loggedInUser } = await checkLoggedIn(context.apolloClient)

  //   // if (loggedInUser.user) {
  //   //   // Already signed in? No need to continue.
  //   //   // Throw them back to the main page
  //   //   redirect(context, '/')
  //   // }
   
  //   return {}
  // }
  componentDidMount () {
    document.cookie = 'token'+'=; Max-Age=-99999999;';  
     writeUserLoggedIn(false)
     Router.replace("/")
     
    }
  
  render () {
    return (
      <App>
        {/* SigninBox handles all login logic. */}

        <div className="page_background content">
        <div className="headerbuffer" />
        <div className="contentbox">
        <div className="createbox">     
       {( (!typeof window === 'undefined') && 
       (<>
       <p> Signing out...</p>
       <ApolloConsumer>
       client.cache.reset().then(() => { redirect({}, '/') })
       </ApolloConsumer> </>) 
       )}
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

export default withApollo(Signout)