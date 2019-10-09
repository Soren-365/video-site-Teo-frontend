import gql from 'graphql-tag'

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          isUserLoggedIn {
            id
            name
          }
        }
      `
    })
    .then(({ data }) => {
     // console.log("in checkedloggedin.js.:  loggedInUser:",data);
      return { loggedInUser: data }
    })
    .catch(() => {
      // Fail gracefully
     // console.log("in checkedloggedin.js.:  loggedInUser:",data);
      return { loggedInUser: {} }
    })
   