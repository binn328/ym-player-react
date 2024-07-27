function PlayInfo() {
    return (
        <div className="container mx-auto flex justify-center gap-4 px-4 py-4 ">
            {/* 앨범아트 */}
            <div className="w-24 h-24">
                <img
                    src="https://i.scdn.co/image/ab67616d0000b273d2aef3a3145992dd8820e10d"
                    className="rounded-box"
                />
            </div>
            {/* 제목 + 아티스트 */}
            <div className="font-semibold my-auto w-24">
                <p>Title</p>
                <p>Artist</p>
            </div>
        </div>
    );
}

export default PlayInfo;
