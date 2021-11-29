import React from 'react'
import { useHistory } from 'react-router'
export default function Categories(props) {
    const history = useHistory()
    const {typeJobs} = props
    const renderSubTypes = (list) => {
        return list?.map((item, index) => {
            return (
                <div 
                    className="sub__item"
                    key={item._id}
                    onClick={() => history.push(`/subtype/${item._id}`)}
                >
                    <span>{item.name}</span>
                </div>
            )
        })
    }
    const renderCategories = () => {
        return typeJobs?.map((item, index) => {
            return (
                <div
                    key={item._id}
                    className="category"
                >
                    <div className="category__title">
                        <span onClick={() => history.push(`type/${item._id}`)}>{item.name}</span>
                        <i class="fas fa-chevron-down" data-toggle="collapse" href="#sub__category"></i>
                    </div>
                    <div className="sub__category collapse" id="sub__category">
                        {renderSubTypes(item.subTypeJobs)}
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="header__categories">
            <div className="catelogy__label d-flex justify-content-between align-items-center">
                <span>Browse categories</span>
                <i class="fas fa-chevron-down" data-toggle="collapse" href="#sub__categories"></i>
            </div>

            <div className="sub__categories collapse" id="sub__categories">
                {renderCategories()}
                
            </div>
        </div>
    )
}
