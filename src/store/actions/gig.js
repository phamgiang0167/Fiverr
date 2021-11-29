
import Swal from "sweetalert2"
import {
    CREATE_GIG,
    SET_GIG,
    EDIT_GIG,
    DELETE_GIG,
    COMPLETE_JOB
} from '../constants/gig'
import jobManagement from 'apis/QuanLiCongViec'
import mainJobManagement from 'apis/QuanLiCongViecChinh'
import subJobManagement from 'apis/QuanLiCongViecPhu'


export const actCreateGig = (values) => {
    return dispatch => {
        // console.log(values)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Create it!'
        }).then((result) => {
            if (result.isConfirmed) {
                jobManagement.createJob(values)
                    .then(async (res) => {
                        Swal.fire(
                            'Create job success!',
                            '',
                            'success'
                        )
                        const newJob = res.data
                        // console.log(res.data)
                        let type = await mainJobManagement.fetchMainJobDetails(res.data.type)
                        type = type.data
                        let subType = await subJobManagement.fetchDetailSubJob(res.data.subType)
                        subType = subType.data
                        dispatch({
                            type: CREATE_GIG,
                            payload: { ...newJob, type: type, subType: subType }
                        })
                    })
                    .catch(err => Swal.fire(
                        'Something went wrong :(',
                        '',
                        'error'
                    ))

            }
        })
    }
}

export const actSetGig = (arrValue) => {
    return dispatch => {
        dispatch({
            type: SET_GIG,
            payload: arrValue
        })
    }
}
export const actEditGig = (id, values) => {
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Edit it!'
        }).then((result) => {
            if (result.isConfirmed) {
                jobManagement.editJob(id, values)
                    .then(async (res) => {

                        Swal.fire(
                            'Edit job success!',
                            '',
                            'success'
                        )
                        let newJob = await jobManagement.fetchJob(id)
                        newJob = newJob.data
                        let type = await mainJobManagement.fetchMainJobDetails(res.data.type)
                        type = type.data
                        let subType = await subJobManagement.fetchDetailSubJob(res.data.subType)
                        subType = subType.data

                        dispatch({
                            type: EDIT_GIG,
                            payload: { ...newJob, type: type, subType: subType }
                        })
                    })
                    .catch(err => console.log(err))

            }
        })
    }
}

export const actDeleteGig = (id) => {

    return dispatch => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                jobManagement.deleteJob(id)
                    .then((res) => {
                        dispatch({
                            type: DELETE_GIG,
                            payload: id
                        })
                    })
                    .catch(err => Swal.fire(
                        'Opps!',
                        'Something went wrong',
                        'error'
                    ))
            }
        })
    }
}

export const actCompleteJob = (id) => {
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                jobManagement.completeJob(id)
                    .then((res) => {
                        dispatch({
                            type: COMPLETE_JOB,
                            payload: id
                        })
                    })
                    .catch(err => Swal.fire(
                        'Opps!',
                        'Something went wrong',
                        'error'
                    ))
            }
        })
    }
}