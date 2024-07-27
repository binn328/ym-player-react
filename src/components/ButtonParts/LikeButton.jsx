import Icon from "@mdi/react";
import { mdiHeart, mdiHeartOutline } from "@mdi/js";

export default function LikeButton() {
    return (
        <label className="swap btn btn-ghost">
            <input type="checkbox" />
            <Icon path={mdiHeart} size={1} className="swap-on fill-current" />
            <Icon path={mdiHeartOutline} size={1} className="swap-off fill-current" />
        </label>
    );
}
