import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer, ApolloProvider  } from 'react-apollo'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { startClock } from '../lib/clock/actions'
import { countIncrease } from '../lib/count/actions'
import { loadData } from '../lib/placeholder/actions'
import cookie from 'cookie'
import App from '../components/App'

import Page from '../components/Page'
import Submit from '../components/Submit'

import LinkList from '../components/LinkList'
import withApollo from '../lib/withApollo'

import createStore from '../lib/store'
import CreateLink from '../components/CreateLink'
import PostList from '../components/PostList'

import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'
import Link from 'next/link'

  //  ctx = undefined
    
  class Index extends React.Component {
    
    static propTypes = {
      ctx: PropTypes.object.isRequired
    }

    static async getInitialProps (context, apolloClient) {
      const { loggedInUser } = await checkLoggedIn(context.apolloClient)
      console.log("In index.js. Loggedin user object is:",loggedInUser)
      console.log("In index.js. context object is:",context)
    
      var name =""
      { (!loggedInUser.isUserLoggedIn) ? name = "Stranger" : name = loggedInUser.isUserLoggedIn.name }
        // If not signed in, send them somewhere more useful
     
      context.store.dispatch(countIncrease())
    if (!context.store.getState().placeholder.data) {
      context.store.dispatch(loadData())
    }
  
    if (typeof window === 'undefined') {
      // if server
   //  const faker = require('faker')
     //const name = faker.name.findName()
     
     return  {loggedInUser, message: `Hi ${name}, (This page was rendered from the server)` }
   }
   //if client
   return { loggedInUser, message: `Hi ${name} (This page was rendered on the client)` }

    }


    
    constructor(props) {   
      super(props)
      console.log("In Index.js constructor this is props:",props)
      this.state = {
          // videofile_url: null,
          // vidfile: null,
          // token: "eyJhbGciOiJIUzI1NsiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJTWmVfcmFvTSIsImlhdCI6MTU2OTE1MTQwMn0.qT3rI5nsTFQz_VzaQGQVw-qepcZJ4dPIK7JFIauH1bg"
          message: props.message || "User is not found",
         
      }      
  }

  componentDidMount () {

   this.props.dispatch(startClock())
  }

  

    signout = apolloClient => () => {
      document.cookie = cookie.serialize('token', '', {
        maxAge: -1 // Expire the cookie immediately
      })
  
      // Force a reload of all the current queries now that the user is
      // logged in, so we don't accidentally leave any state around.
      console.log( apolloClient)
      apolloClient.cache.reset().then(() => {
        // Redirect to a more useful page when signed out
        redirect({}, '/login')
      })
    }
  
    render () {
      const { Component, pageProps, apolloClient } = this.props
      return (
        <App>

        <ApolloProvider client={apolloClient}>
            <div className="testtext">
            <div >{this.state.message} </div>
            </div>         
            {(this.props.loggedInUser.isUserLoggedIn) &&
               <button className="button_signout" onClick={this.signout(apolloClient)}>Sign out</button> } 

                    {!this.props.loggedInUser.isUserLoggedIn &&
                        <Link prefetch href='/create-account'><button className="button_signin">
                        Log In or Create account</button>
                        </Link>   }
                   
            <Page />            
        </ApolloProvider>
        <style jsx>{`
              .testtext {
                color: white;
                font-size: 24px;
                padding: 20px;
                padding-bottom: 0px;
                margin: 0 auto;
                position: relative;
                width: 60%;
              }
              .button_signout  {
                margin: 18px auto;
               }
               .button_signin{
                margin: 18px auto;
               }
               
              `}</style>
        </App>
      )
    }
  }

  export default connect(createStore)(withApollo(Index))


