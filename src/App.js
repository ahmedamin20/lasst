import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Game from './Components/Game';
import Staduim from './Components/Staduim';
import Profile from './Components/Profile';
import AllStaduims from './Components/allStaduims';
import User from './Components/User';
import Login from './Components/Login';
import SginUp from './Components/SginUp';
import Welcome from './Components/Welcome';
import SearchGames from './Components/SearchGames';
import GameInfo from './Components/GameInfo';
import LineUp from './Components/LineUp';
import ErrorPage from './Components/ErrorPage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import LineUpShow from './Components/LineUpShow';

const App = () => {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Router>

        <Routes>
          {localStorage.getItem("token") ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/games" element={<Game />} />
              <Route path="/staduim" element={<Staduim />} />
              <Route path="/staduims" element={<AllStaduims />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user-setting" element={<User />} />
              <Route path="/created-games" element={<SearchGames />} />
              <Route path="/gameInfo" element={<GameInfo />} />
              <Route path="/lineup" element={<LineUp />} />
              <Route path="/lineupshow" element={<LineUpShow />} />
              {/* <Route path="*" element={<ErrorPage />} /> */}
            </>
          )
            : (
              <>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sgin-up" element={<SginUp />} />
                {/* <Route path="/*" element={<ErrorPage />} /> */}
              </>
            )
          }


        </Routes>

      </Router>
    </div>
  );
};

export default App;
