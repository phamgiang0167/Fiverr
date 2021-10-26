
import {lazy} from 'react'

//client routes
import Home from '../containers/client/Home/Home'
import ListJobs from '../containers/client/ListJobs/ListJobs'
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
        component: ListJobs,
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
