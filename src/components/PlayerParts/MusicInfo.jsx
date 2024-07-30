import Icon from "@mdi/react";
import { mdiEqual, mdiSortVariantRemove } from "@mdi/js";
import MenuButton from "../ButtonParts/MenuButton";
import LikeButton from "../ButtonParts/LikeButton";

export default function MusicInfo() {
    return (
        <div className="flex my-1">
            <span className="my-auto px-4">
                <Icon path={mdiEqual} size={1} />
            </span>
            <img
                src="https://i.scdn.co/image/ab67616d0000b273d2aef3a3145992dd8820e10d"
                className="rounded-box w-24 h-24 mx-4"
            />
            <p className="w-full my-auto font-semibold text-left mx-4">Title</p>
            <div className="flex my-auto">
                <p className="my-auto mx-4">3:44</p>
                <button className="btn btn-ghost">
                    <Icon path={mdiSortVariantRemove} size={1} />
                </button>
                <LikeButton />
                <MenuButton />
            </div>
        </div>
    );
}
