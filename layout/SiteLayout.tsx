import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Header from '../components/header'
import { HeaderProps } from '../types/HeaderProps'

const SiteLayout: React.FunctionComponent<React.PropsWithChildren<HeaderProps>> = props => {
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
