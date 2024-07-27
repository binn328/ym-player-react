import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import NowPlayingBar from "./components/NowPlayingBar";
import AlbumPage from "./routes/AlbumPage";
import Player from "./routes/Player";

function App() {
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
                <Route path="/playlist" element={<div>재생목록</div>} />
                <Route path="/download" element={<div>다운로드</div>} />
            </Routes>
            <NowPlayingBar />
        </>
    );
}

export default App;
