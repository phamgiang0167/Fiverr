import React from 'react'

export default function Tabs() {
    return (
        <div className="header__tabs">
            <div className="tabs__label d-flex justify-content-between align-items-between" data-toggle="collapse" href="#sub__tabs">
                <span>Explore</span>
                <i className="fas fa-chevron-down" />
            </div>
            <div className="sub__tabs collapse" id="sub__tabs">
                <div className="tabs">
                    bussiness
                </div>
                <div className="tabs">
                    bussiness
                </div>
                <div className="tabs">
                    bussiness
                </div>
                <div className="tabs">
                    bussiness
                </div>
            </div>
        </div>

    )
}
