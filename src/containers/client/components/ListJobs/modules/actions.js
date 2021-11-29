import jobManagement from 'apis/QuanLiCongViec'
import {
    FETCH_ALL_JOBS,
    FILTER
} from './types'



const fetchAllJobs = (data) => ({
    type: FETCH_ALL_JOBS,
    payload: data
})
const filter = (filterBy) => ({
    type: FILTER,
    payload: filterBy
})


export const actFetchAllJobs = (name, id) => {
    return async dispatch => {
        
        try {
            if(name){
                const {data} = await jobManagement.fechJobByName(name)
                dispatch(fetchAllJobs(data))
            }else{
                const {data} = await jobManagement.fetchJobBySubtype(id)
               
                dispatch(fetchAllJobs(data))
            }
        }catch(err) {
            console.error(err)
        }
    }
}
export const actFilter = (filterBy) => {
    
    return dispatch => {
        dispatch(filter(filterBy))
    }
}
