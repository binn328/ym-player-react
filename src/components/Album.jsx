import Icon from "@mdi/react";
import { mdiAlbum, mdiPlay } from "@mdi/js";

function Album() {
    return (
        <div className="relative rounded-box bg-base-100 h-48 w-40 grid items-center place-items-center border mx-4 my-4">
            <div className="relative w-32 h-32">
                {/* <Icon path={mdiAlbum} size={3} /> */}
                <img
                    src="https://i.scdn.co/image/ab67616d0000b273d2aef3a3145992dd8820e10d"
                    className="w-32 h-32 absolute m-auto left-0 right-0"
                />
                <button className="rounded-full w-32 h-32 btn btn-ghost">
                    <Icon path={mdiPlay} size={3} className="absolute m-auto left-0 right-0" />
                </button>
            </div>

            <div>
                <p className="truncate w-32">Guilty Gear Xrd - Sign</p>
                <p className="truncate w-32 text-sm">Daisuke Ishiwatari</p>
            </div>
        </div>
    );
}

export default Album;
