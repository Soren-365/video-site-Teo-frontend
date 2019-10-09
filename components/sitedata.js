import Link from 'next/link'
import { render } from 'react-dom';
import {medialib_en, medialib_ro} from './medialib'
import { reloadMedialib } from './medialib'


export const sitedata = 
{ settings : {
    lang: 'ro', 
    oldlang: 'en',
    media_libs: [medialib_en, medialib_ro],
   libs_pointer: 1,
    mobile_menu_active: false,
    userLoggedIn: false,
    }
}



export function writeLangtoSettings (langauge) {
  
    let statusCopy = Object.assign({}, sitedata.settings)
    statusCopy.lang = langauge
    statusCopy.libs_pointer = (langauge === 'en' ? 0 : 1)
    statusCopy.libs_oldlang = (langauge === 'en' ? 'ro' : 'en')
   statusCopy.mobile_menu_active = false
   sitedata.settings  = statusCopy

  // Router.replace(`/${sitedata.settings.media_libs[sitedata.settings.libs_pointer].pages[0]}`)
  
}

export function writeMobileMenuActivetoSettings (isActive) {

  let statusCopy = Object.assign({}, sitedata.settings)
  statusCopy.mobile_menu_active = isActive
  sitedata.settings  = statusCopy
  // console.log("WriteMobileActivetoSettings",isActive)
  // console.log("WriteMobileActivetoSettings",sitedata.settings.mobile_menu_active)
}

export function writeUserLoggedIn (isLoggedIn) {
  console.log("In sitedata.js writing to sitedata.settings.userLoggedIn the value:", isLoggedIn)
  let statusCopy = Object.assign({}, sitedata.settings)
  statusCopy.userLoggedIn = isLoggedIn
  sitedata.settings  = statusCopy
  // console.log("WriteMobileActivetoSettings",isActive)
  // console.log("WriteMobileActivetoSettings",sitedata.settings.mobile_menu_active)
}
// const medialib = Object.assign({},sitedata.settings.media_libs[sitedata.settings.libs_pointer])
// export default medialib 