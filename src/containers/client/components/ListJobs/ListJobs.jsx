
import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JobItem from '../jobItem/JobItem';
import SearchTool from './components/SearchTool/SearchTool';
import { actFetchAllJobs } from './modules/actions'
export default function ListJobs(props) {
    const { name, id} = props
    const dispatch = useDispatch()
    const { jobs } = useSelector(state => state.listJobsReducer)
    useEffect(() => {
        dispatch(actFetchAllJobs(name, id))
    }, [name, id])
    
    const renderListJob = () => {
        return jobs?.map(item => {
            return (
                <JobItem key={item._id} data={item} />
            )
        })
    }

    return (
        <div className="listJob">
            <div className="listJob__container" style={{ marginTop: "20px" }}>
                
                <div style={{ marginTop: "20px" }}>
                    <SearchTool />
                </div>
                <div class="listJob__length">{jobs.length} services avaialbe</div>
                <div className="listJobs" style={{ marginTop: "20px" }}>
                    {renderListJob()}
                </div>
            </div>
        </div>
    )
}
