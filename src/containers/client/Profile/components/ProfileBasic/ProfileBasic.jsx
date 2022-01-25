import React from 'react'
import { useDispatch } from 'react-redux'
import moment from "moment"
import { actChangeProfileGender, actChangeProfileBirthday, actChangeProfileName } from "store/actions/user"
import Swal from 'sweetalert2'
import userManagement from 'apis/QuanLiNguoiDung'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProfileBasic() {
    const history = useHistory()
    const dispatch = useDispatch()
    let { userLoggedIn } = useSelector(state => state.validateUser)
    let user = JSON.parse(userLoggedIn)
    let disabledButton = false
    if (history.location.state && history.location.state.user) {
        user = history.location.state.user
        disabledButton = true
    }
    if (!user) return (<></>)
    return (
        <div className="profile__info-basic">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div
                className="info__logo"
            >
                <img src={user.avatar ? user.avatar : "/images/item_default.png"} alt="" id="logo" />
                <input type="file" id="choose__logo" style={{ display: "none" }}
                    onChange={(evt) => {
                        var tgt = evt.target || window.event.srcElement,
                            files = tgt.files;

                        // FileReader support
                        if (FileReader && files && files.length) {
                            var fr = new FileReader();
                            fr.onload = function () {

                                Swal.fire({
                                    title: 'Sweet!',
                                    text: 'Your image',
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
                                        document.getElementById('logo').src = fr.result;
                                    }
                                    userManagement.updateProfileImage(tgt.files[0])
                                    toast.success('Updated profile image!', {
                                        position: "top-center",
                                        autoClose: 1000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                    });
                                })
                            }
                            fr.readAsDataURL(files[0]);
                        }

                    }}
                />
                <i
                    class="fas fa-camera"
                    onClick={() => {
                        document.getElementById("choose__logo").click()
                    }}
                ></i>

            </div>
            <button
                className="info__name text-center py-3 font-weight-bold"
                onClick={() => {
                    if (!disabledButton)
                        dispatch(actChangeProfileName(user))
                }}
                title="Click to change youe name"
            >
                {user.name}
            </button>
            <hr />
            <div className="info__item d-flex align-items-center justify-content-between">
                <span><i class="fas fa-birthday-cake"></i>Birth day</span>
                <span className="font-weight-bold"
                    onClick={() => {
                        if (!disabledButton)
                            dispatch(actChangeProfileBirthday(user))
                    }}
                    title="Click to change the birthday"
                >
                    {moment(user.birthday).format("DD-MM-YYYY")}
                </span>
            </div>
            <div className="info__item d-flex align-items-center justify-content-between">
                <span><i class="fas fa-venus-mars"></i>Gender</span>
                <span
                    className="font-weight-bold"
                    onClick={() => {
                        if (!disabledButton)
                            dispatch(actChangeProfileGender(user))
                    }}
                    title="Click to change the gender"
                >
                    {user.gender === true ? "Male" : "Female"}
                </span>
            </div>
            <div className="info__item d-flex align-items-center justify-content-between">
                <span> <i class="fas fa-map-marker-alt" ></i>From</span>
                <span className="font-weight-bold">Viet Nam</span>
            </div>
        </div>
    )
}
export default ProfileBasic