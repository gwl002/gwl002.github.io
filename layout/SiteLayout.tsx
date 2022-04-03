import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Header from '../components/header'

const SiteLayout: React.FunctionComponent = props => {
    return (
        <>
            <NavBar />
            <Header {...props} />
            {props.children}
            <Footer />
        </>
    )
}

export default SiteLayout
