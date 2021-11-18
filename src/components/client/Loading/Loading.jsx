import React from 'react'

export default function Loading(props) {
    const {display, msg} = props
    if(!display) return <></>
    return (
        <div className="loading">
            <div className="overplay__loading"></div>
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="loading__text">{msg}</div>
        </div>
    )
}
