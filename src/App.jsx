import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import NowPlayingBar from "./components/NowPlayingBar";
import AlbumPage from "./routes/AlbumPage";
import Player from "./components/Player";
import Playbar from "./components/PlayerMenuParts/PlayBar";
import { toggleIsPlay } from "./store/player";
import { useDispatch } from "react-redux";

function App() {
    let dispatch = useDispatch();
    return (
        <>
            <Navbar />
            <div className="divider"></div>

            <Routes>
                <Route
                    path="/player"
                    element={
                        <div>
                            <Player />
                        </div>
                    }
                />
                <Route
                    path="/album"
                    element={
                        <div>
                            <AlbumPage />
                        </div>
                    }
                />
                <Route path="/playlist" element={<div></div>} />
                <Route path="/download" element={<div>다운로드</div>} />
            </Routes>
            <NowPlayingBar />
        </>
    );
}

export default App;
