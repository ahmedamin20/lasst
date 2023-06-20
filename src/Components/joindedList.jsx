import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// import '../lineUp.css'
const JoindedList = () => {
    const [joins, setJoins] = useState([]);
    const [stateBtn, setStateBtn] = useState(0)
    const [message, setMessage] = useState();

    useEffect(() => {
        const apiUrl = 'https://foora-go.predevsolutions.com/api/get-all-joins';
        const token = localStorage.getItem('token');

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        axios.get(apiUrl)
            .then(response => {
                const data = response.data.data;
                // Process the data here
                setJoins(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    // ---------------getAll Joins--------------------\\


    //----------------Accept or Rejcet------------\\


    const Accept = (user_id, game_id) => {
        const data = {
            game_id: game_id,
            user_id: user_id,
            status: 1
        };

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://foora-go.predevsolutions.com/api/game/join/change-status',
            headers: {},
            data: data
        };

        const response = axios(config)
            .then(response => {
                window.location.reload()
                setMessage(response.data.message)
                if (response.success) {
                    toast.success(message, {
                        position: toast.POSITION.TOP_RIGHT,
                        onClose: () => {
                            window.location.reload();
                        },
                    });
                } else {
                    toast.error(message, {
                        position: toast.POSITION.TOP_RIGHT,
                        onClose: () => {
                            window.location.reload();
                        },
                    });
                }
            })
            .catch((error) => {
                console.alert(error);
            });
    }
    const Reject = (user_id, game_id) => {

        const data = {
            game_id: game_id,
            user_id: user_id,
            status: 0
        };

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://foora-web.test/api/game/join/change-status',
            headers: {},
            data: data
        };

        const response = axios(config)
            .then(response => {
                window.location.reload()
                setMessage(response.data.message)
                if (response.success) {
                    toast.success(message, {
                        position: toast.POSITION.TOP_RIGHT,
                        onClose: () => {
                            window.location.reload();
                        },
                    });
                } else {
                    toast.error(message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    //----------------Accept or Rejcet------------\\

    return (
        <div className="col-md-10 col-lg-8 col-xl-6	">
            <ToastContainer />

            <div className="card mb-3">
                <div className="card-body p-4 my-2">
                    {joins && joins.map((joinItem) => (
                        <div className="d-flex mt-2 flex-start w-100" style={{ borderBottom: "1px solid #8080807a", padding: "1rem" }} key={joinItem.id}>
                            <img
                                className="rounded-circle shadow-1-strong me-3"
                                src={joinItem.player.image}
                                alt="avatar"
                                width={80}
                                height={65}
                            />
                            <div className="w-100">
                                <h5>{joinItem.player.name}</h5>
                                <a href="imags/profile.jpeg" />
                                <h6>{joinItem.venue_name}</h6>
                                <div className="form-outline">
                                    <label
                                        className="form-label text-muted"
                                        htmlFor="textAreaExample"
                                    >
                                        Wanna {joinItem.player.name} with your team ?
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <button
                                        type="button"
                                        className="btn btn-outline-success me-5"
                                        onClick={() => Accept(joinItem.player.id, joinItem.id)}

                                    >
                                        Accept
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => Reject(joinItem.player.id, joinItem.id)}
                                    >
                                        Reject
                                    </button>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            </div>



        </div>
    )
}

export default JoindedList
