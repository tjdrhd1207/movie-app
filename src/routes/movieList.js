import Button from "../Button";
import styles from "../App.module.css";
import { useEffect, useState} from "react";
import axios from 'axios';
import { Route, Routes, Link, Router } from 'react-router-dom';
import HelloWorld from '../HelloWorld';
import Movie from '../components/Movie';
import movieList from "../css/movieList.css";

function MovieList() {
  



  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieCnt, setMovieCnt] = useState();
  const [reviews, setReviews] = useState([]);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(4);

  const searchMovieInfo = async(event) =>{

    
    //console.log(event);

    const client_id = `HSE89T6wcK0_bWpi6Gwv`;
    const client_secret = `5MkrcmyMXx`;

    const searchMovieResponse = await axios("https://openapi.naver.com/v1/search/cafearticle.json",{
      params : {
        query : event
      },
      headers : {
        'X-Naver-Client-Id' : client_id,
        'X-Naver-Client-Secret' : client_secret
      }
      
    });

    
    setReviews(searchMovieResponse.data);
    console.log("결과 : "+searchMovieResponse.data);
    console.log(searchMovieResponse);
  }

  const getMovies = async() => {
    let jsonResponse = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
    );
    let jsonFetch = await jsonResponse.json();
      
      setMovies(jsonFetch.data.movies);
      console.log(jsonFetch.data.movies);
      setMovieCnt(jsonFetch.data.movies.length);
      console.log(jsonFetch.data.movies.length);
      //console.log(jsonFetch.data.movie_count);
      setLoading(false);
  };

  const moveSlicePre = () =>{
    

    setStartPoint((e)=>{
      return (e-1);
      
    });
    setEndPoint((e)=>{return (e-1)});
    console.log(startPoint+", "+endPoint);
  }

  const moveSliceNext = () =>{
    setStartPoint((e)=>{
      return (e+1);
      
    });
    setEndPoint((e)=>{
      return (e+1)});
    console.log(startPoint+", "+endPoint+", "+movieCnt);
  }

  useEffect(()=>{
    getMovies();    
  }, []);
  //console.log(movies);
  return (
    <div>
      <button className="movebtn pre" onClick={moveSlicePre} hidden={startPoint === 0 ? true : false}>&lt;</button>
      {loading ? 
        (<h1>Loading....</h1>)
         : (<div className="grid-container">
              {movies.slice(startPoint,endPoint).map((movie)=>
               <Movie 
                  key={movie.id} 
                  id={movie.id}
                  coverImg={movie.medium_cover_image} 
                  title={movie.title} 
                  summary={movie.summary} 
                  genres={movie.genres} />
              )}
            </div>
      )}
      <button className="movebtn next" onClick={moveSliceNext} hidden={startPoint === movieCnt ? true : false}>&gt;</button>
    </div>
    );
}

export default MovieList;
