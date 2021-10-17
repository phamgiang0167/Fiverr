import withLayout from '../hocs/withLayout'
import React from 'react';
import { Suspense } from 'react'

const { Fragment } = require("react")
function ClientLayout(props){
    // console.log(props)
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default withLayout(ClientLayout)