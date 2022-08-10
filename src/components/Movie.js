import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../css/movieList.css";
import Slider from "react-slick";

function Movie({id, coverImg, title, summary, genres}){

    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    /**
   * Slider
   */

     /* const SHOWING_CLASS = "showing";
     const firstSlide = document.querySelector(".movie-image:first-child");
     firstSlide.classList.add(SHOWING_CLASS); */



    return <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={coverImg} /*onClick={()=> searchMovieInfo(movie.title)}*/ className="movie_img" alt={title}/>
                  <h3><Link to={`/movie/${id}`} style={{ textDecoration: 'none', color : '#fff'}}>{title}</Link></h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  {summary.length > 235 ? `${summary.slice(0,235)}...`: summary}
                </div>
              </div>
              {/* <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
              <ul>{genres.map((genre)=>(<li key={genre}>{genre}</li>))}</ul>
              <p>{summary.length > 235 ? `${summary.slice(0,235)}...`: summary}</p> */}
            </div>;
}

Movie.propTypes = {
    id :  PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title :    PropTypes.string.isRequired,
    summary :  PropTypes.string.isRequired,
    genres :   PropTypes.arrayOf(PropTypes.string).isRequired

};

export default Movie;