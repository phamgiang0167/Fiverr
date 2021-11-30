import withLayout from '../hocs/withLayout'
import React from 'react';
import { Suspense } from 'react'
import Header from '../components/client/header/Header'
import Footer from 'components/client/footer/Footer';
const { Fragment } = require("react")
function ClientLayout(props){
    // console.log(props)
    return (
        <Fragment>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    )
}

export default withLayout(ClientLayout)