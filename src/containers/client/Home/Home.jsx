import React from 'react'
import Banner from './components/banner/Banner'
import { useEffect, useState } from 'react';
import JobItem from '../components/jobItem/JobItem'
import jobManagement from 'apis/QuanLiCongViec'
import Carousel from 'react-elastic-carousel'
import ListMainJobs from './components/ListMainJobs/ListMainJobs';
import HomeTrailer from './components/HomeTrailer/HomeTrailer';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
];
export default function Home() {
    const [list, setList] = useState([])
    const [listMainJob, setListMainJob] = useState([])
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
                <JobItem key={item._id} data={item} />

            )
        })
    }
    return (
        <div className="home">
            <Banner />
            <h3>Recently Viewed & More</h3>
            <Carousel 
                pagination={false}
                focusOnSelect={true}
                breakPoints={breakPoints}
                
            >
                {renderListJob()}
            </Carousel>
            <HomeTrailer />
            <div className="home__explore">
                <h3>Explore the marketplace</h3>
                <ListMainJobs />
            </div>
        </div>
    )
}
