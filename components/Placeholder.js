import React from 'react'

export default ({ placeholder }) => (
  <React.Fragment>
  <div className="container">
    <h4>Data from placeholder (saga (Async APIfetch & GraphQL)):</h4>
    {placeholder.data && (
      <pre>
        <code>{JSON.stringify(placeholder.data, null, 2)}</code>
      </pre>
    )}
    {placeholder.error && (
      <p style={{ color: 'red' }}>Error: {placeholder.error.message}</p>
    )}
    </div>
    <style jsx>{`
      aside {
        font-size: 14px;
      }
      .container {
        color: white;
        font-size: 26px;
        width: 60%;
        margin: 0 auto;
      }
    `}</style>
  </React.Fragment>
)
