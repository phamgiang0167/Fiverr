import Loading from 'components/client/Loading/Loading'
import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import mainJobManagement from 'apis/QuanLiCongViecChinh'
export default function TypeJobs() {
    const {id} = useParams()
    const [list, setList] = useState([])
    const history = useHistory()
    useEffect(() => {
        mainJobManagement.fetchMainJobDetails(id)
            .then((data) => {
                setList(data.data.subTypeJobs)
            })
            .catch(err => console.log(err))
    }, [id])
    const renderListSubTypes = () => {
        return list?.map((item, index) => {
            return (
                <button 
                    className="type__subtype-item" 
                    key={item._id}
                    onClick={() => {
                        history.replace('/subtype/' + item._id)
                    }}
                >
                    {item.name}
                </button>
            )
        })
    }
    if(!list) return <></>
    return (
        <div className="type">
            {renderListSubTypes()}
        </div>
    )
}
