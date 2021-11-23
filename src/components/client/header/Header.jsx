import { over } from 'lodash'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import Categories from './components/Categories/Categories'
import Tabs from "./components/Tabs/Tabs"
import mainJobManagement from "apis/QuanLiCongViecChinh"
import Signup from './components/Signup/Signup'
import { USER } from 'settings/varConfig'
import Signin from './components/Signin/Signin'
import { TOKEN_USER } from 'settings/apiConfig'
export default function Header() {
    const history = useHistory()
    const [typeJobs, setTypeJobs] = useState([])
    const [displaySignup, setDisplaySignup] = useState(false)
    const [displaySignin, setDisplaySignin] = useState(false)
    const user = localStorage.getItem(USER)
    useEffect(() => {
        setHeader()
        mainJobManagement.fetchMainJob()
            .then((list) => {
                setTypeJobs(list.data)
            })
    }, [])
    window.onscroll = function () { scrollFunction() };

    function defaultHeader() {
        let header = document.getElementsByClassName('header__container')[0]
        header.style.backgroundColor = "#fff"
        header.style.border = "1px solid #e9e9e9"

    }
    function inititalHeaderHome() {
        let header = document.getElementsByClassName('header__container')[0]
        header.style.backgroundColor = "transparent"
        header.style.border = "none"
    }
    function scrollFunction() {
        if (history.location.pathname === "/") {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                if (window.matchMedia('screen and (min-width: 992px)').matches) {
                    defaultHeader()
                }
            } else if (window.matchMedia('screen and (max-width: 991px)').matches) {
                defaultHeader()
            } else {
                inititalHeaderHome()
            }
        }

    }

    let setHeader = () => {
        let header = document.getElementsByClassName('header__container')[0]
        if (history.location.pathname == "/") {
            header.style.position = "fixed"
            inititalHeaderHome()
            let nav = document.getElementsByClassName("header__navbar")[0]
            nav.style.display = "none"
        } else {
            header.style.position = "static"
            defaultHeader()
        }
    }

    const hideSidebar = () => {
        let overplay = document.getElementsByClassName('overplay')[0]
        let sidebar = document.getElementsByClassName('header__sidebar')[0]
        sidebar.style.transform = "translateX(-100%)"
        overplay.style.display = "none"

    }
    const showSidebar = () => {
        let overplay = document.getElementsByClassName('overplay')[0]
        let sidebar = document.getElementsByClassName('header__sidebar')[0]
        sidebar.style.transform = "translateX(0%)"
        overplay.style.display = "block"
    }
    const renderSubTypeJobs = (list) => {
        return list?.map((item, index) => {
            return (
                <li key={item._id} >
                    <a href={`/subtype/${item._id}`}>{item.name}</a>
                </li>
            )
        })
    }
    const renderTypeJobs = () => {
        return typeJobs?.map((item, index) => {
            return (
                <li key={item._id} >
                    <a href={`/type/${item._id}`}>{item.name}</a>
                    <div className="sub__jobs" >
                        <ul>
                            {renderSubTypeJobs(item.subTypeJobs)}

                        </ul>
                    </div>
                </li>
            )
        })
    }
    const renderUserOptionsNavbar = () => {
        if (!user) {
            return (
                <>
                    <div className="header__signin" onClick={() => setDisplaySignin(true)}>
                        Sign In
                    </div>
                    <div className="header__join" onClick={() => setDisplaySignup(true)}>
                        Join
                    </div>
                </>

            )
        } else {
            let userInfo = JSON.parse(user)
            return (
                <div className="header__personal">
                    <label 
                        className="personal__logo" 
                        style={{ backgroundImage: "URL(/images/item_default.png)" }}
                        for="logo__checkbox"
                    >
                    </label>
                    <input type="checkbox" id="logo__checkbox" />
                    <div className="personal__options">
                        <div 
                            className="options__item" 
                            onClick={() => history.push(`/profile`)}
                        >
                            Profile
                        </div>
                        <div className="options__item" 
                            onClick={() => {
                                history.push({
                                    pathname: '/mygig',
                                    state: { user: userInfo}
                                })
                            }}
                        >
                            My gig
                        </div>
                        <div className="options__item" 
                            onClick={() => {
                                localStorage.removeItem(USER)
                                localStorage.removeItem(TOKEN_USER)
                                window.location.reload()
                            }}
                        >
                            Sign out
                        </div>
                    </div>
                </div>
            )
        }
    }
    const renderUserOptionsSidebar = () => {
        if (!localStorage.getItem(USER)) {
            return (
                <>
                    <div className="sidebar__item">
                        <button className="sidebar__signup">Join Fiverr</button>
                    </div>
                    <div className="sidebar__item">Sign In</div>
                </>

            )
        }
    }
    return (
        <div class="header__container d-flex justify-content-between align-items-center">
            <Signup display={displaySignup} setDisplaySignin={setDisplaySignin} setDisplaySignup={setDisplaySignup} />
            <Signin display={displaySignin} setDisplaySignin={setDisplaySignin} setDisplaySignup={setDisplaySignup}/>
            <div className="overplay" onClick={() => hideSidebar()}></div>
            <button onClick={() => showSidebar()}>
                <i class="fas fa-bars"></i>
            </button>
            <div 
                className="header__logo" 
                style={{ backgroundImage: "url(/images/logo.png)" }}
                onClick={() => {
                    history.push('/')
                }}
            ></div>
            <div className="header__sidebar">
                {renderUserOptionsSidebar()}
                <Tabs />
                <Categories typeJobs={typeJobs} />
                <div className="sidebar__item">Fiverr Pro</div>
                <div className="sidebar__item">Fiverr Business</div>
                <div className="sidebar__item">Home</div>
            </div>

            <div className="header__navbar">
                <ul>
                    {renderTypeJobs()}
                </ul>
            </div>
            <div className="d-flex align-items-center">
                {renderUserOptionsNavbar()}

            </div>
        </div>
    )
}
