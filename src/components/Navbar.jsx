import Icon from "@mdi/react";
import { mdiMenu, mdiDotsHorizontal } from "@mdi/js";
import ThemeControllButton from "./ThemeControllButton";
import { useNavigate } from "react-router-dom";
import DropdownMenuButton from "./ButtonParts/DropdownMenuButton";

function Navbar() {
    let nevigate = useNavigate();

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" onClick={() => nevigate("/")}>
                    YM Player
                </a>
                <ThemeControllButton />
            </div>
            <div>
                <ul className="menu menu-horizontal ">
                    <li>
                        <a onClick={() => nevigate("/player")}>Player</a>
                    </li>
                    <li>
                        <a onClick={() => nevigate("/album")}>Album</a>
                    </li>
                    <li>
                        <a onClick={() => nevigate("/playlist")}>Playlist</a>
                    </li>
                    <li>
                        <a onClick={() => nevigate("/download")}>Download</a>
                    </li>
                </ul>
            </div>
            <div className="flex-none">
                {/* <button className="btn btn-square btn-ghost">
                    <Icon path={mdiDotsHorizontal} size={1} />
                </button> */}
                <DropdownMenuButton />
            </div>
        </div>
    );
}

export default Navbar;
