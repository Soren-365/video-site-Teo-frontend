import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <Link href='/'>
      <a className={pathname === '/index' ? 'is-active' : ''}>Home</a>
    </Link>
    {/* <Link href='/apollo'>
      <a className={pathname === '/apollo' ? 'is-active' : ''}>Apollo</a>
    </Link> */}
    {/* <Link  href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link> */}
    <Link  href='/video'>
      <a className={pathname === '/video' ? 'is-active' : ''}>Video</a>
    </Link>    
    <Link href='/create-account'>
      <a className={pathname === '/create-account' ? 'is-active' : ''}>Sign up | Log in</a>
    </Link>
    {/* <Link prefetch href='/login'>
      <a className={pathname === '/login' ? 'is-active' : ''}>Login</a>
    </Link> */}

    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)

export default withRouter(Header)
