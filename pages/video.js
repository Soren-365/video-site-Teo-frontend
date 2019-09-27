import React from 'react'
import { ApolloConsumer, ApolloProvider } from 'react-apollo'
import App from '../components/App'
// import VSubmit from '../components/VideoSubmit'
// import VPostList from '../components/VideoPostList'
import withApollo from '../lib/withApollo'
import cookie from 'cookie'
//  import Getresponse from '../components/getresponse'
import checkLoggedIn from '../lib/checkLoggedIn'
import Link from 'next/link'
import redirect from '../lib/redirect'

// const get_world = {
// options: { variables: { name: "Benjamin" }
// }}}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
// export default graphql(allPosts, {
// options: {
//   variables: get_world
// },

//import Plyr from 'plyr'
//import Mediaelement from 'mediaelement'
//import Afterglow from '../node_modules/afterglowplayer/dist/afterglow.min.js'

class Index extends React.Component {

    static async getInitialProps(context, apolloClient) {
       
        var { loggedInUser  } = await checkLoggedIn(context.apolloClient)
        console.log("In index.js. Loggedin user object is:",loggedInUser)
        console.log("In index.js. context object is:",context)
        
        var name =""
      { (!loggedInUser.isUserLoggedIn) ? name = "Stranger" : name = loggedInUser.isUserLoggedIn.name }
      
        if (typeof window === 'undefined') {
            // if server
            //  const faker = require('faker')
            //const name = faker.name.findName()
            //const name = "Buddy Holly"
           
            return {loggedInUser, message: `Hi ${name}, (This page was rendered from the server)` }
        }
        
        return {loggedInUser, message: `Hi ${name} (This page was rendered on the client)` }
    }

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            videofile_url: null,
            vidfile: null,
            token: "eyJhbGciOiJIUzI1NsiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJTWmVfcmFvTSIsImlhdCI6MTU2OTE1MTQwMn0.qT3rI5nsTFQz_VzaQGQVw-qepcZJ4dPIK7JFIauH1bg",
            message: props.message,
            vid_id: {}, 
            vid_link: "http://localhost:4013/video/video.mp4"
        }
   
    }
         

    componentDidMount() {
        // const player = new Afterglow('#player');
        try {
            //    fetch('http://localhost:4013/video/y2mate.com - beautiful_nature_around_the_world_6lt2JfJdGSY_1080p.mp4', {
            //     credentials: 'same-origin', // <-- includes cookies in the request
            //     headers: {
            //       'CSRF-Token': this.state.token // <-- is the csrf token as a header
            //     },
            //     method: 'GET'
            //   }).then(response = () =>  console.log("promise returned fullfilled", response))}
            //   // this.setState({ vidfile: response})
            const nodeid = document.getElementById('id')
           
            this.setState({vid_id: nodeid, vid_link: "http://localhost:4013/video/video.mp4"})

          
        }
        catch {
            Error("something went wrong in fetch video")
        }
        // }
        
        
    }
   
    

    componentWillUpdate() {
        var vidnodeupdated = this.state.vid_id
        var vidlink = this.state.vid_link
        vidnodeupdated.src = `${vidlink}`
    }
    
    signout = apolloClient => () => {
        document.cookie = cookie.serialize('token', '', {
            maxAge: -1 // Expire the cookie immediately
        })

        // Force a reload of all the current queries now that the user is
        // logged in, so we don't accidentally leave any state around.
        console.log(apolloClient)
        apolloClient.cache.reset().then(() => {
            // Redirect to a more useful page when signed out
            redirect({}, '/login')
        })
    }

    render() {

        // this.Getresponse = this.Getresponse.bind(this)
        const { Component, pageProps, apolloClient, loggedInUser } = this.props
        console.log("loggedInUser:",loggedInUser)
        return (
            // (this.state.videofile_url && 'static/y2mate.com - beautiful_nature_around_the_world_6lt2JfJdGSY_240p.mp4')

            <App>

                <ApolloProvider client={apolloClient}>
                    <div>
                        <div className="testtext">{this.state.message} </div>
               
                               </div>
                    
                     {(loggedInUser.isUserLoggedIn) &&
                        <React.Fragment>
                        <button className="button_signout" onClick={this.signout(apolloClient)}>Sign out</button>
                        <div className="videocontainer">
                        <video id="id" width="640" height="280" type='video/mp4' controls controlsList="nodownload" > </video>
                        {console.log("src video_url", this.state.videofile_url)}
                        {console.log("src vidfile", this.state.vidfile)}
                        </div>
                       
                        </React.Fragment>
                    } 
                    {!loggedInUser.isUserLoggedIn &&
                        <Link prefetch href='/create-account'><button>
                        Log In or Create account</button>
                        </Link> 
                    } 

                    <style jsx>{`
                        
                            </div>
                        :root {
                        //--videoplayer_width: 700px;

                        }

                        .videocontainer {
                            margin: 50px calc( (100% - 640px)/2) 0px calc( (100% - 640px)/2);
                            height: 500px;
                        }

                        #video {
                            pointer-events: none;
                        }
                       
                   
                        .testtext {
                color: white;
                font-size: 30px;
                padding: 20px;
                padding-bottom: 0px;
                margin: 0 auto;
                position: relative;
                width: 60%;
              }
              button {
                margin: 18px auto;
                position: relative;
              }
                        
                        `}</style>

                </ApolloProvider>
            </App>

        )
    }

}

export default withApollo(Index)
