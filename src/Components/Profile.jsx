import axios from "axios";
import Footer from "./Footer";
import Nav from './Nav'
import React, { useEffect } from 'react';

const Profile = () => {
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('token'); // Replace with your actual Bearer token
                const profileRes = await axios.get('https://foora-go.predevsolutions.com/api/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                localStorage.setItem('username', profileRes.data.data.name)
                localStorage.setItem('userage', profileRes.data.data.age)
                localStorage.setItem('userweight', profileRes.data.data.weight)
                localStorage.setItem('userimg', profileRes.data.data.image)
                localStorage.setItem('userheight', profileRes.data.data.height)
                localStorage.setItem('usercity', profileRes.data.data.city)
                localStorage.setItem('userarea', profileRes.data.data.area)
                localStorage.setItem('email', profileRes.data.data.email)
                localStorage.setItem('phone', profileRes.data.data.phone)
                localStorage.setItem('UserId', profileRes.data.data.id)
                console.log(profileRes.data); // Handle the profileRes data
            } catch (error) {
                console.error(error); // Handle errors
            }
        };

        fetchProfileData();
    }, []);
    return (
        <div>
            <Nav />
            <section className="py-5 my-5 mb-5">
                <div className="container">
                    <div className="back-color rounded-lg d-block d-sm-flex">
                        <div className="profile-tab-nav border-right me-4">
                            <div className="p-5 ms-0">
                                <div>
                                    <div className="d-flex justify-content-start ms-2">
                                        <img
                                            src={localStorage.getItem('userimg')}
                                            id="photo"
                                            className="rounded-circle"
                                            alt=""
                                            style={{ width: 80, height: 80 }}
                                        />
                                    </div>
                                    <h5 className="fw-bolder mt-3">{localStorage.getItem('username')}</h5>
                                </div>
                                <div className="profile-tab-nav border-right">
                                    <div
                                        className="nav flex-column nab"
                                        id="v-pills-tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                        <a
                                            className="nav-link active"
                                            id="Personal-tab"
                                            data-toggle="pill"
                                            href="#Personal"
                                            role="tab"
                                            aria-controls="Personal"
                                            aria-selected="true"
                                        >
                                            <i className="bx bxs-user-detail" />
                                            Personal Information
                                        </a>
                                        <a
                                            className="nav-link"
                                            id="Skills-tab"
                                            data-toggle="pill"
                                            href="#Skills"
                                            role="tab"
                                            aria-controls="Skills"
                                            aria-selected="false"
                                        >

                                            <i className="bx bxs-color" />
                                            Skills
                                        </a>
                                        {/* <a
                                            className="nav-link"
                                            id="matches-tab"
                                            data-toggle="pill"
                                            href="#matches"
                                            role="tab"
                                            aria-controls="matches"
                                            aria-selected="false"
                                        >
                                            <i className="bx bx-history" />
                                            Match History
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="Personal"
                                role="tabpanel"
                                aria-labelledby="Personal-tab"
                            >
                                <div className="row my-5">
                                    <h3 className="mb-4 fw-bolder">Your Information</h3>
                                    <p className="text-muted">
                                        View your personal information , including email address and your
                                        body specification where you can be contacted
                                    </p>
                                    <div className="col-sm-5 mb-3 mb-sm-0 my-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col-sm-6 col-md-9">
                                                        <h5 className="card-title">Name</h5>
                                                    </div>
                                                    <div className="col-6 col-md-3">
                                                        <p className="card-text text-muted">
                                                            <i
                                                                className="bx bx-user-circle display-6"
                                                                style={{ color: "#f9800a" }}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="card-text text-muted">{localStorage.getItem('username')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 mb-3 mb-sm-0 my-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col-sm-6 col-md-9">
                                                        <h5 className="card-title">Age</h5>
                                                    </div>
                                                    <div className="col-6 col-md-3">
                                                        <p className="card-text text-muted">
                                                            <i
                                                                className="bx bx-detail display-6 "
                                                                style={{ color: "#f9800a" }}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="card-text text-muted">{localStorage.getItem('userage')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 mb-3 mb-sm-0 my-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col-sm-6 col-md-9">
                                                        <h5 className="card-title">Weight</h5>
                                                    </div>
                                                    <div className="col-6 col-md-3">
                                                        <p className="card-text text-muted">
                                                            <i
                                                                className="bx bx-body display-6"
                                                                style={{ color: "#f9800a" }}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="card-text text-muted">{localStorage.getItem('userweight')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 mb-3 mb-sm-0 my-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col-sm-6 col-md-9">
                                                        <h5 className="card-title">Height</h5>
                                                    </div>
                                                    <div className="col-6 col-md-3">
                                                        <p className="card-text text-muted">
                                                            <i
                                                                className="bx bx-body display-6"
                                                                style={{ color: "#f9800a" }}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="card-text text-muted">{localStorage.getItem('userheight')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="Skills"
                                role="tabpanel"
                                aria-labelledby="Skills-tab"
                            >
                                <div className="row my-5">
                                    <h3 className="mb-4 fw-bolder">Your Skills</h3>
                                    <p className="text-muted">
                                        View your personal skills , including speed and team skills where
                                        you can be contacted
                                    </p>
                                    <div className="col-sm-5 mb-3 mb-sm-0 my-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col-sm-6 col-md-9">
                                                        <h5 className="card-title">Speed</h5>
                                                    </div>
                                                    <div className="col-6 col-md-3">
                                                        <p className="card-text text-muted">
                                                            <i
                                                                className="bx bx-run display-6"
                                                                style={{ color: "#ff9800" }}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="card-text text-muted">89</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 mb-3 mb-sm-0 my-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col-sm-6 col-md-9">
                                                        <h5 className="card-title">Dribling</h5>
                                                    </div>
                                                    <div className="col-6 col-md-3">
                                                        <p className="card-text text-muted">
                                                            <i
                                                                className="bx bx-football bx-fade-up display-6"
                                                                style={{ color: "#ff9800" }}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="card-text text-muted">89</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 mb-3 mb-sm-0 my-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col-sm-6 col-md-9">
                                                        <h5 className="card-title">Shoot</h5>
                                                    </div>
                                                    <div className="col-6 col-md-3">
                                                        <p className="card-text text-muted">
                                                            <i
                                                                className="bx bx-football bx-fade-right display-6"
                                                                style={{ color: "#ff9800" }}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="card-text text-muted">89</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 mb-3 mb-sm-0 my-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row ">
                                                    <div className="col-sm-6 col-md-9">
                                                        <h5 className="card-title">Team</h5>
                                                    </div>
                                                    <div className="col-6 col-md-3">
                                                        <p className="card-text text-muted">
                                                            <i
                                                                className="bx bxs-group display-6"
                                                                style={{ color: "#ff9800" }}
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="card-text text-muted">89</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )





}

export default Profile
