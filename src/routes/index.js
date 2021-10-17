
import {lazy} from 'react'

//client routes
import Home from '../containers/client/Home'

//admin routes
import Admin from '../containers/admin/Admin'
export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },

];

export const adminRoutes = [
    {
        path: '/admin',
        component: Admin,
        exact: true,
    },
];
