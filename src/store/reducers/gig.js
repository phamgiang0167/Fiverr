
import {
    CREATE_GIG,
    DELETE_GIG,
    EDIT_GIG,
    SET_GIG,
    COMPLETE_JOB
} from '../constants/gig'
const initialState = {
    myGig: []
}

const gigReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_GIG:
            return { ...state, myGig: [...state.myGig, payload] }
        case SET_GIG:
            return { ...state, myGig: payload }
        case EDIT_GIG:
            let arr = [...state.myGig]
            let objIndex = arr.findIndex((obj => obj._id === payload._id))

            arr[objIndex] = payload
            return { ...state, myGig: arr }
        case DELETE_GIG:
            let arrDelete = [...state.myGig]
            let objIndexDelete = arrDelete.findIndex((obj => obj._id === payload))
            if (objIndexDelete > -1) {
                arrDelete.splice(objIndexDelete, 1);
            }
            return { ...state, myGig: arrDelete }
        case COMPLETE_JOB:
            let arrComplete = [...state.myGig]
            let objIndexComplete = arrComplete.findIndex((obj => obj._id === payload))
            console.log(objIndexComplete)
            if (objIndexComplete > -1) {
                arrComplete[objIndexComplete].status = true
                arrComplete[objIndexComplete].usersBooking = null
            }
            return { ...state, myGig: arrComplete }
        default: return { ...state }

    }
}

export default gigReducer