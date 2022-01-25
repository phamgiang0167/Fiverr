import jobManagement from 'apis/QuanLiCongViec'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { USER } from 'settings/varConfig'
import GigForm from './components/GigForm/GigForm'
import GigItem from './components/GigItem/GigItem'
import { actSetGig } from 'store/actions/gig'
const initialValue = {
    "name": "",
    "rating": 10,
    "price":'',
    "proServices": '',
    "localSellers": '',
    "onlineSellers": '',
    "deliveryTime": '',
    "type": null,
    "subType": null
}
export default function Gig() {
    const { myGig } = useSelector(state => state.gigReducer)
    const [displayForm, setDisplayForm] = useState({ display: false, type: 'create', values: initialValue })
    const dispatch = useDispatch()
    useEffect(() => {
        jobManagement.fechJobs()
        .then((job) => {
            const myGig = job.data?.filter((item) => {
                return item.userCreated === JSON.parse(localStorage.getItem(USER))._id
            })
            dispatch(actSetGig(myGig))
        })
    }, [])
    
    if (!localStorage.getItem(USER)) {
        return <Redirect to="/" />
    }
    const renderListGig = () => {
        let gig = [...myGig].reverse()
        return gig?.map((item, index) => {
            return (
                <GigItem data={item} displayForm={displayForm} setDisplayForm={setDisplayForm} />
            )
        })
    }

    return (
        <div className="gig" style={{minHeight: "100vh"}}>
            <GigForm displayForm={displayForm} setDisplayForm={setDisplayForm} />
            <div className="row">
                <div className="col-sm-2 col-md-3"></div>
                <div className="col-sm-8 col-md-6 p-4">
                    <div className="create__gig d-flex justify-content-between align-items-center">
                        <span>
                            {myGig ? "Welcome back, see your Gig!" : "It seems that you don't have any active Gigs. Get selling!"}
                        </span>
                        <button onClick={() => setDisplayForm({
                            ...displayForm, display: true, values: initialValue
                        })}>Create a New Gig</button>
                    </div>
                    {renderListGig()}
                </div>
                <div className="col-sm-2 col-md-3"></div>
            </div>
        </div>
    )
}
