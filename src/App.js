import './App.css';
import {useState,useEffect} from 'react';
import MovieList  from './components/MovieList.js';
import Heading from './components/MovieListHeading.js';
import SearchBar from './components/SearchBar.js';
import AddFavourite from './components/AddFavourite'
import RemoveFavourite from './components/RemoveFavourite'


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites,setFavourites] = useState([]);

useEffect(()=>{
  fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=7df801e4`)
  .then(res=>{return res.json()})
  .then(data=>{
    if(data.Search){
      setMovies(data.Search);
      console.log(movies);
    }
  })
},[searchValue])


function addFavouriteMovie(movie){
  let newFavouriteMovielist;
  setFavourites(prev=>{
    newFavouriteMovielist = [...prev,movie];
    return newFavouriteMovielist;
  });
}
const removeFavouriteMovie = (movie) => {
  const newFavouriteList = favourites.filter(
    (favourite) => favourite.imdbID !== movie.imdbID
  );
  setFavourites(newFavouriteList);
};

console.log("favourites is ",favourites);
  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center  mt-4 mb-4">
        <Heading heading="Movies"/>
        <SearchBar value={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
          <MovieList movies={movies}
           AddFavourite={AddFavourite}
           addFavouriteMovie={addFavouriteMovie}
           />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<Heading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList movies={favourites}
         AddFavourite={RemoveFavourite}
         addFavouriteMovie={removeFavouriteMovie}
         />
			</div>
  </div>
  );
}

export default App;
