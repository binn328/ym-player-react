import PlayBar from "./PlayerMenuParts/PlayBar";
import PlayController from "./PlayerMenuParts/PlayController";
import PlayInfo from "./PlayerMenuParts/PlayInfo";
import PlayMenu from "./PlayerMenuParts/PlayMenu";
import MusicInfo from "./PlayerParts/MusicInfo";

function Player() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>
            <div className="container flex">
                <div>
                    <PlayInfo />
                </div>
                <div className="container my-auto grid grid-rows-2">
                    <PlayBar />
                    <div className="flex my-auto justify-around">
                        <PlayController />
                        <PlayMenu />
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="container">
                {arr.map(() => {
                    return (
                        <>
                            <MusicInfo />
                            <div className="divider my-0"></div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Player;
