import PlayBar from "./PlayerMenuParts/PlayBar";
import PlayController from "./PlayerMenuParts/PlayController";
import PlayInfo from "./PlayerMenuParts/PlayInfo";
import PlayMenu from "./PlayerMenuParts/PlayMenu";

function Player() {
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
        </div>
    );
}

export default Player;
