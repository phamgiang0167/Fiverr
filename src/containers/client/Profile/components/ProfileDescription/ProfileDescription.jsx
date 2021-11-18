import React from 'react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { actAddNewBox, actDeleteItem } from "store/actions/user"
import Swal from "sweetalert2"
function ProfileDescription({userLoggedIn}) {
    const dispatch = useDispatch()
    const renderSkills = () => {
        return userLoggedIn.skill?.map((item, index) => {
            return (
                <div className="item__box-item" key={index}>
                    <span>{item}</span>
                    <i 
                        class="far fa-trash-alt" 
                        onClick={() => dispatch(actDeleteItem("skill", userLoggedIn, item))}
                    ></i>
                </div>
            )
        })
    }

    const renderCertification = () => {
        return userLoggedIn.certification?.map((item, index) => {
            return (
                <div className="item__box-item" key={index}>
                    <span>{item}</span>
                    <i 
                        class="far fa-trash-alt"
                        onClick={() => dispatch(actDeleteItem("certification", userLoggedIn, item))}
                    ></i>
                </div>
            )
        })
    }
    const showAddNewBox = (id) => {
        let box = document.getElementById(id)
        box.classList.remove("d-none")
        box.classList.add("d-flex")
        box.classList.add('flex-column')

    }
    const hideAddNewBox = (id) => {
        let box = document.getElementById(id)
        box.classList.add("d-none")
        box.classList.remove("d-flex")
        box.classList.remove('flex-column')
    }
    const handleAddNewBox = (type, id) => {
        let value = document.getElementById(id).value
        if (value) {
            dispatch(actAddNewBox(type, userLoggedIn, value))
        } else {
            Swal.fire(
                'Error!',
                'Empty input field.',
                'error'
            )
        }
        document.getElementById(id).value = ""
    }
    return (
        <div className="profile__info-desc">
            <div className="desc__item desc__item-skill">
                <div className="d-flex justify-content-between">
                    <span>Skills</span>
                    <span
                        style={{ color: "blue" }}
                        onClick={(e) => showAddNewBox('skillbox__addnew')}
                    >
                        Add new
                    </span>
                </div>

                <div className="item__addnew addnew__skill" id="skillbox__addnew">
                    <input type="text" placeholder="Add Skill (e.g Voice Talent)" id="input_newskill" />
                    <hr />
                    <div className="item__addnew-btn d-flex justify-content-between">
                        <button
                            onClick={() => hideAddNewBox('skillbox__addnew')}
                        >
                            Cancle
                        </button>
                        <button
                            onClick={() => handleAddNewBox('skill', "input_newskill")}
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div className="item__box d-flex flex-wrap">
                    {renderSkills()}
                </div>
            </div>
            <hr />
            <div className="desc__item desc__item-certification pt-4">
                <div className="d-flex justify-content-between">
                    <span>Certification</span>
                    <span
                        style={{ color: "blue" }}
                        onClick={(e) => showAddNewBox('certificationbox__addnew')}
                    >
                        Add new
                    </span>
                </div>

                <div className="item__addnew" id="certificationbox__addnew">
                    <input type="text" placeholder="Certification or Award" id="input_newCertification" />
                    <hr />
                    <div className="item__addnew-btn d-flex justify-content-between">
                        <button
                            onClick={() => hideAddNewBox("certificationbox__addnew")}
                        >
                            Cancle
                        </button>
                        <button
                            onClick={() => handleAddNewBox("certification", "input_newCertification")}
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div className="item__box d-flex flex-wrap">
                    {renderCertification()}
                </div>
            </div>
        </div>
    )
}

export default memo(ProfileDescription)
