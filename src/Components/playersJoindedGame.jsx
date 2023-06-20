import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const PlayersJoindedGame = () => {
    const token = localStorage.getItem("token")
    const [message, setMessage] = useState();

    const handleClick = async (userid, gameid) => {
        try {
            const data = {
                game_id: gameid,
                user_id: userid
            };

            const response = await axios.post('https://foora-go.predevsolutions.com/api/cancel-join', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(res => {
                // window.location.reload()
                setMessage(res.data.message);
                if (res.data.success) {
                    toast.success(message, {
                        position: toast.POSITION.TOP_RIGHT,
                        onClose: () => {
                            window.location.reload()
                        }
                    });
                } else {
                    toast.error(message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            });
            console.log(JSON.stringify(response.data));
        } catch (error) {
            console.log(error);
        }
    };
    const [player, setPlayer] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://foora-go.predevsolutions.com/api/get-player-joined-games', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setPlayer(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    // console.log(player[0].player)
    return (
        <div className="row">
            <ToastContainer />

            {
                player && player.map((item, index) => (
                    <div className="row" key={item.id}>

                        <div
                            className="card d-block my-1 mx-4"
                            style={{ width: "22rem", height: "24rem" }}
                        >
                            <img
                                src="imags/background.jpg"
                                className="card-img-top my-2"
                                alt="..."
                            />
                            <div className="card-body fw-bolder px-1">
                                <h6>{item.venue_name}</h6>
                                <p className="my-1">
                                    <i className="bx bxs-watch" style={{ color: "#0a1429" }} />{" "}
                                    <span>{item.date}</span> <span>|</span>{" "}
                                    <span>{item.time}</span>
                                </p>
                                <p className="my-1">
                                    <i
                                        className="bx bxs-dollar-circle"
                                        style={{ color: "#32aa37" }}
                                    />{" "}
                                    {item.price}
                                </p>
                                <p>
                                    <i className="bx bxs-user" style={{ color: "#0a1429" }} />{" "}
                                    <span>{localStorage.getItem("JoindedplayersNumber")}</span> <span>/</span> <span>{item.players_number}</span>{" "}
                                    <span>Players</span>
                                </p>
                                <div className="my-3">
                                    <a
                                        key={item.id}
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#cancel-joined-request"
                                        data-bs-whatever=""
                                        className="btn btn-danger mx-2"
                                        onClick={() => {
                                            handleClick(item.player.id, item.id)
                                            console.log(item.player.id + " | " + item.id)
                                        }}
                                    >
                                        Cancel Request
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div >
    )
}

export default PlayersJoindedGame
