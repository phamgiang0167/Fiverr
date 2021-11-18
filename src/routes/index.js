
import {lazy} from 'react'

//client routes
import Home from '../containers/client/Home/Home'
import JobByKey from 'containers/client/JobByKey/JobByKey'
import JobDetails from 'containers/client/JobDetails/JobDetails'
import TypeJobs from 'containers/client/TypeJobs/TypeJobs'
import SubType from 'containers/client/SubType/SubType'
import Profile from 'containers/client/Profile/Profile'
import Gig from 'containers/client/Gig/Gig'
//admin routes
import Admin from '../containers/admin/Admin'
export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/listjob/by-name',
        component: JobByKey,
        exact: true
    },
    {
        path: '/job-details/:id',
        component: JobDetails,
        exact: true
    },
    {
        path: '/type/:id',
        component: TypeJobs,
        exact: true
    },
    {
        path: '/subtype/:id',
        component: SubType,
        exact: true
    },
    {
        path: '/profile',
        component: Profile,
        exact: true
    },
    {
        path: '/mygig',
        component: Gig,
        exact: true
    }
];

export const adminRoutes = [
    {
        path: '/admin',
        component: Admin,
        exact: true,
    },
];
