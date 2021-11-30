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
    
    const renderListMainJob = () => {
        return listMainJob?.map((item, index) => {
            return (
                <div className="listMainJob__item" onclick={() => history.push(`/mainjob/${item._id}`)} key={item._id}>
                    <div className="item__logo">
                        <div className="logo" style={{backgroundImage: `url(./images/i${index + 1}.png)`}}>

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