import Router from 'next/router'
import { writeUserLoggedIn, sitedata } from './sitedata'

export default (context, target) => {
  writeUserLoggedIn(false)
  

  if (typeof window === 'undefined') {
    // server
    // 303: "See other"
    console.log("Now In redirect.js server side")
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    
    console.log("Was in redirect.js client side")
    Router.replace(target)
  }
}
