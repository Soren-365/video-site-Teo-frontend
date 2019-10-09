import Link from 'next/link'
import { withRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { sitedata } from '../components/sitedata'

import checkLoggedIn from '../lib/checkLoggedIn'
import { userSignOut } from '../lib/user/actions'

const Header = ({router: pathname, ...props}) => {
 

  const IsUserLoggedIn = props.loggedIn


   console.log("In Header.js, User signed In?:",IsUserLoggedIn)
    return (
  <header>

    <div className="pre">
      <Link prefetch href="/"><a className={pathname === '/index' ? 'is-active logo' : 'logo'}><img  src="/static/TPvideo_redlined.png" width="152" alt="site logo"></img></a></Link>
    </div>

    <div className="sub">
    <div className="searchbar">
    <img className="lookingglass" src="/static/lookingglass.svg" height="20" width="20" ></img>
    <input className="searchbox" ></input>
    </div>    
    </div>
  
    {/* <Link href='/apollo'>
      <a className={pathname === '/apollo' ? 'is-active' : ''}>Apollo</a>
    </Link> */}
    {/* <Link  href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link> */}
    {/* <Link  href='/video'>
      <a className={pathname === '/video' ? 'is-active' : ''}>Video</a>
    </Link>     */}

    <div className="post">
    <a><img className="bell" src="/static/bell.svg" height="24" width="24" ></img></a>
    <a><img className="menu" src="/static/menu.svg" height="24" width="24" ></img></a>
    <Link href={IsUserLoggedIn ? "/signout" :  "/create-account"}>
      <a className={IsUserLoggedIn ? (pathname === '/' ? 'is-active signout' : 'signout') : (pathname === '/create-account' ? 'is-active createaccount' : 'createaccount')}>
      {IsUserLoggedIn ? "Sign out" : "Sign up | Log in" }</a>
    </Link>
    </div>
    {/* <Link prefetch href='/login'>
      <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
    </Link> */}
  
    <style jsx>{`


@font-face {
font-family: 'Revalia';
src: url('/static/Revalia-Regular.ttf');
}
header {
  z-index: 32;    
  padding: 0px 0px 0px 0px; 
  height: 62px;
}

// .blackbox {
//   height: 81px;
//    background-color: #000000;
//    position: absolute;
//    top: 0px;
//    width: 100%;
//    z-index: 10;
//  }




.pre:hover{
  cursor: pointer;
}

a {
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  align-self: center;
  padding: 12px 6px 17px 6px;
  margin: auto;
  margin-left: 13px;
  font-family: "Roboto", cursive; 
  outline: 0;
 display: none;
}


.logo a {
  padding: 0;
  margin: 0;
}
.logo {
  margin: 0;
  width: 152px;
  padding: 5px 0px 0px 14px;
  bottom: 0px;
  margin-left: 0px;
  align-content: left;  
}

.searchbar {

}

.lookingglass {
  width: 24px;
  margin: 0px 6px 2px 8px;;
  transform: translateY(14px);
}

.searchbox {
  box-shadow: 0px 0px;
  width: 293px;
  height: 28px;
  border: 0px;
  border-bottom: 1px solid #FC1D1D;
  background-color: #DFD7F0;  
  transform: translateY(14px);
}

.bell {
  margin: 0px 4px;
  transform: translateY(5px);
 
}
.menu {
  margin: 0px 4px;
  transform: translateY(5px);
}

.createaccount {
 margin: 0 9px;
 transform: translateY(5px);
}
.signout {
 margin: 0 9px;
 transform: translateY(5px);
}

@media only screen and (min-width: 957px) {
  a { display: block;}

  .post {
    display: flex;
    flex-direction: row;
    width: 260px;
}
 

  .sub {
bottom:3px;
  }
}
a:hover  {
  text-decoration: underline;

  -o-transition:0.206s;
-ms-transition:0.206s;
-moz-transition:0.206s;
-webkit-transition:0.206s;
  transition: 0.206s;
  transition-timing-function: cubic-bezier(0.206,0,0.33,0);
  border-radius: 5px;
  transform: scale(1.1);
}

a:hover.is-active  {
  transform: scale(1);
  }

.is-active {
  text-decoration: none;
   z-index: 12; 
}
.is-active:before {
  top: 13px;
  transform: translateX(-16px);
  position: absolute;
  alignItems: center;
  content: url("/static/Vector2.png");
  display: inline-block;
  z-index: 200;   
 }

`}</style>
  </header>)
}

export default withRouter(Header)
