import { mdiDotsVertical, mdiShuffle } from "@mdi/js";
import Icon from "@mdi/react";
import LikeButton from "../ButtonParts/LikeButton";
import RepeatButton from "../ButtonParts/RepeatButton";
import MenuButton from "../ButtonParts/MenuButton";

function PlayMenu() {
    return (
        <div className="container mx-auto flex justify-center my-auto">
            <RepeatButton />
            <button className="btn btn-ghost">
                <Icon path={mdiShuffle} size={1} />
            </button>
            <LikeButton />
            <MenuButton />
        </div>
    );
}

export default PlayMenu;
