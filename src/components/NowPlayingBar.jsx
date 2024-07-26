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
            className={`bg-base-300 fixed inset-x-0 bottom-0 transition ease-in duration-300 ${
                isShow ? "translate-y-none" : "translate-y-full"
            }`}>
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
            <div className="bg-base-300 flex px-4 pt-2 pb-4 h-28">
                <div className="flex-auto flex items-center justify-evenly">
                    <div className="rounded-box bg-base-100 h-24 w-24 grid items-center place-items-center">
                        <Icon path={mdiAlbum} size={3} />
                    </div>
                    <div className="flex-col flex-auto flex items-center justify-evenly font-semibold">
                        <p>Title</p>
                        <p>Artist</p>
                    </div>
                </div>

                <div className="divider divider-horizontal"></div>
                <div className="flex-auto flex items-center justify-evenly">
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
                    <p>1:40 / 3:34</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-auto flex items-center justify-evenly">
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
