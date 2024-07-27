import { mdiPause, mdiPlay } from "@mdi/js";
import Icon from "@mdi/react";

export default function PlayButton() {
    return (
        <label className="swap btn btn-ghost">
            <input type="checkbox" />
            <Icon path={mdiPlay} size={1} className="swap-on fill-current" />
            <Icon path={mdiPause} size={1} className="swap-off fill-current" />
        </label>
    );
}
