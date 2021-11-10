import jobManagement from 'apis/QuanLiCongViec';
import React from 'react'
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation} from "react-router-dom";
import JobItem from '../jobItem/JobItem';
import SearchTool from './components/SearchTool/SearchTool';
import {actFetchAllJobs} from './modules/actions'
export default function ListJobs(props) {
    const {name} = props
    const dispatch = useDispatch()
    const {jobs} = useSelector(state => state.listJobsReducer) 
    useEffect(() => {
        dispatch(actFetchAllJobs(name))
    }, [])
    
    const renderListJob = () => {
        return jobs?.map(item => {
            return (
                <JobItem key={item._id} data={item}/>  
            )
        })
    }

    return (
        <div className="listJob">
            <div className="listJob__container" style={{marginTop: "20px"}}>
               <div class="result" >Result for "{name}"</div>
               <div style={{marginTop: "20px"}}>
                    <SearchTool />
               </div>
               <div class="listJob__length">{jobs.length} services avaialbe</div>
               <div className="listJobs" style={{marginTop: "20px"}}>
                    {renderListJob()} 
               </div>
            </div>
        </div>
    )
}
