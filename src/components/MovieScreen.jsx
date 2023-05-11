import MovieCard from './MovieCard'
import './MovieScreen.css'
import PageButtons from './PageButttons'

const MovieScreen = (props) => {

    let movieList = props.movieList

    let addMovie = props.addMovie

    let removeMovie = props.removeMovie

    let list = props.list

    let page = props.page

    let setPage = props.setPage

    console.log(movieList[1])

    const movieDisplay = movieList.map((movie, index) => {
       return( 
         
       <MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} list={list}/>
       )
       
    })

    return(
        <div className="page">
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">
                {movieDisplay}
                <br/>
                <PageButtons page={page} setPage={setPage}/>
                </div>
            </div>
    )
}

export default MovieScreen;