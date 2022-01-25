import React, {useState, useEffect, memo} from 'react'
import mainJobManagement from 'apis/QuanLiCongViecChinh'
import {useHistory} from 'react-router-dom'

function ListMainJobs() {
    const [listMainJob, setListMainJob] = useState([])
    const history = useHistory()
    useEffect(() => {
        mainJobManagement.fetchMainJob()
            .then((list) => {
                setListMainJob(list.data)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(listMainJob)
    const renderListMainJob = () => {
        return listMainJob?.map((item, index) => {
            return (
                <div className="listMainJob__item" key={item._id}>
                    <div className="item__logo">
                        <div 
                            className="logo" 
                            style={{backgroundImage: `url(./images/i${index + 1}.png)`}}
                            onClick={() => history.push(`/type/${item._id}`)}
                        >

                        </div>
                        <div className="item__border-bottom">

                        </div>
                    </div>
                    <div className="item__name">
                        {item.name}
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            <div 
                className="
                    listMainJob__container
                    
                "
            >
                {renderListMainJob()}
            </div>
        </div>
    )
}
export default memo(ListMainJobs)