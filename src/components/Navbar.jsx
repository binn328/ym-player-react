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
                <ThemeControllButton />
            </div>
            <div>
                <ul className="menu menu-horizontal bg-base-200">
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li>
                        <a>Item 2</a>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <Icon path={mdiDotsHorizontal} size={1} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
