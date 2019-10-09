import React from 'react'

import { ApolloProvider  } from 'react-apollo'
import { connect } from 'react-redux'

import { startClock } from '../lib/clock/actions'
//import { countIncrease } from '../lib/count/actions'
//import { loadData } from '../lib/placeholder/actions'
import cookie from 'cookie'
import App from '../components/App'
import CathegoryCard from '../components/cathegorycard'
import { writeUserLoggedIn, sitedata } from '../components/sitedata'

import withApollo from '../lib/withApollo'
import createStore from '../lib/store'
import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'
import Link from 'next/link'
import Header from '../components/Header'

// import PropTypes from 'prop-types'
// import withRedux from 'next-redux-wrapper'
// import LinkList from '../components/LinkList'

// import Page from '../components/Page'
// import Submit from '../components/Submit'
// import CreateLink from '../components/CreateLink'
// import PostList from '../components/PostList'

  //  ctx = undefined
    
  class Index extends React.Component {
    
    // static propTypes = {
    //   ctx: PropTypes.object.isRequired
    // }

    static async getInitialProps (context, apolloClient) {
      const { loggedInUser } = await checkLoggedIn(context.apolloClient)
      console.log("In index.js. Loggedin user object is:",loggedInUser)
      console.log("In index.js. context object is:",context)
    
      var name =""
      { (!loggedInUser.isUserLoggedIn) ? name = "" : name = loggedInUser.isUserLoggedIn.name }
        // If not signed in, send them somewhere more useful
       
     
    //   context.store.dispatch(countIncrease())
    // if (!context.store.getState().placeholder.data) {
    //   context.store.dispatch(loadData())
    // }
  
    if (typeof window === 'undefined') {
      // if server
   //  const faker = require('faker')
     //const name = faker.name.findName()
    
     return  {loggedInUser, message: `${name}` }
   }
   //if client
   return { loggedInUser, message: `${name}` }

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
          videopause: false,
          videopausebutton: true,
          medialib: sitedata.settings.media_libs[sitedata.settings.libs_pointer],
          loggedinuser: props.loggedInUser.isUserLoggedIn,
         
      }      
      
      //this.playunmute = this.playunmute.bind(this)
      this.handleClickMute = this.handleClickMute.bind(this)
      this.handleClickPlay = this.handleClickPlay.bind(this)
  }

 

  componentDidMount () {
  // this.props.dispatch(startClock())
   const promovideonode = document.getElementById('promovideo')
   promovideonode.autoplay = true;
   promovideonode.muted = this.state.videomute; 
  }

//   playunmute() {
//     promovideonode.muted = !promovideonode.muted ; 
//    // promovideonode.play();
// } 

handleClickMute() {
 this.setState((state, props) => ({videomute: !state.videomute}))
}
handleClickPlay() {
  this.setState((state, props) => ({videopause: true, videopausebutton: !state.videopausebutton}))
 }

 
componentDidUpdate () {
  const promovideonode = document.getElementById('promovideo')
  promovideonode.muted = this.state.videomute; 
  if (this.state.videopause && !this.state.videopausebutton) {
    promovideonode.pause()
    this.setState((state, props) => ({videopause: false}))
  }; 
  if (this.state.videopause && this.state.videopausebutton) {
    promovideonode.play()
    this.setState((state, props) => ({videopause: false}))
  }; 
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
      const { Component, pageProps, apolloClient, user } = this.props
      return (
        <App>
        <ApolloProvider client={apolloClient}>
        <Header loggedIn={this.state.loggedinuser}/>
        <div className="page_background content">
        <div className="headerbuffer" />
        <div className="contentbox">

        <div className="leftcontent-collumn">
          <div className="leftsidebox">

            <div className="welcometext">
            <div  className="welcome_prename">
            <p>Bine ai venit<span className="welcome_name"> {this.state.message}</span></p>
            <p className="welcome_postname">Learn about spirituality in daily life with the subjects of:</p>
            </div></div>

            {/* {(this.props.loggedInUser.isUserLoggedIn) &&
               <button className="button_signout" onClick={this.signout(apolloClient)}>Sign out</button> } 
                    {!this.props.loggedInUser.isUserLoggedIn &&
                        <Link prefetch href='/create-account'><button className="button_signin"></button>
                        </Link>   } */}
                                
            {/* <button onClick={this.handleClick}>Mute/Unmute</button> */}
            <div className="promovideo-container">
            <video className="promovideo" id="promovideo" width="640" height="360" >          
            <source src="/static/testvideo.1.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video> 
            <div className="videocontrols">
            <button onClick={this.handleClickMute} ><img className="mute vicon" src={this.state.videomute ? "/static/volume-1.svg" : "/static/volume-x.svg"} height="24" width="24" ></img></button>
            <button onClick={this.handleClickPlay} ><img className="play vicon" src={this.state.videopausebutton ? "/static/pause.svg" : "/static/play.svg"} height="24" width="24" ></img></button>
            
            </div>
            </div>
         
           
            {/* <Page />    */}
            </div>
            </div>
            <div className="rightcontent-collumn">
              <div className="rightsidebox">
               <Link prefetch href="/Cathegory"><a><CathegoryCard medialib={this.state.medialib} dataKey='cathegorycard_1'/></a></Link>
                <CathegoryCard medialib={this.state.medialib} dataKey='cathegorycard_2'/>
                <CathegoryCard medialib={this.state.medialib} dataKey='cathegorycard_3'/>
                <CathegoryCard medialib={this.state.medialib} dataKey='cathegorycard_4'/>
              </div>
              </div>
                  <div className="socialmediabox">
                  <a><img className="instagram icon" src="/static/instagram.svg" height="24" width="24" ></img></a>
                  <a><img className="play-circle icon" src="/static/play-circle.svg" height="24" width="24" ></img></a>
                  <a><img className="twitter icon" src="/static/twitter.svg" height="24" width="24" ></img></a>
                  <a><img className="facebook icon" src="/static/facebook.svg" height="24" width="24" ></img></a>
                  </div>
              </div>         
              
        {/* <div className="bottombuffer" />     */}
        </div>  
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
          height: auto;
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
         .promovideo-container {
           
         }
         .videocontrols {
           position: absolute;
           display: flex;
           flex-direction: rown;
           left: 6px;
           bottom: 0px;
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
         .vicon {
          transform: translateY(-18px);
          height: 30px;
          margin: 0 4px 0 4px;
         }

 
              `}</style>
        </App>
      )
    }
  }
  
  const mapStateToProps = ({ user }) => ({ user })
 
  export default connect(createStore,mapStateToProps)(withApollo(Index))


