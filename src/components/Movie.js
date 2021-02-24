import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: {
                        year, title, summary, poster, genres
                    },
                }}
            >
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ui className="movie__genres">
                {genres.map((genre, index) => { // index는 배열의 원소
                    return <li key={index} className="movie__genre">{genre}</li>
                })}
            </ui>                         
            <p className="movie__summary">{summary.slice(0, 180)}...</p> 
        </div>
        </Link>
      </div>
    );
}

Movie.prototypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, //genres 는 장르가 여러개 이기 때문에 배열로 처리

};

export default Movie;
