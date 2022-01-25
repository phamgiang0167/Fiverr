import React, { useState } from 'react'
import { Button } from 'antd';
import { useHistory } from 'react-router';
import { actCompleteJob, actDeleteGig } from 'store/actions/gig';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import userManagement from 'apis/QuanLiNguoiDung';
import jobManagement from 'apis/QuanLiCongViec';
import Swal from "sweetalert2"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function GigItem({ data, displayForm, setDisplayForm }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [userBooking, setUserBooking] = useState({})
    useEffect(() => {
        if (data.usersBooking) {
            userManagement.getUsetDetails(data.usersBooking)
                .then(data => {
                    setUserBooking(data.data)
                })
                .catch(err => console.log(err))
        }
    }, [])
    return (
        <div className="gig__item">
            <hr />
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <input type="file" id="change_image" style={{ display: "none" }}
                onChange={(evt) => {
                    var tgt = evt.target || window.event.srcElement,
                        files = tgt.files;

                    // FileReader support
                    if (FileReader && files && files.length) {
                        var fr = new FileReader();
                        fr.onload = function () {

                            Swal.fire({
                                title: 'Sweet!',
                                text: 'Job image',
                                imageUrl: fr.result,
                                imageWidth: 200,
                                imageHeight: 200,
                                imageAlt: 'Custom image',
                                showCancelButton: true,
                                confirmButtonText: 'Yes, delete it!',
                                cancelButtonText: 'No, cancel!',
                                reverseButtons: true
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    document.getElementById('item__logo').style.backgroundImage = `url(${fr.result})`;
                                }
                                jobManagement.changeImage(tgt.files[0], data._id)
                                toast.success("Change image success")

                            })
                        }
                        fr.readAsDataURL(files[0]);
                    }

                }}
            />
            <div className="row">
                <div className="col-sm-4">
                    <div className="item__logo" id="item__logo" style={{ backgroundImage: `url(${data.image ? data.image : "/images/item_default.png"})` }}>
                        <div className="item__logo-overplay">

                            <button onClick={() => {
                                document.getElementById("change_image").click()
                            }}>Change image</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 px-2">
                    <div className="item__name font-weight-bold py-2 text-center text-sm-left">
                        {data.name}
                    </div>
                    <div className="item__status p-2 d-flex flex-wrap justify-content-between align-items-center">
                        <Button type="link" onClick={() => history.push({
                            pathname: 'profile',
                            state: { user: userBooking }
                        })}>{data.status ? "No one has booked yet" : `A person is booking`}</Button>
                        <Button onClick={() => {
                            dispatch(actCompleteJob(data._id))
                        }} danger type="text"><i class="fas fa-check-circle"></i></Button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between p-2">
                        <Button type="link"
                            onClick={() => history.push({
                                pathname: `/job-details/${data._id}`
                            })}
                        >
                            <i class="fas fa-eye"></i>
                        </Button>
                        <Button type="link"
                            onClick={() => {
                                setDisplayForm({ ...displayForm, display: true, type: "edit", values: data })
                            }}
                        >
                            <i class="far fa-edit"></i>
                        </Button>
                        <Button danger type="text" onClick={() => dispatch(actDeleteGig(data._id))}><i class="far fa-trash-alt"></i></Button>
                    </div>

                </div>
            </div>
        </div>
    )
}
