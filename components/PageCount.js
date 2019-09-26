/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { countIncrease, countDecrease } from '../lib/count/actions'

class PageCount extends Component {
  increase = () => {
    this.props.dispatch(countIncrease())
  }
  decrease = () => {
    this.props.dispatch(countDecrease())
  }

  render() {
    const { count } = this.props
    return (
      <div className="container">
   
        <h1>
          PageCount: <span>{count}</span>
        </h1>
        <button onClick={this.increase}>Increase Count (+1)</button>
        <button onClick={this.decrease}>Decrease Count (-1)</button>
        <style jsx>{`
          .container {
           color: white;
            font-size: 26px;
            
            width: 60%;
           
          position: relative;
          width: 400px;
          left: calc(50vw - 205px );
          padding:  15px 5px;
           text-align: center;
          }
          button {
            position: relative;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => ({ count })
export default connect(mapStateToProps)(PageCount)
