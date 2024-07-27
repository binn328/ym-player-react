import {
    mdiAlbum,
    mdiDotsVertical,
    mdiHeartOutline,
    mdiPause,
    mdiPlay,
    mdiRepeat,
    mdiShuffle,
    mdiSkipNext,
    mdiSkipPrevious,
    mdiStop,
} from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

function NowPlayingBar() {
    let [isShow, setIsShow] = useState(true);
    return (
        <div
            className={`container mx-auto w-auto rounded-box bg-base-300 fixed inset-x-0 bottom-0 transition ease-in duration-300 ${
                isShow ? "translate-y-none" : "translate-y-full"
            }`}>
            {/* 재생바 */}
            <div>
                <input
                    type="range"
                    min={0}
                    max="100"
                    defaultValue="40"
                    step="0.1"
                    className="range range-xs"
                />
            </div>
            {/* 정보 바 */}
            <div className="container mx-auto grid grid-cols-3 lg:grid-cols-5 px-4 pt-2 pb-4 h-28">
                {/* 앨범아트 + 제목 */}
                <div className="grid grid-cols-2">
                    {/* 앨범아트 */}
                    <div className="rounded-box bg-base-100 h-24 w-24 grid items-center place-items-center">
                        <Icon path={mdiAlbum} size={3} />
                    </div>
                    {/* 제목 + 아티스트 */}
                    <div className="flex-col flex-auto flex items-center justify-evenly font-semibold">
                        <p>Title</p>
                        <p>Artist</p>
                    </div>
                </div>
                {/* 구분선 */}
                {/* <div className="divider divider-horizontal"></div> */}
                {/* 재생컨트롤 버튼 바 */}
                <div className="container mx-auto flex justify-center lg:col-span-3 my-auto">
                    <button className="btn btn-ghost">
                        <Icon path={mdiSkipPrevious} size={1} />
                    </button>
                    <button className="btn btn-ghost">
                        <Icon path={mdiPause} size={1} />
                    </button>
                    {/* <button>
                        <Icon path={mdiPlay} size={1} />
                    </button> */}
                    <button className="btn btn-ghost" onClick={() => setIsShow(!isShow)}>
                        <Icon path={mdiStop} size={1} />
                    </button>
                    <button className="btn btn-ghost">
                        <Icon path={mdiSkipNext} size={1} />
                    </button>
                    <p className="my-auto">1:40 / 3:44</p>
                </div>
                {/* 구분선 */}
                {/* <div className="divider divider-horizontal justify-self-end" /> */}
                {/* 재생 메뉴 바 */}
                <div className="container grid grid-cols-4 mx-auto my-auto justify-self-end">
                    <button className="btn btn-ghost">
                        <Icon path={mdiRepeat} size={1} />
                    </button>
                    <button className="btn btn-ghost">
                        <Icon path={mdiShuffle} size={1} />
                    </button>
                    <button className="btn btn-ghost">
                        <Icon path={mdiHeartOutline} size={1} />
                    </button>
                    <button className="btn btn-ghost">
                        <Icon path={mdiDotsVertical} size={1} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NowPlayingBar;
