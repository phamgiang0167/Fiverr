import jobManagement from 'apis/QuanLiCongViec';
import React from 'react'
import { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import JobItem from '../components/jobItem/JobItem';
export default function ListJobs() {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    const [list, setList] = useState([])
    useEffect(() => {
        jobManagement.fechJobByName(name)
            .then((list) => {
                setList(list.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    const renderListJob = () => {
        return list?.map(item => {
            return (
                <JobItem key={item._id} data={item}/>
                
            )
        })
    }

    
    return (
        <div className="listJob">
            <div className="listJob__container" style={{marginTop: "20px"}}>
               <div class="result">Result for "{name}"</div>
               <div className="listJobs" style={{marginTop: "20px"}}>
                    {renderListJob()} 
               </div>
            </div>
            
        </div>
    )
}
