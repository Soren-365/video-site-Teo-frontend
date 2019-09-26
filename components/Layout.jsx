
import "../css/mainstyles.css"
//import "../sass/mystyles.scss"
//import { sitedata } from "./sitedata"
import Header from './Header'

import dynamic from 'next/dynamic'
import Meta from '../components/meta'
import Head from 'next/head'
// {   console.log("was here; start of layout.jsx", sitedata.settings)
//      if (sitedata.settings["lang"] === 'en') {
//     Header = Header_en
//     console.log("was here; start of layout.jsx", sitedata.settings)
//     }}



export default ({ children, ...otherprops }) => (
 
    <React.Fragment>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='minimum-scale=1.0, width=device-width' />
      <title>{'Project: Video hosting site| Demo site by Avant Web Solutions '}</title>
      {/* <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"/>
      <link rel="icon" href="/favicon.ico" type="image/x-icon/"/>
      <link rel="alternate" href="http://avant-online.com/ro/" hrefLang="ro-ro"/>
      <link rel="alternate" href="http://avant-online.com/en/" hrefLang="en-us"/>
      <link rel="alternate" href="http://avant-online.com/en/" hrefLang="en-gb"/>
      <link rel="alternate" href="http://avant-online.com/en/" hrefLang="x-default"/>
    
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/> */}
        {/* <meta name="msapplication-TileColor" content="#ff9d00"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ff9d00"/> */}
        {/* <meta name="msapplication-config" content="/static/browserconfig.xml"/>
        <link href="https://vjs.zencdn.net/7.6.0/video-js.css" rel="stylesheet"/>
        <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script> */}
        {/* <script type="text/javascript" src="//cdn.jsdelivr.net/npm/afterglowplayer@1.x"></script> */}
      <Meta/>
      </Head>
      
    


      {/* <script src="../util/modernizr.js"></script>  */}
      {/* <Goheadt/> */}
      {/* <link href="https://fonts.googleapis.com/css?family=Jacques+Francois|Raleway|Revalia&display=swap" rel="stylesheet"/>  */}
      

        {/* <Header sitedatasettings={sitedata.settings}></Header> */}

        <Header />
        <div className="page_background content">
        <div className="headerbuffer" />
                {children}
        </div>

        <footer>
            <div className="footer">
                
                <div className="flexbox">
                    <div><p>contact@avant-online.ro</p><p>0724 337 342</p></div>
                    <div><p>Avant Web Solutions SRL, CUI: 41221114</p><p>Str.Dezrobirii nr. 18-38, bl. 33, sc. 3, parter, ap.83</p><p>Mun. Bucuresti, sector 6, Romania</p></div>
                </div>
                <h4>Avant Websolutions © 2019</h4>
            </div>
        </footer>


        <style jsx >{`
 
footer {
    position: relative;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #333333; 
}

.flexbox{
position: relative;
margin: auto;
 display: flex;
 justify-content: center;
 padding: 4px;
 margin: 1px 0px 8px 0px;
 border: 1px solid #FFC163; 
 align-items: center;
}

.flexbox div {
    margin: 0px 7vw;
    
    
}
.flexbox p {
    width: 100%;
    font-size: 13px;
    text-align: left;
    
}


@media only screen and (max-width: 538px) {
    .flexbox div {
        margin: 0px 2vw;
 }


}

`}</style>

    </React.Fragment>
)

