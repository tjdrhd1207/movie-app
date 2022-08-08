import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState} from "react";
import { Route, Routes, Link, Router } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import MovieList from './movieList';

function App() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const searchMovieInfo = async(event) =>{
    console.log(event);

    const client_id = `HSE89T6wcK0_bWpi6Gwv`;
    const client_secret = `5MkrcmyMXx`;

    //let searchMovieResponse = await fetch();
  }

  const getMovies = async() => {
    let jsonResponse = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
    );
    let jsonFetch = await jsonResponse.json();
      setMovies(jsonFetch.data.movies);
      setLoading(false);
  };

  useEffect(()=>{
    getMovies();    
  }, []);
  console.log(movies);
  return (

    <div>
      <div>
            <Link to='/helloWorld'>
              <button>Home</button>
            </Link>
          
            <Link to='/movieList'>
              <button>Hello</button>
            </Link>
      </div>
        <Routes>
          <Route path="/helloWorld" element={<HelloWorld/>}></Route>
          <Route path="/movieList" element={<MovieList/>}></Route>
        </Routes>
    </div>

    );
}

export default App;
