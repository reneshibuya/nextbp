import Head from 'next/head'
import Footer from '../../Footer/Footer'
import Navigation from '../Navigation/Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>justMaster</title>
        <link rel='icon' href='/icons/favicon.ico' />
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
