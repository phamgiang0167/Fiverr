import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'

export default function Header() {
    const history = useHistory()
    let allowRender = false
    useEffect(() => {
        setHeader()
    }, [])
    window.onscroll = function () { scrollFunction() };
    function defaultHeader() {
        let header = document.getElementsByClassName('header__container')[0]
        let tabs = document.getElementsByClassName('tabs')
        header.style.backgroundColor = "#fff"
        header.style.border = "1px solid #e9e9e9"
        for (let tab of tabs) {
            tab.style.color = "#62646a"
        }
    }
    function inititalHeaderHome() {
        let header = document.getElementsByClassName('header__container')[0]
        let tabs = document.getElementsByClassName('tabs')
        if (window.screen.width >= 900) {
            console.log('a')
            header.style.backgroundColor = "transparent"
        } else {
            header.style.backgroundColor = "#fff"
        }
        header.style.border = "none"
        for (let tab of tabs) {
            tab.style.color = "#fff"
        }
    }
    function scrollFunction() {
        if (history.location.pathname == "/") {

            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                defaultHeader()
            } else {
                inititalHeaderHome()
            }
        }

    }
    const controlMenu = () => {

        let tab = document.getElementsByClassName("header__tabs")[0]
        if (tab.style.left == "-100%") {
            tab.style.left = "0"

        } else {
            tab.style.left = "-100%"
        }

    }
    let setHeader = () => {
        let header = document.getElementsByClassName('header__container')[0]
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if (history.location.pathname == "/") {
            header.style.position = "fixed"
            inititalHeaderHome()
        } else {
            header.style.position = "static"
        }
    }
    return (
        <div class="header__container">
            <div className="header">
                <i class="fas fa-bars d-block d-lg-none header__menu"
                    onClick={() => controlMenu()}></i>
                <div className="header__logo"
                    style={{ backgroundImage: 'url(/images/logo.png)' }}
                    onClick={() => history.push('/')}
                >
                </div>

                <div className="header__tabs d-flex flex-column flex-lg-row">
                    <div className="tabs">
                        Fiverr Business
                    </div>
                    <div className="tabs">
                        Explore
                    </div>
                    <div className="tabs">
                        English
                    </div>
                    <div className="tabs">
                        US$ USD
                    </div>
                    <div className="tabs">
                        Become a Seller
                    </div>
                    <div className="tabs tabs__signin">
                        Sign In
                    </div>
                    <div className="tabs tabs__signup">
                        Join
                    </div>
                </div>
            </div>

        </div>
    )
}
