import { mdiRepeat, mdiRepeatOnce } from "@mdi/js";
import Icon from "@mdi/react";

export default function RepeatButton() {
    return (
        <label className="swap btn btn-ghost">
            <input type="checkbox" />
            <Icon path={mdiRepeat} size={1} className="swap-off fill-current" />
            <Icon path={mdiRepeatOnce} size={1} className="swap-on fill-current" />
        </label>
    );
}
