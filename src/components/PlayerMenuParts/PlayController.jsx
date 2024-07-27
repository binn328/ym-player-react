import { mdiPause, mdiPlay, mdiSkipNext, mdiSkipPrevious, mdiStop } from "@mdi/js";
import Icon from "@mdi/react";
import PlayButton from "../ButtonParts/PlayButton";

function PlayController() {
    return (
        <div className="container mx-auto my-auto flex justify-center">
            <div className="flex my-auto">
                <button className="btn btn-ghost">
                    <Icon path={mdiSkipPrevious} size={1} />
                </button>
                <PlayButton />
                <button className="btn btn-ghost">
                    <Icon path={mdiStop} size={1} />
                </button>
                <button className="btn btn-ghost">
                    <Icon path={mdiSkipNext} size={1} />
                </button>
            </div>

            <p className="my-auto">1:40 / 3:44</p>
        </div>
    );
}

export default PlayController;
