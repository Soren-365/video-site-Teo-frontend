import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer, ApolloProvider  } from 'react-apollo'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { loadData } from '../lib/placeholder/actions'
import cookie from 'cookie'
import App from '../components/App'
import VideoCard from '../components/videocard'
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
   return { loggedInUser, message: `${name}.` }

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
          medialib: sitedata.settings.media_libs[sitedata.settings.libs_pointer],
          VidUrl: ""
         
      }      
      
      //this.playunmute = this.playunmute.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleClickVid= this.handleClickVid.bind(this)
  }

 

  componentDidMount () {
  
    const videonode = document.getElementById('video')
    videonode.autoplay = true;
    //promovideonode.muted = this.state.videomute; 
   }

//   playunmute() {
//     promovideonode.muted = !promovideonode.muted ; 
//    // promovideonode.play();
// } 

handleClick() {
}

handleClickVid() {
  const videonode = document.getElementById('video')
    videonode.src = this.state.VidUrl;
    videonode.autoplay = true;
    videonode.load()
    redirect({}, '/Videoplay')
}

componentDidUpdate () {
  // const promovideonode = document.getElementById('promovideo')
  // promovideonode.muted = this.state.videomute; 
  // if (this.state.videopause && !this.state.videopausebutton) {
  //   promovideonode.pause()
  //   this.setState((state, props) => ({videopause: false}))
  // }; 
  // if (this.state.videopause && this.state.videopausebutton) {
  //   promovideonode.play()
  //   this.setState((state, props) => ({videopause: false}))
  // }; 
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
      {console.log(this.state.medialib, this.state.medialib.videocard_1.imgUrl1)}
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

         <div>
          <video className="video" id="video" width="965" height="542" controls>          
            <source src="/static/egalitateintresexe.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video> 
        
            <div className="videocontrols">
            <button onClick={this.handleClickMute} ><img className="mute vicon" src="/static/volume-1.svg" height="24" width="24" ></img></button>
            <button onClick={this.handleClickPlay} ><img className="play vicon" src="/static/play.svg" height="24" width="24" ></img></button>
            </div>  
        </div>
       
        <div className="contentcontainer">
              <div className="uppercontent">
              <div className="flexbox">
              <div>
                <h4>The mysteries of Love</h4>
                <p>By Maria Magdalena</p>
                </div>
                <div>
                  <p>Categoria: Relatia de cuplu</p>
                  <p> 854 Views</p>
                </div>
                </div>
              </div>
              <hr/>

              <div className="lowercontent">
                <p>Maria held this series of lectures in Bucuresti on 6th october 2019.</p>
                <p>She talks about aspects of love in the couple relationship that you will not learn from anywhere else.</p>
              </div>
        </div>

         
           
            {/* <Page />    */}
            </div>
            </div>
            <div className="rightcontent-collumn">
              <div className="rightsidebox">
              <button className="vidcardplaceholder" onClick={() => {this.setState({VidUrl: this.state.medialib.videocard_1.vidUrl1}, this.handleClickVid )}}><VideoCard medialib={this.state.medialib} dataKey='videocard_1'></VideoCard></button>
              <button className="vidcardplaceholder" onClick={() => {this.setState({VidUrl: this.state.medialib.videocard_2.vidUrl1}, this.handleClickVid )}}><VideoCard medialib={this.state.medialib} dataKey='videocard_2'/></button>
              <button className="vidcardplaceholder" onClick={() => {this.setState({VidUrl: this.state.medialib.videocard_3.vidUrl1}, this.handleClickVid )}}><VideoCard medialib={this.state.medialib} dataKey='videocard_3'/></button>
              
              </div>
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
        
        .vidcardplaceholder {
        position: relative;
        width: 387px;
        height: 93px;
        margin-top: 16px;
        margin-bottom: 16px;
        outline: 0;
        }

        .contentbox {
          position: relative;
          display: flex;
          width: 1440px;
          margin-left: calc((100% - 1440px)/2);
          margin-top: 17px;
        }
        
        .leftcontent-collumn {
          position: relative;
          width: calc(965px + 50px);
          height: auto;
        }

        .rightcontent-collumn {
          position: relative;
          width: calc(387px + 63px);
          height: auto;
        }

        .rightsidebox {
          position: absolute;
          width: 387px;
          height: auto;
          top: 0px;
          left: 25px; 
         
         }

         .leftsidebox{
           position: absolute;
           width: 965px;
          left: 25px;

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

         .video{
          width: 965px;
          height: 542px;
          
          margin-top: 17px;
          background: #2D2222;
         }      

         .contentcontainer {
          width: 965px
          height: 315px;
          margin-top: 18px;
         }

        .uppercontent {
            height: 57px;
           
            margin-bottom: 15px;
         }

        .flexbox {
          display: flex;
          justify-content: space-between;
        }
        .flexbox h4 {
          font-size: 18px;
        }
        .flexbox div p {
          margin:  10px 0 10px 0;
        }

        .lowercontent {
            margin-top: 22px;
            height: 222px;
            line-height: 144%;
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
           transform: translateY(-18px);
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


