import React from 'react'
import { Select } from 'antd';

const { Option } = Select;
export default function ProfileInfo() {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return (
        <div className="profile__info">
            <div className="profile__info-basic">
                <div className="info__logo" style={{ backgroundImage: "url(/images/item_default.png)" }}></div>
                <div className="info__name text-center py-3 font-weight-bold">HAHA</div>
                <hr />
                <div className="info__item d-flex align-items-center justify-content-between">
                    <span><i class="fas fa-envelope-open"></i>Email</span>
                    <span className="font-weight-bold">aaaaaa</span>
                    
                </div>
                <div className="info__item d-flex align-items-center justify-content-between">
                    <span><i class="fas fa-birthday-cake"></i>Birth day</span>
                    <span className="font-weight-bold">Birth day</span>
                </div>
                <div className="info__item d-flex align-items-center justify-content-between">
                    <span><i class="fas fa-venus-mars"></i>Gender</span>
                    <span className="font-weight-bold">aaaaaa</span>
                </div>
                <div className="info__item d-flex align-items-center justify-content-between">
                    <span> <i class="fas fa-map-marker-alt" ></i>From</span>
                    <span className="font-weight-bold">Viet Nam</span>
                </div>
                <div className="info__item d-flex align-items-center justify-content-between">
                    <span><i class="fas fa-user"></i>Member since</span>
                    <span className="font-weight-bold">aaaaaa</span>
                </div>


            </div>
            <div className="profile__info-desc">
                <div className="desc__item desc__item-skill">
                    <div className="d-flex justify-content-between">
                        <span>Skills</span>
                        <span style={{ color: "blue" }}>Add new</span>
                    </div>

                    <div className="item__addnew d-flex flex-column">
                        <input type="text" placeholder="Add Skill (e.g Voice Talent)" />
                        <hr />
                        <div className="item__addnew-btn d-flex justify-content-between">
                            <button>
                                Cancle
                            </button>
                            <button>
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="item__box d-flex flex-wrap">
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="desc__item desc__item-certification pt-4">
                    <div className="d-flex justify-content-between">
                        <span>Certification</span>
                        <span style={{ color: "blue" }}>Add new</span>
                    </div>

                    <div className="item__addnew d-flex flex-column ">
                        <input type="text" placeholder="Certification or Award" />
                        <hr />
                        <div className="item__addnew-btn d-flex justify-content-between">
                            <button>
                                Cancle
                            </button>
                            <button>
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="item__box d-flex flex-wrap">
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                        <div className="item__box-item">
                            <span>aaaaaaaaaa</span>
                            <i class="far fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
