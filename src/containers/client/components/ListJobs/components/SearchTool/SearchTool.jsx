
import React, {memo} from 'react'
import { useDispatch } from 'react-redux'
import {
    actFilter
} from '../../modules/actions'
    
function SearchTool() {
    const dispatch = useDispatch()
    let filterBy = {
        proServices: false,
        localSellers: false,
        onlineSellers: false,
        deliveryTime: false,
        minPrice: 0,
        maxPrice: Infinity
    }
    
    const handleChangePriceRange = () => {
        let minPrice = document.getElementById('minPrice').value
        let maxPrice = document.getElementById("maxPrice").value
        filterBy.maxPrice = maxPrice ? maxPrice : Infinity
        filterBy.minPrice = minPrice ? minPrice : 0
        dispatch(actFilter(filterBy))
    }

    const handleShowPriceInput = () => {
        console.log('a')
        let input = document.getElementsByClassName("price__input")[0]
        if(input.style.display == "none"){
            input.style.display = "block"
        }else{
            input.style.display = "none"
        }
        
    }
    return (
        <div className="searchtool__container d-flex flex-wrap justify-content-sm-between">
            <div className="searchtool__left">
                <button className="searchtool__filter-price" >
                    <span onClick={() => handleShowPriceInput()}>Budget</span>
                    <i class="fas fa-chevron-down"></i>
                    <div className="price__input" style={{display: "none"}}>
                        <table>
                            <tr>
                                <td>Min.</td>
                                <td>Max.</td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="minPrice" type="number" placeholder="Any" min="0" max="5000"/>
                                </td>
                                <td>
                                    <input id="maxPrice" type="number" placeholder="Any" min="0" max="5000"/>
                                </td>
                            </tr>
                        </table>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="clear">Clear All</span>
                            <span className="apply"
                                onClick ={() => handleChangePriceRange()}
                            >
                                Apply
                            </span>
                        </div>
                    </div>
                </button>
            </div>
            <div className="searchtool__right d-flex flex-wrap">
                <div className="searchtool__right-item" id="pro-service">
                    <label className="switch">
                        <input type="checkbox"
                            onClick={(event) => {
                                filterBy = {...filterBy, proServices: event.target.checked}
                                dispatch(actFilter(filterBy))
                            }} />
                        <span className="slider round" />
                    </label>
                    <span>Pro serviecs</span>
                </div>
                <div className="searchtool__right-item" id="local-seller">
                    <label className="switch">
                        <input type="checkbox" 
                            onClick={(event) => {
                                filterBy = {...filterBy, localSellers: event.target.checked}
                                dispatch(actFilter(filterBy))
                            }} 
                        />
                        <span className="slider round" />
                    </label>
                    <span>Local sellers</span>
                </div>
                <div className="searchtool__right-item" id="online-seller">
                    <label className="switch">
                        <input type="checkbox" 
                            onClick={(event) => {
                                filterBy = {...filterBy, onlineSellers: event.target.checked}
                                dispatch(actFilter(filterBy))
                            }} 
                        />
                        <span className="slider round" />
                    </label>
                    <span>Online sellers</span>
                </div>
                <div className="searchtool__right-item" id="deliver">
                    <label className="switch">
                        <input type="checkbox" 
                            onClick={(event) => {
                                filterBy = {...filterBy, deliveryTime: event.target.checked}
                                dispatch(actFilter(filterBy))
                            }} 
                        />
                        <span className="slider round" />
                    </label>
                    <span>Deliver</span>
                </div>
            </div>
        </div>
    )
}
export default memo(SearchTool)