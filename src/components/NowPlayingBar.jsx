import { useEffect, useState } from "react";
import PlayController from "./PlayerMenuParts/PlayController";
import PlayMenu from "./PlayerMenuParts/PlayMenu";
import PlayInfo from "./PlayerMenuParts/PlayInfo";
import PlayBar from "./PlayerMenuParts/PlayBar";
import { useSelector } from "react-redux";

function NowPlayingBar() {
    let [isPlay, setIsPlay] = useState(true);
    return (
        <div
            className={`container mx-auto w-auto rounded-box bg-base-300 fixed inset-x-0 bottom-0 transition ease-in duration-300 ${
                isPlay ? "translate-y-none" : "translate-y-full"
            }`}>
            {/* 재생바 */}
            <PlayBar />

            <div className="container grid grid-cols-3">
                {/* 앨범아트 + 제목 */}
                <PlayInfo />
                {/* 재생컨트롤 버튼 바 */}
                <PlayController />
                {/* 재생 메뉴 바 */}
                <PlayMenu />
            </div>
        </div>
    );
}

export default NowPlayingBar;
