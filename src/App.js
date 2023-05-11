import logo from "./logo.svg";
import "./reset.css";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";
import { useEffect, useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovieList(res.data.results);
        console.log(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const addMovie = (movie) => {
    console.log(movie);
    setWatchList([...watchList, movie]);
  };

  const removeMovie = (movie) => {
    const newState = watchList.filter((movieVar) => {
      return movieVar !== movie;
    });
    setWatchList(newState);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          list={watchList}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist list={watchList} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
