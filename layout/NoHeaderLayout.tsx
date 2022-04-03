import React from 'react'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

const NoHeadLayout: React.FunctionComponent = props => {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}

export default NoHeadLayout
