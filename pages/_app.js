import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

//import { initStore } from '../lib/store'
import createStore from '../lib/store'
import Layout from '../components/Layout'

class MyApp extends App {
 


  render () {
    const { Component, pageProps, store } = this.props
    return (
     
        <Provider store={store}>
       
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </Provider>
        
    
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
