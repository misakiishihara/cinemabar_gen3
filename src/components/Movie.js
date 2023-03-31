import React from 'react'

function Movie(props) {
    const posterUrl = `https://image.tmdb.org/t/p/w500${props.poster}`;

    return (
        <div className='movie'>
            <img src={posterUrl} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>Rating: {props.rating}</p>
        </div>
    )
}

export default Movie;