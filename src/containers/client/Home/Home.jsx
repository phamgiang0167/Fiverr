import React from 'react'
import Banner from './components/banner/Banner'
import { useEffect, useState } from 'react';
import JobItem from '../components/jobItem/JobItem'
import jobManagement from 'apis/QuanLiCongViec'
export default function Home() {
    const [list, setList] = useState([])
    useEffect(() => {
        jobManagement.fechJobs()
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
        <div className="home">
            <Banner />
            <div className="home__listJobs">
                <h3>Recently Viewed & More</h3>
                {renderListJob()} 
            </div>
        </div>
    )
}
