
import {
    FETCH_ALL_JOBS,
    FILTER
} from './types'
const initialState = {
    allJobs: [],
    jobs: []
}

const listJobsReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case FETCH_ALL_JOBS:
            var newState = {...state}
            newState.allJobs = payload
            newState.jobs = payload
            return {...newState}
        case FILTER:
            var newState = {...state}
            newState.jobs = newState.allJobs
            if(payload.proServices){
                newState.jobs = newState.jobs?.filter((item) => {
                    return item.proServices === true
                })
            }
            if(payload.localSellers){
                newState.jobs = newState.jobs?.filter((item) => {
                    return item.localSellers === true
                })
            }
            if(payload.onlineSellers){
                newState.jobs = newState.jobs?.filter((item) => {
                    return item.onlineSellers === true
                })
            }
            if(payload.deliveryTime){
                newState.jobs = newState.jobs?.filter((item) => {
                    return item.deliveryTime === true
                })
            }
            newState.jobs = newState.jobs?.filter((item) => {
                return item.price >= payload.minPrice && item.price <= payload.maxPrice
            })
            return {...newState}
        
        default: return {...state}
    }
}

export default listJobsReducer