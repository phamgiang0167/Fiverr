import React, { useState, useEffect } from 'react'
import ListJobs from '../components/ListJobs/ListJobs'
import { useParams } from 'react-router-dom'
import subJobManagement from 'apis/QuanLiCongViecPhu'
export default function SubType() {
    const { id } = useParams()
    const [subType, setSubType] = useState({})
    useEffect(() => {
        subJobManagement.fetchDetailSubJob(id)
            .then((obj) => {
                setSubType(obj.data)
            })
    }, [id])

    return (
        <div >
            <div class="result" >{subType.name}</div>
            <ListJobs id={id} />
        </div>
    )
}
