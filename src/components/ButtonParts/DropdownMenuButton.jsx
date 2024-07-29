import Icon from "@mdi/react";
import { mdiDotsHorizontal, mdiCog, mdiLogout } from "@mdi/js";
import { useNavigate } from "react-router-dom";

export default function DropdownMenuButton() {
    let navigate = useNavigate();

    return (
        <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost rounded-btn">
                <Icon path={mdiDotsHorizontal} size={1} />
            </summary>
            <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-[1] w-32 p-2 shadow">
                <li className="mx-auto">
                    <p>binn328</p>
                </li>
                <div className="divider my-0"></div>
                <li className="mx-auto">
                    <a
                        onClick={() => {
                            navigate("/settings");
                        }}>
                        <Icon path={mdiCog} size={1} />
                        Settings
                    </a>
                </li>
                <li className="mx-auto">
                    <a onClick={() => {}}>
                        <Icon path={mdiLogout} size={1} />
                        Logout
                    </a>
                </li>
            </ul>
        </details>
    );
}
