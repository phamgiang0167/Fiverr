import React from 'react'
import {useHistory} from 'react-router-dom'
export default function Search() {
    const history = useHistory()
    const submitSearch = () => {
        let key = document.getElementById('search-field').value
        if(key != ""){
            history.push(`/listjob/by-name?name=${key}`)

        }
    }

    const deleteButtonAction = () => {
        let input = document.getElementById("search-field")
        input.value = ""
        let delBtn = document.getElementsByClassName("remove")[0]
        delBtn.style.visibility = "hidden" 
    }
    
    const handleSearchJob = () => {
        let input = document.getElementById("search-field")
        let delBtn = document.getElementsByClassName("remove")[0]
        if(input.value != ""){
            delBtn.style.visibility = "visible" 
        }else{
            delBtn.style.visibility = "hidden" 
        }
    }
    return (
        <div className="banner__search">
            <div className="input__container">
                <input
                    id="search-field"
                    type="text"
                    placeholder={`Try "building mobile app"`}
                    onKeyUp={() => handleSearchJob()}
                />
                <i class="fas fa-backspace remove" onClick={() => deleteButtonAction()}></i>
            </div>

            <button onClick={() => submitSearch()}>Search</button>
        </div>
    )
}
