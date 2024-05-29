import NavigationBar from './components/navigation/NavigationBar';
import Main from './components/main/Main';
import { useEffect, useState } from 'react';
import Search from './components/navigation/Search';
import NumberOfResults from './components/navigation/NumberOfResults';
import ListBox from './components/main/ListBox';
import MovieList from './components/main/list/MovieList';
import WatchedSummary from './components/main/watched/WatchedSummary';
import WatchedMoviesList from './components/main/watched/WatchedMoviesList';

export const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

export const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = '9d7f4d79';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  // This is use to register side effect to fetch the data when component mounts
  useEffect(function () {
    // fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=interstellar`)
    //   .then((res) => res.json())
    //   .then((data) => setMovies(data.Search));

    //Better way with async function
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=interstellar`
      );
      const data = await res.json();
      setMovies(data.Search);
    }

    fetchMovies();
  }, []);

  return (
    <>
      <NavigationBar>
        <Search />
        <NumberOfResults movies={movies} />
      </NavigationBar>

      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>

        <ListBox>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </ListBox>

        {/* EXPLICITLY DEFINED PROPS
              - instead of accepting children in the ListBox, we accept element (can be named differently)
              - can be used in case we need to pass several elements with different names
              - prefered way is the above
        
        <ListBox element={<MovieList movies={movies} />} />
        <ListBox
          element={
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          }
        /> */}
      </Main>
    </>
  );
}
