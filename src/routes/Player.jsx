import Icon from "@mdi/react";
import {
    mdiAlbum,
    mdiPlay,
    mdiPause,
    mdiStop,
    mdiSkipPrevious,
    mdiSkipNext,
    mdiRepeat,
    mdiShuffle,
    mdiHeartOutline,
    mdiDotsVertical,
} from "@mdi/js";

function Player() {
    return (
        <div>
            {/* 상단 플레이어 */}
            <div className="container flex justify-center">
                <div className="rounded-box w-32 h-32 bg-slate-800 px-auto py-auto"></div>
                <div className="join join-vertical justify-center">
                    <p className="join-item">title</p>
                    <p className="join-item">artist</p>
                </div>
                <div className="container grid grid-rows-2">
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
                    <div className="container flex">
                        <div className="w-2/3">
                            {/* 재생컨트롤 버튼 바 */}
                            <div className="container mx-auto flex justify-center lg:col-span-3 my-auto">
                                <button className="btn btn-ghost">
                                    <Icon path={mdiSkipPrevious} size={1} />
                                </button>
                                <button className="btn btn-ghost">
                                    <Icon path={mdiPause} size={1} />
                                </button>
                                <button
                                    className="btn btn-ghost"
                                    onClick={() => setIsShow(!isShow)}>
                                    <Icon path={mdiStop} size={1} />
                                </button>
                                <button className="btn btn-ghost">
                                    <Icon path={mdiSkipNext} size={1} />
                                </button>
                                <p className="my-auto">1:40 / 3:44</p>
                            </div>
                        </div>
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
            </div>

            {/* 하단 재생목록 리스트 */}
            <div></div>
        </div>
    );
}

export default Player;
