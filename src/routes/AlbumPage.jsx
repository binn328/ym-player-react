import Album from "../components/Album";

function AlbumPage() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center">
            {arr.map(() => {
                return <Album />;
            })}
        </div>
    );
}

export default AlbumPage;
