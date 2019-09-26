import React from 'react'

import App from '../components/App'
import VSubmit from '../components/VideoSubmit'
import VPostList from '../components/VideoPostList'


// import Getresponse from '../components/getresponse'

//import Plyr from 'plyr'
//import Mediaelement from 'mediaelement'
//import Afterglow from '../node_modules/afterglowplayer/dist/afterglow.min.js'
class Index extends React.Component {
    constructor() {

        super()
        this.state = {
            videofile_url: null,
            vidfile: null,
            token: "eyJhbGciOiJIUzI1NsiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJTWmVfcmFvTSIsImlhdCI6MTU2OTE1MTQwMn0.qT3rI5nsTFQz_VzaQGQVw-qepcZJ4dPIK7JFIauH1bg"
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
        }
        catch {
            Error("something went wrong in fetch video")
        }
        // }
        var vid = document.getElementById('id')
        vid.src = "static/y2mate.com - beautiful_nature_around_the_world_6lt2JfJdGSY_1080p.mp4";
        
    }

    render() {
        return (
            // (this.state.videofile_url && 'static/y2mate.com - beautiful_nature_around_the_world_6lt2JfJdGSY_240p.mp4')

            <App>
               
               
                  
                    <div>
                    <video id="id" width="640" height="280"  type='video/mp4' controls controlsList="nodownload" > </video>
                    {/* <Getresponse/> */}
                            {console.log("src video_url", this.state.videofile_url)}
                            {console.log("src vidfile", this.state.vidfile)}

                            </div>
                            {/* <VSubmit />
                            <VPostList /> */}
                            <style jsx>{`
                        

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

                        `}</style>
                        </App>

                    )
                }
            
            }
            
export default Index