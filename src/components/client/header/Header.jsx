import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'

export default function Header() {
    const history = useHistory()
    let allowRender = false
    useEffect(() => {
        setHeader()
        
    })

    let setHeader = () => {
        let header = document.getElementsByClassName('header__container')[0]
        if(history.location.pathname == "/"){
            header.style.position = "fixed"
        }else{
            header.style.position = "static"
            let tabs = document.getElementsByClassName('tabs')
            for(let ele of tabs){
                ele.classList.remove("layout__home")
                ele.classList.add("layout__other")
            }
        }
    }
    return (
        <div class="header__container">
            <div className="header">
                <div className="header__logo"
                    style={{ backgroundImage: 'url(/images/logo.png)' }}
                >
                </div>
                
                <div className="header__tabs">
                    <div className="tabs layout__home">
                        Fiverr Business
                    </div>
                    <div className="tabs layout__home">
                        Explore
                    </div>
                    <div className="tabs layout__home">
                        English
                    </div>
                    <div className="tabs layout__home">
                        US$ USD
                    </div>
                    <div className="tabs layout__home">
                        Become a Seller
                    </div>
                    <div className="tabs tabs__signin layout__home">
                        Sign In
                    </div>
                    <div className="tabs tabs__signup layout__home">
                        Join
                    </div>
                </div>
            </div>

        </div>
    )
}
