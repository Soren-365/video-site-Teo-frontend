import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import initStore from '../lib/store'

class MyApp extends App {


  render () {
    const { Component, pageProps, store } = this.props
    return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    )
  }
}

export default withRedux(initStore)(MyApp)
