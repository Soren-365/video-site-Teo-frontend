import { Mutation, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import cookie from 'cookie'
import redirect from '../lib/redirect'
import { userSignIn, userSignOut } from '../lib/user/actions'
import { connect } from 'react-redux'
import createStore from '../lib/store'
const SIGNUP_USER = gql`
  mutation create($email: String!, $password: String!,$name: String!) {
    signup(email: $email, password: $password, name: $name) {
    token
    }
  }
`


const RegisterBox = ({ client}) => {
  let name, email, password
  
  const userSignIn = () => {
    this.props.dispatch(userSignIn())
  }
  const userSignOut = () => {
    this.props.dispatch(userSignOut())
  }
  

  return (
    <Mutation
      mutation={SIGNUP_USER}
      onCompleted={ (data) => {
        // Store the token in cookie
        console.log(data.signup.token);
        document.cookie = cookie.serialize('token', data.signup.token, {
          maxAge: 30 * 24 * 60 * 60 // 30 days
        })
        console.log("In LoginBox.js data is:",data)
        console.log("In Loginbod.js document.cookie is:", document.cookie)
        // Force a reload of all the current queries now that the user is
        // logged in
        this.userSignIn
        client.cache.reset().then(() => {
         redirect({}, '/')
        })
      }}
      onError={error => {
        // If you want to send error to external service?
        console.log(error)
      }}
    >
      {(create, { data, error }) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            e.stopPropagation()

            create({
              variables: {
                name: name.value,
                email: email.value,
                password: password.value
              }
            })

            name.value = email.value = password.value = ''
          }}
        >
          {error && <p>Issue occurred while registering :( </p>}
          <input
            name='name'
            placeholder='Name'
            ref={node => {
              name = node
            }}
          />
          <br />
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
          <button>Register</button>

          <style jsx>{`
      
      input {
        border: 1px solid #000000;
        font-size: 20px;
      }
      button {
       
        background: green;
        color: white;
        font-size: 16px;
        width: 80px;
        height: 30px;
        text-align: center;
      }
      
      
      `}</style>
      
        </form>
      )}


    
    </Mutation>
  )
}

export default connect(createStore)(withApollo(RegisterBox))
