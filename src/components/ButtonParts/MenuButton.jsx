import { mdiClose, mdiDotsVertical } from "@mdi/js";
import Icon from "@mdi/react";

export default function MenuButton() {
    return (
        <label className="swap swap-rotate btn btn-ghost">
            <input type="checkbox" />
            <Icon path={mdiDotsVertical} size={1} className="swap-off fill-current" />
            <Icon path={mdiClose} size={1} className="swap-on fill-current" />
        </label>
    );
}
