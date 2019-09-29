import { Mutation, withApollo, ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import cookie from 'cookie'
import redirect from '../lib/redirect'

const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password ) {
      token
    }
  }
`

// TODO: Find a better name for component.
const LoginBox = ({ client }) => {
  let email, password

  return (  <ApolloConsumer>
    {client => 
    <Mutation
      mutation={LOG_IN}
      onCompleted={data => {
        // Store the token in cookie
        document.cookie = cookie.serialize('token', data.login.token, {
          maxAge: 30 * 24 * 60 * 60 // 30 days
        })
        console.log("In LoginBox.js data is:",data)
        console.log("In Loginbod.js document.cookie is:", document.cookie)
        // Force a reload of all the current queries now that the user is
        // logged in
        client.cache.reset().then(() => {
          redirect({}, '/')
        })
        console.log(data);
      }}
      onError={error => {
        // If you want to send error to external service?
        console.log(error)
      }}
    >
      {(LoginUser, { data, error }) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            e.stopPropagation()

            LoginUser({
              variables: {
                email: email.value,
                password: password.value
              }
            })

            email.value = password.value = ''
          }}
        >
          {error && <p>No user found with that information.</p>}
          <input
            name='email'
            placeholder='Email'
            ref={node => {
              email = node
            }}
          />
          <br />
          <input
            name='password'
            placeholder='Password'
            ref={node => {
              password = node
            }}
            type='password'
          />
          <br />
          <button>Log in</button>
        </form>
      )}
    </Mutation>
  }
  </ApolloConsumer>
  )
}

export default LoginBox
