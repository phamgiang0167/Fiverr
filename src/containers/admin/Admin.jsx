import React from 'react'
import PropTypes from 'prop-types'
import './styles/modal.css'
import './styles/style4.css'
import './styles/main.css'
import { Fragment } from 'react'
function Admin(props) {
    return (
        <Fragment>
            <div className="wrapper">
                {/* Sidebar Holder */}
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Bootstrap Sidebar</h3>
                        <strong>BS</strong>
                    </div>
                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#homeSubmenu">
                                <i className="fa fa-home" />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-briefcase" />
                                About
                            </a>
                            <a href="#pageSubmenu">
                                <i className="fa fa-files-o" />
                                Pages
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-link" />
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-paperclip" />
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-paper-plane" />
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className="list-unstyled CTAs">
                        <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                        </li>
                        <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
                    </ul>
                </nav>
                {/* Page Content Holder */}
                <div id="content">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                                    <i className="glyphicon glyphicon-align-left" />
                                    <span>Toggle Sidebar</span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#">Page</a></li>
                                    <li><a href="#">Page</a></li>
                                    <li><a href="#">Page</a></li>
                                    <li><a href="#">Page</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="card text-center">
                            {/* Header */}
                            <div className="card-header myCardHeader">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="text-left text-primary font-weight-bold">Danh sách nhân viên</h3>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm nhân viên</button>
                                    </div>
                                </div>
                            </div>
                            {/* Body */}
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Tên nhân viên" id="searchName" />
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-bordered table-hover myTable">
                                    <thead className="text-primary">
                                        <tr>
                                            <th className="nowrap">
                                                <span className="mr-1">Mã nhân viên</span>
                                                <i className="fa fa-arrow-up" id="SapXepTang" />
                                                <i className="fa fa-arrow-down" id="SapXepGiam" />
                                            </th>
                                            <th>Họ và tên nhân viên</th>
                                            <th>Email</th>
                                            <th>Ngày sinh</th>
                                            <th>Chức vụ</th>
                                            <th><em className="fa fa-cog" /></th>
                                        </tr>
                                    </thead>
                                    <tbody id="tableDanhSach">
                                    </tbody>
                                </table>
                            </div>
                            {/* Footer */}
                            <div className="card-footer myCardFooter">
                                <nav>
                                    <ul className="pagination justify-content-center" id="ulPhanTrang">
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <header className="head-form mb-0">
                            <h2 id="header-title">Log In</h2>
                        </header>
                        {/* Modal Header */}
                        {/* 	<div class="modal-header">
					<h4 class="modal-title" id="modal-title">Modal Heading</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div> */}
                        {/* Modal body */}
                        <div className="modal-body">
                            <form role="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user" /></span>
                                        </div>
                                        <input type="msnv" name="msnv" id="msnv" className="form-control input-sm" placeholder="Mã số nhân viên" />
                                    </div>
                                    <span className="sp-thongbao" id="tbMaNV" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                        </div>
                                        <input type="name" name="name" id="name" className="form-control input-sm" placeholder="Họ và tên" />
                                    </div>
                                    <span className="sp-thongbao" id="tbTen" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                        </div>
                                        <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email" />
                                    </div>
                                    <span className="sp-thongbao" id="tbEmail" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-key" /></span>
                                        </div>
                                        <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Mật khẩu" />
                                    </div>
                                    <span className="sp-thongbao" id="tbMatKhau" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                        </div>
                                        <input type="text" name="ngaylam" id="datepicker" className="form-control" placeholder="Ngày làm" />
                                    </div>
                                    <span className="sp-thongbao" id="tbNgay" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                                        </div>
                                        <select className="form-control" id="chucvu">
                                            <option>Chọn chức vụ</option>
                                            <option>Sếp</option>
                                            <option>Trưởng phòng</option>
                                            <option>Nhân viên</option>
                                        </select>
                                    </div>
                                    <span className="sp-thongbao" id="tbChucVu" />
                                </div>
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer" id="modal-footer">
                            <button id="btnThemNV" type="button" className="btn btn-success">Thêm người dùng</button>
                            <button id="btnCapNhat" type="button" className="btn btn-success">Cập nhật</button>
                            <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default Admin

