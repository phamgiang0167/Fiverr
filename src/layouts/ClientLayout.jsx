import withLayout from '../hocs/withLayout'
import React from 'react';
import { Suspense } from 'react'
import Header from '../components/client/header/Header'
const { Fragment } = require("react")
function ClientLayout(props){
    // console.log(props)
    return (
        <Fragment>
            <Header />
            {props.children}
        </Fragment>
    )
}

export default withLayout(ClientLayout)