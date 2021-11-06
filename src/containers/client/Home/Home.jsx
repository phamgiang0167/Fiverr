import React from 'react'
import Banner from './components/banner/Banner'
import { useEffect, useState } from 'react';
import JobItem from '../components/jobItem/JobItem'
import jobManagement from 'apis/QuanLiCongViec'
import Carousel from 'react-elastic-carousel'
import ListMainJobs from './components/ListMainJobs/ListMainJobs';
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
    const playVideo = () =>{
        let video_class = document.getElementsByClassName('video')[0]
        let video = document.getElementsByTagName('video')[0]
        video.play()
        video_class.style.display = "flex"
    }
    const pauseVideo = () => {
        let video_class = document.getElementsByClassName('video')[0]
        video_class.style.display = "none"
        let video = document.getElementsByTagName('video')[0]
        video.pause()
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
            <div className="home__trailer">
                <div className="row">
                    <div className="col-md-6">
                        <h2>A whole world of freelance talent at your fingertips</h2>
                        <div className="trailer__item">
                            <h6><i class="far fa-check-circle"></i> <span>The best for every budget</span></h6>
                            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                        </div>
                        <div className="trailer__item">
                        <h6><i class="far fa-check-circle"></i> <span>Quality work done quickly</span> </h6>
                            <p>Find the right freelancer to begin working on your project within minutes.</p>
                        </div>
                        <div className="trailer__item">
                        <h6><i class="far fa-check-circle"></i>  <span>Protected payments, every time</span> </h6>
                            <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                        </div>
                        <div className="trailer__item">
                            <h6><i class="far fa-check-circle"></i>  <span>24/7 support</span> </h6>
                            <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="trailer__img" style={{backgroundImage: "url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png')"}}>
                            <div className="trailer__play" onClick={()=>playVideo()}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video">
                <div className="overplay" onClick={() => pauseVideo()}>
                </div>
                <video controls>
                    <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
            </div>
            <div className="home__explore">
                <h3>Explore the marketplace</h3>
                <ListMainJobs />
            </div>
        </div>
    )
}
