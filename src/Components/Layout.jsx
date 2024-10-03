import React from 'react'
import Header from './Header'
import Main2 from './Main2'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <Main2>{children}</Main2>
    <Footer/>
    </>
  )
}

export default Layout