function PlayBar() {
    return (
        <div>
            <input
                type="range"
                min={0}
                max="100"
                defaultValue="40"
                step="0.1"
                className="range range-xs"
            />
        </div>
    );
}
export default PlayBar;
