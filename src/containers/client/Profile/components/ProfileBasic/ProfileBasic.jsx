import React from 'react'
import { useDispatch } from 'react-redux'
import moment from "moment"
import { actChangeProfileGender, actChangeProfileBirthday, actChangeProfileName } from "store/actions/user"
import { memo } from 'react'
import Swal from 'sweetalert2'
import userManagement from 'apis/QuanLiNguoiDung'
import { useHistory } from 'react-router'
function ProfileBasic(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    let { userLoggedIn } = props
    let disabledButton = false
    if(history.location.state && history.location.state.user){
        userLoggedIn =history.location.state.user
        disabledButton = true
    } 
    return (
        <div className="profile__info-basic">
            <div
                className="info__logo"
            >
                <img src="/images/item_default.png" alt="" id="logo" />
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
                onClick={() => dispatch(actChangeProfileName(userLoggedIn))}
                title="Click to change youe name"
                disabled={disabledButton}
            >
                {userLoggedIn.name}
            </button>
            <hr />
            <div className="info__item d-flex align-items-center justify-content-between">
                <span><i class="fas fa-birthday-cake"></i>Birth day</span>
                <span className="font-weight-bold"
                    onClick={() => dispatch(actChangeProfileBirthday(userLoggedIn))}
                    title="Click to change the birthday"
                    disabled={disabledButton}
                >
                    {moment(userLoggedIn.birthday).format("DD-MM-YYYY")}
                </span>
            </div>
            <div className="info__item d-flex align-items-center justify-content-between">
                <span><i class="fas fa-venus-mars"></i>Gender</span>
                <span
                    className="font-weight-bold"
                    onClick={() => dispatch(actChangeProfileGender(userLoggedIn))}
                    title="Click to change the gender"
                    disabled={disabledButton}
                >
                    {userLoggedIn.gender === "true" ? "Male" : "Female"}
                </span>
            </div>
            <div className="info__item d-flex align-items-center justify-content-between">
                <span> <i class="fas fa-map-marker-alt" ></i>From</span>
                <span className="font-weight-bold">Viet Nam</span>
            </div>
        </div>
    )
}
export default memo(ProfileBasic)