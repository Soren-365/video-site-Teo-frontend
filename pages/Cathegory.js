import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer, ApolloProvider  } from 'react-apollo'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { loadData } from '../lib/placeholder/actions'
import cookie from 'cookie'
import App from '../components/App'
import LectureCard from '../components/lecturecard'
import { sitedata } from '../components/sitedata'



import withApollo from '../lib/withApollo'
import createStore from '../lib/store'


import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'
import Link from 'next/link'
import { isCallSignatureDeclaration } from 'typescript'

  //  ctx = undefined
    
  class Index extends React.Component {
    
    static propTypes = {
      ctx: PropTypes.object.isRequired
    }

    static async getInitialProps (context, apolloClient) {
      const { loggedInUser } = await checkLoggedIn(context.apolloClient)
      console.log("In index.js. Loggedin user object is:",loggedInUser)
      console.log("In index.js. context object is:",context)
    
      var name =""
      { (!loggedInUser.isUserLoggedIn) ? name = "You must login to access this page" : name = loggedInUser.isUserLoggedIn.name }
        // If not signed in, send them somewhere more useful
     
    
    if (!context.store.getState().placeholder.data) {
    
    }
  
    if (typeof window === 'undefined') {
      // if server
   //  const faker = require('faker')
     //const name = faker.name.findName()
     
     return  {loggedInUser, message: `${name}` }
   }
   //if client
   return { loggedInUser, message: `${name}`}

    }


    
    constructor(props) {   
      super(props)
      console.log("In Index.js constructor this is props:",props)
      this.state = {
          // videofile_url: null,
          // vidfile: null,
          // token: "eyJhbGciOiJIUzI1NsiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJTWmVfcmFvTSIsImlhdCI6MTU2OTE1MTQwMn0.qT3rI5nsTFQz_VzaQGQVw-qepcZJ4dPIK7JFIauH1bg"
          message: `${props.message}` || "",
          videomute: true,
          medialib: sitedata.settings.media_libs[sitedata.settings.libs_pointer]
         
      }      
      
      //this.playunmute = this.playunmute.bind(this)
      this.handleClick = this.handleClick.bind(this)
  }

 

  componentDidMount () {


  }

//   playunmute() {
//     promovideonode.muted = !promovideonode.muted ; 
//    // promovideonode.play();
// } 

handleClick() {


}

componentDidUpdate () {
    console.log(state.medialib.lecturecard_1.imgUrl1)
}

    signout = apolloClient => () => {
      document.cookie = cookie.serialize('token', '', {
        maxAge: -1 // Expire the cookie immediately
      })
  
      // Force a reload of all the current queries now that the user is
      // logged in, so we don't accidentally leave any state around.
      console.log( apolloClient)
      apolloClient.cache.reset().then(() => {
        // Redirect to a more useful page when signed out
        redirect({}, '/login')
      })
    }
 
    componentWillReceiveProps(nextProps) {
    
    }
    
    render () {
      const { Component, pageProps, apolloClient } = this.props
      
      return (
        <App>
        <ApolloProvider client={apolloClient}>
        <div className="page_background content">
        <div className="headerbuffer" />
        <div className="contentbox">
         {(this.props.loggedInUser.isUserLoggedIn) &&
         (<React.Fragment>
         <div className="leftcontent-collumn">
          <div className="leftsidebox">

       
          <Link prefetch href="/Videoplay"><a><LectureCard medialib={this.state.medialib} dataKey='lecturecard_1'/></a></Link>
                <LectureCard medialib={this.state.medialib} dataKey='lecturecard_2'/>
                <LectureCard medialib={this.state.medialib} dataKey='lecturecard_3'/>
              
            

         
           
            {/* <Page />    */}
            </div>
            </div>

            <div className="rightcontent-collumn">
              <div className="rightsidebox">
      
              </div>
              </div>
                  <div className="socialmediabox">
                  <a><img className="instagram icon" src="/static/instagram.svg" height="24" width="24" ></img></a>
                  <a><img className="play-circle icon" src="/static/play-circle.svg" height="24" width="24" ></img></a>
                  <a><img className="twitter icon" src="/static/twitter.svg" height="24" width="24" ></img></a>
                  <a><img className="facebook icon" src="/static/facebook.svg" height="24" width="24" ></img></a>
                  </div>
              
        </React.Fragment>
        )}
        
        </div>         
        {(!this.props.loggedInUser.isUserLoggedIn) && <p className="youmustlogin">{this.state.message}</p>}
        </div>
        <div className="bottombuffer" />      
        </ApolloProvider>
         {/*
         leftsidebox{           equal margins on left and right side box
           left: calc( ((1440px)/2 - 640px) /2  ); 
           }

            rightsidebox{           equal margins on left and right side box
           left: calc( ((1440px)/2 - 577px) /2  ); 
           }
           */}
        <style jsx>{`

           a {
            outline: 0;
           }
        .contentbox {
          position: relative;
          display: flex;
          width: 1440px;
          margin-left: calc((100% - 1440px)/2);
        }
        
        .leftcontent-collumn {
          position: relative;
          width: calc(1440px/2);
          height: auto;
        }

        .rightcontent-collumn {
          position: relative;
          width: calc(1440px/2);
          height: auto;
        }

        .rightsidebox {
          position: absolute;
          width: 577px;
          height: 800px;
          top: 172px;
          left: calc( ((1440px)/2 - 577px) /2  ); 
         
         }

         .leftsidebox{
           position: absolute;
           width: 640px;
          left: 106px;

         }


        .welcometext {
        position: relative;
        width: 742px;
        height: 86px;
        margin-left: 0px;
        margin-top: 67px;
      
        }
        
        .welcome_prename p{
          font-family: 'Roboto Condensed', sans-serif;
        }
        .welcome_prename{
         
          position: relative;
          width: 742px;
          height: 35.5px;
          left: 0px;
          font-style: normal;
          font-weight: normal;
          font-size: 29px;
          line-height: 34px;
          text-indent: 78px;
        }
        .welcome_name{
          font-family: 'Satisfy', cursive;
        }
        .welcome_postname {
          font-family: 'Roboto Condensed', sans-serif;
          position: relative;
          width: 800.86px;
          height: 34px;
          padding-left: 69px;
          padding-top: 17px;
          font-family: Roboto Condensed;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 28px;
          text-align: center;
        }
              .testtext {
                color: white;
                font-size: 24px;
                padding: 20px;
                padding-bottom: 0px;
                margin: 0 auto;
                position: relative;
                width: 60%;
              }
              .button_signout  {
                margin: 18px auto;
               }
               .button_signin{
                margin: 18px auto;
               }

         .promovideo{
          width: 640px;
          height: 360px;
          
          margin-top: 172px;
          background: #2D2222;
         }      

         .socialmediabox {
           position: absolute;
           display: flex;
           justify-content: space-evenly;
          width: 215px;
          height: 56px;
          left: 319px;
          top: 836px;
          bottom: 70px;
          border: 1px solid #00000040;
         }

         .icon {
           transform: translateY(14px);
         }
         .youmustlogin {
             position: absolute;
             left: 33%;
             top: 40%;
         }
 
              `}</style>
        </App>
      )
    }
  }

  export default connect(createStore)(withApollo(Index))


