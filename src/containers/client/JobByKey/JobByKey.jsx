import React from 'react'
import ListJobs from '../components/ListJobs/ListJobs'
import { useParams } from 'react-router'
import {useLocation} from "react-router-dom";
export default function JobByKey() {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    
    return (
        <div>
            <div class="result" >Result for "{name}"</div>
            <ListJobs name={name}/>
        </div>
    )
}
