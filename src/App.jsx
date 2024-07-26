import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/player" element={<div>플레이어</div>} />
                <Route path="/album" element={<div>앨범</div>} />
                <Route path="/playlist" element={<div>재생목록</div>} />
                <Route path="/downlaod" element={<div>다운로드</div>} />
            </Routes>
        </>
    );
}

export default App;
