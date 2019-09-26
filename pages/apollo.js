import App from '../components/App'

import Submit from '../components/Submit'
import PostList from '../components/PostList'
import withApollo from '../lib/withApollo'

export default withApollo(() => (
  <App>
  

    <Submit />
    <PostList />

  </App>
))
