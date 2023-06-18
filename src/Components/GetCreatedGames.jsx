import React, { useEffect, useState } from 'react'
import GameUpdate from './GameUpdate'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
const GetCreatedGames = () => {
    const [message, setMessage] = useState();

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);
    const handleCancelDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            const createdGameID = localStorage.getItem('createdGameID');

            const response = await axios.delete(`https://foora-go.predevsolutions.com/api/delete-game/${createdGameID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const { success, message } = response.data;

            setMessage(message);
            if (success) {
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
        } catch (error) {
            console.error('Error deleting game:', error);
        }
    };



    const fetchGames = async () => {
        try {
            const token = localStorage.getItem('token'); // Replace with your actual bearer token
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const response = await axios.get('https://foora-go.predevsolutions.com/api/get-created-games', { headers });
            setGames(response.data.data);
            console.log(response.data.data[0].user.name)
        } catch (error) {
            console.error('Error fetching games:', error);
            setGames([]);
        }
    };


    return (
        <div>
            <h3 className="mb-4 fw-bolder">Your matches history</h3>
            <p className="text-muted">Manage and edit your games requests.</p>
            <div className="row">
                <ToastContainer />

                {games && games.map((game) => (
                    <div
                        className="card d-block my-1 mx-4"
                        style={{ width: "22rem", height: "24rem" }}
                        key={game.id}
                    >
                        <img
                            src="images/background.jpg"
                            className="card-img-top my-2"
                            alt="..."
                        />
                        <div className="card-body fw-bolder px-1">
                            <h6>{game.venue_name}</h6>
                            <p className="my-1">
                                <i className="bx bxs-watch" style={{ color: "#0a1429" }} />{" "}
                                <span>{game.date}</span> <span>|</span>{" "}
                                <span>{game.time}</span>
                            </p>
                            <p className="my-1">
                                <i className="bx bxs-watch" style={{ color: "#0a1429" }} />{" "}
                                <span>{game.city}</span> |{" "}
                                <span>{game.area}</span>
                            </p>
                            <p className="my-1">
                                <i
                                    className="bx bxs-dollar-circle"
                                    style={{ color: "#32aa37" }}
                                />{" "}
                                {game.price} EGP
                            </p>
                            <p>
                                <i className="bx bxs-user" style={{ color: "#0a1429" }} />{" "}
                                <span>2</span> <span>/</span>{" "}
                                <span>{game.players_number}</span>{" "}
                                <span>Players</span>
                            </p>
                            <div className="my-3 d-flex justify-between align-center flex-wrap mx-auto pt-2">
                                <a
                                    key={game.id}
                                    href="#"
                                    className="btn btn-warning mx-auto"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-request"
                                    data-bs-whatever=""
                                    onClick={() => {
                                        localStorage.setItem('createdGameID', game.id)
                                        localStorage.setItem("gamePrice", game.price)
                                        localStorage.setItem("venue_name", game.venue_name)
                                        localStorage.setItem("playersNumber", game.players_number)
                                        localStorage.setItem("gameTime", game.time)
                                        localStorage.setItem("gameDate", game.date)
                                        localStorage.setItem("phone", game.phone)
                                        localStorage.setItem("gamecity", game.city)
                                        localStorage.setItem("gameArea", game.area)
                                        localStorage.setItem("gametype", game.type)
                                        localStorage.setItem("gameLocation", game.location)
                                        localStorage.setItem("JoindedplayersNumber", game.joined_players_count)
                                        localStorage.setItem("creatorName", game.user.name)
                                    }}
                                >
                                    Edit Request
                                </a>
                                <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#cancel-request"
                                    data-bs-whatever=""
                                    className="btn btn-danger mx-auto"
                                    onClick={() => {
                                        localStorage.setItem('createdGameID', game.id)
                                        handleCancelDelete()
                                    }
                                    }
                                >
                                    Delete Request
                                </a>
                                <Link
                                    data-bs-whatever=""
                                    className="btn btn-success my-2"
                                    style={{ transform: "translateX(80%)" }}
                                    to="/games"
                                    onClick={() => {
                                        localStorage.setItem('createdGameID', game.id)
                                        localStorage.setItem("gamePrice", game.price)
                                        localStorage.setItem("venue_name", game.venue_name)
                                        localStorage.setItem("playersNumber", game.players_number)
                                        localStorage.setItem("gameTime", game.time)
                                        localStorage.setItem("gameDate", game.date)
                                        localStorage.setItem("phone", game.phone)
                                        localStorage.setItem("gamecity", game.city)
                                        localStorage.setItem("gameArea", game.area)
                                        localStorage.setItem("gametype", game.type)
                                        localStorage.setItem("gameLocation", game.location)
                                        localStorage.setItem("JoindedplayersNumber", game.joined_players_count)
                                        localStorage.setItem("creatorName", game.user.name)
                                    }}
                                >
                                    View Game
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div
                className="modal fade"
                id="cancel-request"
                tabIndex={-1}
                aria-hidden="true"
            >
                {/* <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5  className="modal-title">Cancel Request</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to cancel your request ?</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                No
                            </button>
                            <button type="button" onClick={handleCancelDelete} className="btn btn-primary">
                                Yes Cancel
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
            <div
                className="modal fade"
                id="edit-request"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5 fw-bolder"
                                id="exampleModalLabel"
                            >
                                Edit Your Game Request
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <GameUpdate />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetCreatedGames
