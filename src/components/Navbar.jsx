import Icon from "@mdi/react";
import { mdiMenu, mdiDotsHorizontal } from "@mdi/js";
import ThemeControllButton from "./ThemeControllButton";
function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <Icon path={mdiMenu} size={1} />
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">YM Player</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <Icon path={mdiDotsHorizontal} size={1} />
                </button>
                <ThemeControllButton />
            </div>
        </div>
    );
}

export default Navbar;
