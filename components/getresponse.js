import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';

const GET_WORLD = gql`
query hello($name: String!) {
    hello(name: $name)   
  }
`;


// const get_world = {
// options: { variables: { name: "Benjamin" }
// }}}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
// export default graphql(allPosts, {
// options: {
//   variables: get_world
// },


export default function getresponse( { name } ) {
    const { loading, error, data } = useQuery(GET_WORLD, { variables: { name } });
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <select >
       
          <option  value={data}>
            {data}
          </option>
      
      </select>
    );
  }