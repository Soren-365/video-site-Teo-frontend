import React from 'react'
import cookie from 'cookie'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import initApollo from './initApollo'

function parseCookies(req, options = {}) {
  var cookiee = cookie.parse(req ? req.headers.cookie || '' : document.cookie, options)
  console.log("in withApollo.js parseCookies(), the parsed cookie is:",cookiee)
  return cookiee
}

export default App => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`
    static propTypes = {
      apolloState: PropTypes.object.isRequired
    }

    static async getInitialProps(ctx) {
     
      const {
        Component,
        router
      } = ctx
     
      const {req, res} = ctx


      console.log("In withApollo.js getInitialprops. context is:", ctx)
      const apollo = initApollo(
        {},
        {
          getToken: () => parseCookies(req).token
        }
      )
      console.log("Find: ---getToken: token--- here:", apollo)
      //console.log("In getInitialProps. Context propobject is:",ctx)
      //console.log("In getInitialProps. ApolloClient from InitApollo is:",apollo)
     ctx.apolloClient = apollo
     
     //console.log("In withApollo.js getInitialprops.  apolloclient is:", apollo)
     //console.log("In withApollo.js getInitialprops.  context is:", ctx)

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {}
      }

      if (typeof window === 'undefined') {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          await getDataFromTree(
           
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
       
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract()
      //console.log("In withApollo.js getInitialpros() apollo.cache.extract() is:", apolloState)

      return {
        ...appProps,
        apolloState
      }
    }

    constructor(props) {
      super(props)
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      //console.log("In withApollo.js Constructor. props is:", props)
   
      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => {
          return parseCookies().token
        }
       
      })
      //console.log("In withApollo.js Constructor.  apolloclient is:", this.apolloClient)
     
    }

    render() {
      // console.log("In withApollo.js render. this.props is:", {...this.props})
      // console.log("In withApollo.js render. apolloclient is:", this.apolloClient)
      return  (
        <ApolloProvider client={this.apolloClient}>
        <App {...this.props} apolloClient={this.apolloClient} />
        </ApolloProvider>
      )
    }
  }
}
