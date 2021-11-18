import React, { useEffect, useState } from 'react'
import jobManagement from 'apis/QuanLiCongViec'
import subJobManagement from 'apis/QuanLiCongViecPhu'
import { useHistory } from 'react-router-dom'
import Search from 'containers/client/components/Search/Search'
export default function Banner() {
    const history = useHistory()
    const [listPopular, setListPopular] = useState([])
    useEffect(() => {
        subJobManagement.fechListSubJob()
        .then((list) => {
            setListPopular(list.data)
        })
        
    }, [])
    

    const renderPopular = () => {
        return listPopular?.slice(0, 4).map((item) => {
            return (
                <button className="popular__item" 
                    key={item._id} 
                    onClick={() => history.push(`/subtype/${item._id}`)}
                >
                    {item.name}
                </button>
            )
        })
    }
    
    return (
        <div className="banner" style={{ backgroundImage: "url(./images/banner-1.png)" }}>
            <div className="banner__left">
                <div className="banner__slogan">
                    Find the perfet <span>freelance</span> service for your business
                </div>
                <Search />
                <div className="banner__popular">
                    <span>popular: </span>
                    {renderPopular()}
                </div>
            </div>
            <div className="banner__right">

            </div>
        </div>
    )
}
