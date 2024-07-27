function Album() {
    return (
        <div className="container border rounded-box flex flex-col items-center py-2 gap-2">
            <div className="w-32 h-32">
                <img
                    src="https://i.scdn.co/image/ab67616d0000b273d2aef3a3145992dd8820e10d"
                    className=""
                />
            </div>
            <div>
                <p className="truncate w-32">Guilty Gear Xrd - Sign</p>
                <p className="truncate w-32 text-sm">Daisuke Ishiwatari</p>
            </div>
        </div>
    );
}

export default Album;
