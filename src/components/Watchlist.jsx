import MovieCard from "./MovieCard"

const Watchlist = (props) => {

    let list = props.list

    let removeMovie = props.removeMovie

    let movieDisplay = list.map((movie, index) => {
        return(
            <MovieCard movie={movie} removeMovie={removeMovie} list={list}/>
        )
    })

    return(
        <div className="watchlist">
            <h1>Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
                </div>
        </div>
    )
}

export default Watchlist;